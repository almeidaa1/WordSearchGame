import React, { useState, useRef, useEffect } from "react";
import blankImg from "../../imagens&videos/blankExcla.jpg";

export default function Canvas({
  rowsColumns,
  newList,
  startGame,
  setNewList,
  setCurrentWordsCompleted,
  mode, // simp, inter, avan
}) {
  let auxRow, auxColumn;
  const abcd = "abcdefghijklmnopqrstuvwxyzç";
  const rows = rowsColumns,
    columns = rowsColumns;

  const canvasRef = useRef();
  let lettersClicked = [];
  let wordChecker = [];
  const [x, setX] = useState(0);

  const [alreadyAppearedBlankImg, setAlreadyAppearedBlankImg] = useState(0);

  useEffect(() => {
    if (x == 1) {
      createCanvas();
      setAlreadyAppearedBlankImg(1);
    }
    setX((prevX) => prevX + 1);
  }, [startGame]);

  useEffect(() => {
    let canvas = canvasRef.current;
    switch (mode) {
      case "simp":
        canvas.style.border = "1px solid #33cc33";
        break;
      case "inter":
        canvas.style.border = "1px solid #ffa31a";
        break;
      case "avan":
        canvas.style.border = "1px solid crimson";
        break;
    }
  }, []);

  // RETURNA UM VALOR RANDOM PARA SE PUDER IR A STRING ABCD E SELECIONAR ALEATORIAMENTE UMA LETRA DA STRING PARA PREENCHER A SOPA
  const randomLetters = () => {
    return abcd[Math.floor(Math.random() * abcd.length)];
  };

  const onDragStart = (e) => {
    e.target.classList.add("dragging");
    lettersClicked.push(e.target.value);
  };

  const onDragEnd = (e) => {
    console.log(lettersClicked);
    console.log(wordChecker);
    const newStateList = [...newList];
    const wordCompleted = newStateList.find(
      (word) => word.name === wordChecker
    );
    if (wordCompleted) {
      const draggingCorret = document.querySelectorAll(".dragging");
      draggingCorret.forEach((letter) => letter.classList.add("completed"));
      wordCompleted.completed = true;
      setCurrentWordsCompleted((prevCurrentWordsCompleted) => {
        return [...prevCurrentWordsCompleted, wordCompleted.name];
      });
      setNewList(newStateList);
    } else {
      const draggingNotCorrect = document.querySelectorAll(
        ".dragging:not(.completed)"
      );
      draggingNotCorrect.forEach((letter) =>
        letter.classList.remove("dragging")
      );
    }
    lettersClicked = [];
    wordChecker = [];
  };
  const onDragOver = (e) => {
    e.preventDefault();
    if (
      !e.target.classList.contains("dragging") ||
      (e.target.classList.contains("completed") &&
        !e.target.classList.contains("listen"))
    ) {
      if (e.target.classList.contains("completed")) {
        e.target.classList.add("listen");
      }
      console.log(lettersClicked);
      console.log(wordChecker);
      lettersClicked.push(e.target.value);
      wordChecker = lettersClicked.join("");
      e.target.classList.add("dragging");
    }
  };

  // CRIA A SOUPA DE LETRAS PREENCHENDO-A COM LETRAS
  const createCanvas = () => {
    let canvas = canvasRef.current;

    ///ajustar o tabuleiro consonte o nivel
    let padding = 0;
    switch (mode) {
      case "simp":
        padding = 8.7;
        break;
      case "inter":
        padding = 2.07;
        break;
      default:
        break;
    }

    // Cria A Sopa De Letras
    let soup = [];
    for (let i = 0; i < rows; i++) {
      soup[i] = [];
      for (let j = 0; j < columns; j++) {
        let block = document.createElement("button");
        block.className = "letra";
        block.style.padding = padding + "px";
        if (mode === "simp") {
          block.style.paddingLeft = padding + 1.29 + "px";
          block.style.paddingRight = padding + 1.29 + "px";
        }
        /* DRAG AND DROP */
        block.setAttribute("draggable", true);
        block.addEventListener("dragstart", (e) => onDragStart(e));
        block.addEventListener("dragend", (e) => onDragEnd(e));
        block.addEventListener("dragover", (e) => onDragOver(e));

        soup[i][j] = block;
        canvas.appendChild(block);
      }
      let breakLine = document.createElement("br");
      canvas.appendChild(breakLine);
    }

    // Adiciona As Palavras Do Array A Sopa
    addWordsToSoup(soup);

    // Adciciona As Letras De Forma Random Caso O Conteudo Na Html Na Posiçao Seja Vazio
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (soup[i][j].innerHTML.trim() === "") {
          let randomLetter = randomLetters();
          soup[i][j].value = randomLetter;
          soup[i][j].innerHTML = randomLetter;
        }
      }
    }
  };

  // ADICIONA À SOPA DE LETRAS AS PALAVRAS ALTEATORIA CONSOANTE A STRING WORDS
  const addWordsToSoup = (jogo) => {
    let position = Math.floor(Math.random() * 8);
    newList.forEach((word, index) => {
      for (let i = 0; i < word.name.length; i++) {
        switch (position) {
          case 0:
            i = leftToRight(jogo, word, i);
            break;
          case 1:
            i = rightToLeft(jogo, word, i);
            break;
          case 2:
            i = topToBottom(jogo, word, i);
            break;
          case 3:
            i = bottomToTop(jogo, word, i);
            break;
          case 4:
            i = leftDiagonalTopToBottom(jogo, word, i);
            break;
          case 5:
            i = leftDiagonalBottomToTop(jogo, word, i);
            break;
          case 6:
            i = rightDiagonalTopToBottom(jogo, word, i);
            break;
          case 7:
            i = rightDiagonalBottomToTop(jogo, word, i);
            break;
        }
        if (i === -1) position = Math.floor(Math.random() * 8);
      }
    });
  };
  const leftToRight = (jogo, word, i) => {
    if (!i) {
      let x = 0;
      auxRow = Math.floor(Math.random() * rows);
      auxColumn = Math.floor(Math.random() * columns);

      if (word.name.length + auxColumn <= columns)
        // Percorre todo o local onde supostamente a palavra vai ficar e verifica se e permitada ou nao
        for (
          ;
          x < word.name.length &&
          (jogo[auxRow][auxColumn + x].innerHTML.trim() === "" ||
            jogo[auxRow][auxColumn + x].innerHTML === word.name[x]); // para puder sobrepor a mesma letra da outra palavra
          x++
        );
      if (x !== word.name.length) return -1; // para
    }
    // coloca as palavras da esquerda para a direita
    jogo[auxRow][auxColumn + i].value = word.name[i];
    jogo[auxRow][auxColumn + i].innerHTML = word.name[i];
    // jogo[auxRow][auxColumn + i].style.color = "green";
    return i;
  };

  const rightToLeft = (jogo, word, i) => {
    if (!i) {
      let x = 0;
      auxRow = Math.floor(Math.random() * rows);
      auxColumn = Math.floor(Math.random() * columns);

      if (auxColumn + 1 - word.name.length >= 0)
        for (
          ;
          x < word.name.length &&
          (jogo[auxRow][auxColumn - x].innerHTML.trim() === "" ||
            jogo[auxRow][auxColumn - x].innerHTML === word.name[x]); // para puder sobrepor a mesma letra da outra palavra
          x++
        );
      if (x !== word.name.length) return -1;
    }
    // coloca as palavras da direita para a esquerda
    jogo[auxRow][auxColumn - i].value = word.name[i];
    jogo[auxRow][auxColumn - i].innerHTML = word.name[i];
    // jogo[auxRow][auxColumn - i].style.color = "red";
    return i;
  };

  const topToBottom = (jogo, word, i) => {
    if (!i) {
      let x = 0;
      auxRow = Math.floor(Math.random() * rows);
      auxColumn = Math.floor(Math.random() * columns);

      if (word.name.length + auxRow <= rows)
        for (
          ;
          x < word.name.length &&
          (jogo[auxRow + x][auxColumn].innerHTML.trim() === "" ||
            jogo[auxRow + x][auxColumn].innerHTML === word.name[x]); // para puder sobrepor a mesma letra da outra palavra
          x++
        );
      if (x !== word.name.length) return -1;
    }
    // coloca as palavras de cima para baixo
    jogo[auxRow + i][auxColumn].value = word.name[i];
    jogo[auxRow + i][auxColumn].innerHTML = word.name[i];
    // jogo[auxRow + i][auxColumn].style.color = "blue";
    return i;
  };

  const bottomToTop = (jogo, word, i) => {
    if (!i) {
      let x = 0;
      auxRow = Math.floor(Math.random() * rows);
      auxColumn = Math.floor(Math.random() * columns);

      if (auxRow + 1 - word.name.length >= 0)
        for (
          ;
          x < word.name.length &&
          (jogo[auxRow - x][auxColumn].innerHTML.trim() === "" ||
            jogo[auxRow - x][auxColumn].innerHTML === word.name[x]); // para puder sobrepor a mesma letra da outra palavra
          x++
        );
      if (x !== word.name.length) return -1;
    }
    // coloca as palavras de baixo para cima
    jogo[auxRow - i][auxColumn].value = word.name[i];
    jogo[auxRow - i][auxColumn].innerHTML = word.name[i];
    // jogo[auxRow - i][auxColumn].style.color = "grey";
    return i;
  };

  const leftDiagonalTopToBottom = (jogo, word, i) => {
    if (!i) {
      let x = 0;
      auxRow = Math.floor(Math.random() * rows);
      auxColumn = Math.floor(Math.random() * columns);
      if (
        word.name.length + auxColumn <= columns &&
        word.name.length + auxRow <= rows
      )
        for (
          ;
          x < word.name.length &&
          (jogo[auxRow + x][auxColumn + x].innerHTML.trim() === "" ||
            jogo[auxRow + x][auxColumn + x].innerHTML === word.name[x]); // para puder sobrepor a mesma letra da outra palavra;
          x++
        );
      if (x !== word.name.length) return -1;
    }
    // coloca as palavras da diagonal esquerda para baixo
    jogo[auxRow + i][auxColumn + i].value = word.name[i];
    jogo[auxRow + i][auxColumn + i].innerHTML = word.name[i];
    // jogo[auxRow + i][auxColumn + i].style.color = "brown";
    return i;
  };

  const leftDiagonalBottomToTop = (jogo, word, i) => {
    if (!i) {
      let x = 0;
      auxRow = Math.floor(Math.random() * rows);
      auxColumn = Math.floor(Math.random() * columns);
      if (
        auxColumn + 1 - word.name.length >= 0 &&
        auxRow + 1 - word.name.length >= 0
      )
        for (
          ;
          x < word.name.length &&
          (jogo[auxRow - x][auxColumn - x].innerHTML.trim() === "" ||
            jogo[auxRow - x][auxColumn - x].innerHTML === word.name[x]); // para puder sobrepor a mesma letra da outra palavra;
          x++
        );
      if (x !== word.name.length) return -1;
    }
    // coloca as palavras da diagonal esquerda para cima
    jogo[auxRow - i][auxColumn - i].value = word.name[i];
    jogo[auxRow - i][auxColumn - i].innerHTML = word.name[i];
    // jogo[auxRow - i][auxColumn - i].style.color = "orange";
    return i;
  };

  const rightDiagonalTopToBottom = (jogo, word, i) => {
    if (!i) {
      let x = 0;
      auxRow = Math.floor(Math.random() * rows);
      auxColumn = Math.floor(Math.random() * columns);
      if (
        auxColumn + 1 - word.name.length >= 0 &&
        word.name.length + auxRow <= rows
      )
        for (
          ;
          x < word.name.length &&
          (jogo[auxRow + x][auxColumn - x].innerHTML.trim() === "" ||
            jogo[auxRow + x][auxColumn - x].innerHTML === word.name[x]); // para puder sobrepor a mesma letra da outra palavra;
          x++
        );
      if (x !== word.name.length) return -1;
    }
    // coloca as palavras da diagonal direita para baixo
    jogo[auxRow + i][auxColumn - i].value = word.name[i];
    jogo[auxRow + i][auxColumn - i].innerHTML = word.name[i];
    // jogo[auxRow + i][auxColumn - i].style.color = "pink";
    return i;
  };

  const rightDiagonalBottomToTop = (jogo, word, i) => {
    if (!i) {
      let x = 0;
      auxRow = Math.floor(Math.random() * rows);
      auxColumn = Math.floor(Math.random() * columns);
      if (
        auxRow + 1 - word.name.length >= 0 &&
        word.name.length + auxColumn <= columns
      )
        for (
          ;
          x < word.name.length &&
          (jogo[auxRow - x][auxColumn + x].innerHTML.trim() === "" ||
            jogo[auxRow - x][auxColumn + x].innerHTML === word.name[x]); // para puder sobrepor a mesma letra da outra palavra;
          x++
        );
      if (x !== word.name.length) return -1;
    }
    // coloca as palavras da diagonal direita para cima
    jogo[auxRow - i][auxColumn + i].value = word.name[i];
    jogo[auxRow - i][auxColumn + i].innerHTML = word.name[i];
    // jogo[auxRow - i][auxColumn + i].style.color = "purple";
    return i;
  };

  return (
    <div className="canvas" ref={canvasRef}>
      {!startGame && !alreadyAppearedBlankImg ? (
        <img src={blankImg} alt="" width="560.017px" height="459px" />
      ) : null}
    </div>
  );
}
