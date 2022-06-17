import { React, useState, useEffect, useRef } from "react";
import Timer from "./timer";
import GameWords from "./gameWords";
import Canvas from "./Canvas";
import "../../estilos/styles.css";

export default function SopaLetras({ rowsColumns, numberOfWords, timer }) {
  const [listOfWords, setListOfWords] = useState([
    "react",
    "javascript",
    "angular",
    "html",
    "css",
    "vue",
    "bootstrap",
    "estudante",
    "programar",
    "script",
    "linguagens",
    "assembly",
  ]);

  const [StartGame, setStartGame] = useState(false);

  return (
    <>
      <div className="max-width">
        <div className="pagina-jogo-principal">
          <Timer timer={timer} setStartGame={setStartGame} />
          <Canvas
            className="game-section"
            rowsColumns={rowsColumns}
            numberOfWords={numberOfWords}
            listOfWords={listOfWords}
            startGame={StartGame}
          />
          <GameWords listOfWords={listOfWords} numberOfWords={numberOfWords} />
        </div>
      </div>
    </>
  );
}
