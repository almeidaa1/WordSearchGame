import { React, useState, useEffect, useRef } from "react";
import Timer from "./timer";
import GameWords from "./gameWords";
import Canvas from "./Canvas";
import ModoJogo from "./modoJogo";
import "../../estilos/styles.css";

export default function SopaLetras({
  rowsColumns,
  numberOfWords,
  timer,
  isClicked,
  newList,
}) {
  const [StartGame, setStartGame] = useState(false);
  const [mode, setMode] = useState(isClicked);
  return (
    <>
      <div className="max-width">
        <div className="pagina-jogo-principal">
          <ModoJogo mode={mode} />
          <Timer timer={timer} setStartGame={setStartGame} />
          <Canvas
            rowsColumns={rowsColumns}
            newList={newList}
            startGame={StartGame}
          />
          <GameWords newList={newList} numberOfWords={numberOfWords} />
        </div>
      </div>
    </>
  );
}
