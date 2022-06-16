import { React, useState, useEffect, useRef } from "react";
import Timer from "./timer";

export default function SopaLetras({ rowsColumns, numberOfWords, timer }) {
  const [listOfWords, setListOfWords] = useState([
    // "WORDS",
    // "OLA",
    // "SIM",
    // "RUI",
    // "MAÇA",
  ]);
  // const [auxRow, setAuxRow] = useState(-1);
  // const [auxColumn, setAuxColumn] = useState(-1);
  let auxRow, auxColumn;
  const abcd = "abcdefghijklmnopqrstuvwxyzç";
  const rows = rowsColumns,
    columns = rowsColumns;

  // RETURNA UM VALOR RANDOM PARA SE PUDER IR A STRING ABCD E SELECIONAR ALEATORIAMENTE UMA LETRA DA STRING PARA PREENCHER A SOPA
  const randomLetters = () => {
    return abcd[Math.floor(Math.random() * abcd.length)];
  };

  // CRIA A SOUPA DE LETRAS PREENCHENDO-A COM LETRAS
  const createCanvas = () => {
    let canvas = document.querySelector(".canvas");
    let breakButtons = document.createElement("br");
    canvas.appendChild(breakButtons);

    // Cria A Sopa De Letras
    let soup = [];
    for (let i = 0; i < rows; i++) {
      soup[i] = [];
      for (let j = 0; j < columns; j++) {
        let block = document.createElement("button");
        console.log(block);
        soup[i][j] = block;
        block.className = "letra";
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
        if (soup[i][j].innerHTML.trim() === "")
          soup[i][j].innerHTML = randomLetters();
      }
    }
  };

  // ADICIONA À SOPA DE LETRAS AS PALAVRAS ALTEATORIA CONSOANTE A STRING WORDS
  const addWordsToSoup = (jogo) => {
    listOfWords.forEach((word) => {
      let position = Math.floor(Math.random() * 8);

      for (let i = 0; i < word.length; i++) {
        switch (position) {
          case 0:
            leftToRight(jogo, word, i);
            break;
          case 1:
            rightToLeft(jogo, word, i);
            break;
          case 2:
            topToBottom(jogo, word, i);
            break;
          case 3:
            bottomToTop(jogo, word, i);
            break;
          case 4:
            leftDiagonalTopToBottom(jogo, word, i);
            break;
          case 5:
            leftDiagonalBottomToTop(jogo, word, i);
            break;
          case 6:
            rightDiagonalTopToBottom(jogo, word, i);
            break;
          case 7:
            rightDiagonalBottomToTop(jogo, word, i);
            break;
        }
      }
    });
  };
  const leftToRight = (jogo, word, i) => {
    if (!i) {
      let x = 0;
      do {
        x = 0;
        auxRow = Math.floor(Math.random() * rows);
        auxColumn = Math.floor(Math.random() * columns);

        if (word.length + auxColumn <= columns)
          // Percorre todo o local onde supostamente a palavra vai ficar e verifica se e permitada ou nao
          for (
            ;
            x < word.length &&
            (jogo[auxRow][auxColumn + x].innerHTML.trim() === "" ||
              jogo[auxRow][auxColumn + x].innerHTML === word[x]); // para puder sobrepor a mesma letra da outra palavra
            x++
          );
      } while (x !== word.length);
    }
    // coloca as palavras da esquerda para a direita
    jogo[auxRow][auxColumn + i].innerHTML = word[i];
    jogo[auxRow][auxColumn + i].style.color = "green";
  };

  const rightToLeft = (jogo, word, i) => {
    if (!i) {
      let x = 0;
      do {
        x = 0;
        auxRow = Math.floor(Math.random() * rows);
        auxColumn = Math.floor(Math.random() * columns);

        if (auxColumn + 1 - word.length >= 0)
          for (
            ;
            x < word.length &&
            (jogo[auxRow][auxColumn - x].innerHTML.trim() === "" ||
              jogo[auxRow][auxColumn - x].innerHTML === word[x]); // para puder sobrepor a mesma letra da outra palavra
            x++
          );
      } while (x !== word.length);
    }
    // coloca as palavras da direita para a esquerda
    jogo[auxRow][auxColumn - i].innerHTML = word[i];
    jogo[auxRow][auxColumn - i].style.color = "red";
  };

  const topToBottom = (jogo, word, i) => {
    if (!i) {
      let x = 0;
      do {
        x = 0;
        auxRow = Math.floor(Math.random() * rows);
        auxColumn = Math.floor(Math.random() * columns);

        if (word.length + auxRow <= rows)
          for (
            ;
            x < word.length &&
            (jogo[auxRow + x][auxColumn].innerHTML.trim() === "" ||
              jogo[auxRow + x][auxColumn].innerHTML === word[x]); // para puder sobrepor a mesma letra da outra palavra
            x++
          );
      } while (x !== word.length);
    }
    // coloca as palavras de cima para baixo
    jogo[auxRow + i][auxColumn].innerHTML = word[i];
    jogo[auxRow + i][auxColumn].style.color = "blue";
  };

  const bottomToTop = (jogo, word, i) => {
    if (!i) {
      let x = 0;
      do {
        x = 0;
        auxRow = Math.floor(Math.random() * rows);
        auxColumn = Math.floor(Math.random() * columns);

        if (auxRow + 1 - word.length >= 0)
          for (
            ;
            x < word.length &&
            (jogo[auxRow - x][auxColumn].innerHTML.trim() === "" ||
              jogo[auxRow - x][auxColumn].innerHTML === word[x]); // para puder sobrepor a mesma letra da outra palavra
            x++
          );
      } while (x !== word.length);
    }
    // coloca as palavras de baixo para cima
    jogo[auxRow - i][auxColumn].innerHTML = word[i];
    jogo[auxRow - i][auxColumn].style.color = "grey";
  };

  const leftDiagonalTopToBottom = (jogo, word, i) => {
    if (!i) {
      let x = 0;
      do {
        x = 0;
        auxRow = Math.floor(Math.random() * rows);
        auxColumn = Math.floor(Math.random() * columns);
        if (word.length + auxColumn <= columns && word.length + auxRow <= rows)
          for (
            ;
            x < word.length &&
            (jogo[auxRow + x][auxColumn + x].innerHTML.trim() === "" ||
              jogo[auxRow + x][auxColumn + x].innerHTML === word[x]); // para puder sobrepor a mesma letra da outra palavra;
            x++
          );
      } while (x !== word.length);
    }
    // coloca as palavras da diagonal esquerda para baixo
    jogo[auxRow + i][auxColumn + i].innerHTML = word[i];
    jogo[auxRow + i][auxColumn + i].style.color = "brown";
  };

  const leftDiagonalBottomToTop = (jogo, word, i) => {
    if (!i) {
      let x = 0;
      do {
        x = 0;
        auxRow = Math.floor(Math.random() * rows);
        auxColumn = Math.floor(Math.random() * columns);
        if (auxColumn + 1 - word.length >= 0 && auxRow + 1 - word.length >= 0)
          for (
            ;
            x < word.length &&
            (jogo[auxRow - x][auxColumn - x].innerHTML.trim() === "" ||
              jogo[auxRow - x][auxColumn - x].innerHTML === word[x]); // para puder sobrepor a mesma letra da outra palavra;
            x++
          );
      } while (x !== word.length);
    }
    // coloca as palavras da diagonal esquerda para cima
    jogo[auxRow - i][auxColumn - i].innerHTML = word[i];
    jogo[auxRow - i][auxColumn - i].style.color = "orange";
  };

  const rightDiagonalTopToBottom = (jogo, word, i) => {
    if (!i) {
      let x = 0;
      do {
        x = 0;
        auxRow = Math.floor(Math.random() * rows);
        auxColumn = Math.floor(Math.random() * columns);
        if (auxColumn + 1 - word.length >= 0 && word.length + auxRow <= rows)
          for (
            ;
            x < word.length &&
            (jogo[auxRow + x][auxColumn - x].innerHTML.trim() === "" ||
              jogo[auxRow + x][auxColumn - x].innerHTML === word[x]); // para puder sobrepor a mesma letra da outra palavra;
            x++
          );
      } while (x !== word.length);
    }
    // coloca as palavras da diagonal direita para baixo
    jogo[auxRow + i][auxColumn - i].innerHTML = word[i];
    jogo[auxRow + i][auxColumn - i].style.color = "pink";
  };

  const rightDiagonalBottomToTop = (jogo, word, i) => {
    if (!i) {
      let x = 0;
      do {
        x = 0;
        auxRow = Math.floor(Math.random() * rows);
        auxColumn = Math.floor(Math.random() * columns);
        if (auxRow + 1 - word.length >= 0 && word.length + auxColumn <= columns)
          for (
            ;
            x < word.length &&
            (jogo[auxRow - x][auxColumn + x].innerHTML.trim() === "" ||
              jogo[auxRow - x][auxColumn + x].innerHTML === word[x]); // para puder sobrepor a mesma letra da outra palavra;
            x++
          );
      } while (x !== word.length);
    }
    // coloca as palavras da diagonal direita para cima
    jogo[auxRow - i][auxColumn + i].innerHTML = word[i];
    jogo[auxRow - i][auxColumn + i].style.color = "purple";
  };

  return (
    <>
      <div className="jogo-principal">
        <button onClick={createCanvas}>CreateCanvas</button>
        {/* <Timer /> */}
        <div className="canvas"></div>
      </div>
    </>
  );
}
