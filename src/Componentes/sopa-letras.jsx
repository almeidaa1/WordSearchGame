import { React, useState, useEffect } from "react";

export default function SopaLetras() {
  const [currentLevel, setLevel] = useState(null);

  const niveis = ["facil", "intermedio", "dificil"];
  const abcd = "abcdefghijklmnopqrstuvwxyz";
  const listOfWords = ["WORDS", "OLA", "SIM", "RUI", "MACA"];

  let canvas;
  let rows, columns;
  let auxRow, auxColumn;

  // ATRIBUI AS LINAHS E COLUNAS CONSOANTE O MODO DE JOGO
  const sizeCanvas = (level) => {
    switch (level) {
      case 1:
        rows = 5;
        columns = 5;
        break;
      case 2:
        rows = 8;
        columns = 8;
        break;
      case 3:
        rows = 15;
        columns = 15;
        break;
      default:
        rows = 0;
        columns = 0;
        break;
    }

    return [rows, columns];
  };

  // RETURNA UM VALOR RANDOM PARA SE PUDER IR A STRING ABCD E SELECIONAR ALEATORIAMENTE UMA LETRA DA STRING PARA PREENCHER A SOPA
  const randomLetters = () => {
    return abcd[Math.floor(Math.random() * abcd.length)];
  };

  // CRIA A SOUPA DE LETRAS PREENCHENDO-A COM LETRAS
  const criaCanvas = (index) => {
    setLevel(index + 1);
    // [rows, columns] = sizeCanvas(currentLevel);  <- CurrentLevel, esta atrasado no tempo (usar useEffect maybe)
    [rows, columns] = sizeCanvas(index + 1);

    let canvas = document.querySelector(".canvas");

    let breakButtons = document.createElement("br");
    canvas.appendChild(breakButtons);

    let soup = [];

    for (let i = 0; i < rows; i++) {
      soup[i] = [];
      for (let j = 0; j < columns; j++) {
        let block = document.createElement("button");
        soup[i][j] = block;
        block.className = "block";
        block.innerHTML = randomLetters();
        canvas.appendChild(block);
      }
      let breakLine = document.createElement("br");
      canvas.appendChild(breakLine);
    }

    return soup;
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
      auxRow = Math.floor(Math.random() * rows);
      do {
        auxColumn = Math.floor(Math.random() * columns);
      } while (word.length + auxColumn > columns);
    }
    // coloca as palavras da esquerda para a direita
    jogo[auxRow][auxColumn + i].innerHTML = word[i];
    jogo[auxRow][auxColumn + i].style.color = "green";
  };

  const rightToLeft = (jogo, word, i) => {
    if (!i) {
      auxRow = Math.floor(Math.random() * rows);
      do {
        auxColumn = Math.floor(Math.random() * columns);
      } while (auxColumn + 1 - word.length < 0);
    }
    // coloca as palavras da direita para a esquerda
    jogo[auxRow][auxColumn - i].innerHTML = word[i];
    jogo[auxRow][auxColumn - i].style.color = "green";
  };
  const topToBottom = (jogo, word, i) => {
    if (!i) {
      auxColumn = Math.floor(Math.random() * columns);
      do {
        auxRow = Math.floor(Math.random() * rows);
      } while (word.length + auxRow > rows);
    }
    // coloca as palavras de cima para baixo
    jogo[auxRow + i][auxColumn].innerHTML = word[i];
    jogo[auxRow + i][auxColumn].style.color = "blue";
  };
  const bottomToTop = (jogo, word, i) => {
    if (!i) {
      auxColumn = Math.floor(Math.random() * rows);
      do {
        auxRow = Math.floor(Math.random() * columns);
      } while (auxRow + 1 - word.length < 0);
    }
    // coloca as palavras de baixo para cima
    jogo[auxRow - i][auxColumn].innerHTML = word[i];
    jogo[auxRow - i][auxColumn].style.color = "blue";
  };

  const leftDiagonalTopToBottom = (jogo, word, i) => {
    if (!i) {
      do {
        auxRow = Math.floor(Math.random() * rows);
        auxColumn = Math.floor(Math.random() * columns);
      } while (
        word.length + auxColumn > columns ||
        word.length + auxRow > rows
      );
    }
    // coloca as palavras da diagonal esquerda para baixo
    jogo[auxRow + i][auxColumn + i].innerHTML = word[i];
    jogo[auxRow + i][auxColumn + i].style.color = "red";
  };
  const leftDiagonalBottomToTop = (jogo, word, i) => {
    if (!i) {
      do {
        auxRow = Math.floor(Math.random() * rows);
        auxColumn = Math.floor(Math.random() * columns);
      } while (auxColumn + 1 - word.length < 0 || auxRow + 1 - word.length < 0);
    }
    // coloca as palavras da diagonal esquerda para cima
    jogo[auxRow - i][auxColumn - i].innerHTML = word[i];
    jogo[auxRow - i][auxColumn - i].style.color = "red";
  };
  const rightDiagonalTopToBottom = (jogo, word, i) => {
    if (!i) {
      do {
        auxRow = Math.floor(Math.random() * rows);
        auxColumn = Math.floor(Math.random() * columns);
      } while (auxColumn + 1 - word.length < 0 || word.length + auxRow > rows);
    }
    // coloca as palavras da diagonal direita para baixo
    jogo[auxRow + i][auxColumn - i].innerHTML = word[i];
    jogo[auxRow + i][auxColumn - i].style.color = "red";
  };

  const rightDiagonalBottomToTop = (jogo, word, i) => {
    if (!i) {
      do {
        auxRow = Math.floor(Math.random() * rows);
        auxColumn = Math.floor(Math.random() * columns);
      } while (
        auxRow + 1 - word.length < 0 ||
        word.length + auxColumn > columns
      );
    }
    // coloca as palavras da diagonal direita para cima
    jogo[auxRow - i][auxColumn + i].innerHTML = word[i];
    jogo[auxRow - i][auxColumn + i].style.color = "red";
  };

  return (
    <>
      <div className="jogo-principal">
        {niveis.map((nivel, index) => (
          <button
            key={index}
            onClick={() => {
              canvas = criaCanvas(index);
              addWordsToSoup(canvas);
            }}
          >
            {" "}
            {nivel}{" "}
          </button>
        ))}
        <div className="canvas"></div>
      </div>
    </>
  );
}
