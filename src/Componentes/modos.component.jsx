import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import avan from "../imagens&videos/avan.png";
function useModos({ listOfWords, setNewList }) {
  const [isHovering, setIsHovering] = useState(false); // o modo que foi passado (quando passado isHovering fica com a class desse botao, nao clicado = false)
  const [isClicked, setIsClicked] = useState(false); // o modo que foi escolhido (clicado, isCliced fica com a class desse botao, nao clicado = false)
  const [colourButtonModeClicked, setColorButtonMode] = useState("white");
  const [numberOfWords, setNumberOfWords] = useState(0);
  const [rowsColumns, setRowsColumns] = useState(0); // numero de linhas e colunas
  const [timer, setTimer] = useState(0);
  const [formatTimer, setFormatTimer] = useState(0);

  useEffect(() => {
    formatTime(timer);
  }, [isHovering]);

  const handleMouseEnter = (e) => {
    let currentMode = e.currentTarget.className;
    if (isClicked != currentMode && isClicked != false) {
      resetColourMode();
      setIsClicked(false);
    }
    setIsHovering(currentMode);
    setGame(currentMode);
  };

  const handleMouseClick = (e) => {
    let currentMode = e.currentTarget.className;
    setIsClicked(currentMode);
    permaColourMode(currentMode);

    let count = 0;
    listOfWords.sort(() => 0.5 - Math.random());
    const array = listOfWords.filter(
      (word) => word.length < rowsColumns && count++ < numberOfWords
    );
    setNewList(array);
  };

  const handleMouseLeave = () => {
    if (!isClicked) {
      setIsHovering(false);
      let modeButton = document.querySelector("." + isHovering);
      modeButton.style.backgroundPosition = "0 0";
      modeButton.style.color = "black";
    }
  };

  const setGame = (mode) => {
    let modeButton = document.querySelector("." + mode);
    // seta o numero de palavras conforme o modo selecionado
    switch (mode) {
      case "simp": // modo simples
        setNumberOfWords(5);
        setRowsColumns(10);
        setTimer(900);
        break;
      case "inter": // modo intermedio
        setNumberOfWords(10);
        setRowsColumns(14);
        setTimer(600);
        break;
      case "avan": // modo avançado
        setNumberOfWords(15);
        setRowsColumns(16);
        setTimer(300);
        break;
      default:
        setNumberOfWords(0);
        setRowsColumns(0);
        setTimer(0);
        break;
    }
    modeButton.style.backgroundPosition = "0 80px";
    modeButton.style.color = "white";
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);

    setFormatTimer(minutes + " minutos");
  };

  const permaColourMode = (currentMode) => {
    let modeButton = document.querySelector("." + currentMode);
    switch (currentMode) {
      case "simp":
        modeButton.style.background = "#33cc33";
        setColorButtonMode("#33cc33");
        break;
      case "inter":
        modeButton.style.background = "#ffa31a";
        setColorButtonMode("#ffa31a");
        break;
      case "avan":
        modeButton.style.background = "crimson";
        setColorButtonMode("crimson");
        break;
    }
    modeButton.style.color = "white";
    modeButton.style.backgroundSize = "230px 200px";
    modeButton.style.backgroundPosition = "0 80px";
  };

  const resetColourMode = () => {
    let lastModeButton = document.querySelector("." + isClicked);

    lastModeButton.style.background =
      "-webkit-linear-gradient(transparent 50%, " +
      colourButtonModeClicked +
      " 50%";
    lastModeButton.style.backgroundSize = "230px 200px";
    lastModeButton.style.backgroundPosition = "0 0";
    lastModeButton.style.color = "black";
  };

  return {
    rowsColumns,
    numberOfWords,
    timer,
    isClicked,
    render: (
      <>
        <div className="modos">
          <div className="titulo-modos">
            <span className="letra-m">M</span>ODOS{" "}
            <span className="letra-d">D</span>E{" "}
            <span className="letra-j">J</span>
            OGO
          </div>
          <div className="modos-jogo">
            <ul className="escolher-modos">
              <li className="simples">
                <a
                  id="modo"
                  className="simp"
                  onMouseEnter={(e) => handleMouseEnter(e)}
                  onClick={(e) => handleMouseClick(e)}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className="difi">Simples</span>
                </a>
              </li>
              <li className="intermedio">
                <a
                  id="modo"
                  className="inter"
                  onMouseEnter={(e) => handleMouseEnter(e)}
                  onClick={(e) => handleMouseClick(e)}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className="difi">Intermédio</span>
                </a>
              </li>
              <li className="avançado">
                <a
                  id="modo"
                  className="avan"
                  onMouseEnter={(e) => handleMouseEnter(e)}
                  onClick={(e) => handleMouseClick(e)}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className="difi">Avançado</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="costumizar">Costumizar</div>
        </div>
        <div className="pre-visualizacao">
          <div className={`selecione ${isHovering ? "hidden" : ""}`}>
            <span style={{ "--i": 1 }}>S</span>
            <span style={{ "--i": 2 }}>e</span>
            <span style={{ "--i": 3 }}>l</span>
            <span style={{ "--i": 4 }}>e</span>
            <span style={{ "--i": 5 }}>c</span>
            <span style={{ "--i": 6 }}>i</span>
            <span style={{ "--i": 7 }}>o</span>
            <span style={{ "--i": 8 }}>n</span>
            <span style={{ "--i": 9 }}>e</span>{" "}
            <span style={{ "--i": 10 }}>o</span>{" "}
            <span style={{ "--i": 11 }}>m</span>
            <span style={{ "--i": 12 }}>o</span>
            <span style={{ "--i": 13 }}>d</span>
            <span style={{ "--i": 14 }}>o</span>{" "}
            <span style={{ "--i": 15 }}>d</span>
            <span style={{ "--i": 16 }}>e</span>{" "}
            <span style={{ "--i": 17 }}>j</span>
            <span style={{ "--i": 18 }}>o</span>
            <span style={{ "--i": 19 }}>g</span>
            <span style={{ "--i": 20 }}>o</span>{" "}
            <span style={{ "--i": 21 }}>.</span>
            <span style={{ "--i": 22 }}>.</span>
            <span style={{ "--i": 23 }}>.</span>
          </div>
          <div className={`pre-view ${isHovering ? "" : "hidden"}`}>
            <div className="info-game">
              <span id="tempo">
                Tempo <span className="n-time"> {formatTimer}</span>
              </span>
              <span id="palavras">
                Palavras <span className="n-palavras"> {numberOfWords}</span>
              </span>
            </div>
            <img
              src={avan}
              alt=""
              width="425vw"
              height="325vh"
              className="imgModos"
            />
            <div className="start">
              <Link to="/Sopa-Letras" className="start-button">
                ENTRAR
              </Link>
            </div>
          </div>
        </div>
      </>
    ),
  };
}

export default useModos;
