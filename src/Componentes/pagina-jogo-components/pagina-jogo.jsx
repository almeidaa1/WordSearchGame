import { React, useState } from "react";
import TimerAndPoints from "./timerAndPoints";
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
  setNewList,
}) {
  const [StartGame, setStartGame] = useState(false);
  const [currentWordsCompleted, setCurrentWordsCompleted] = useState([]);
  const [currentTime, setCurrentTime] = useState(timer);
  const [gameEnded, setGameEnded] = useState(false);
  const mode = isClicked;
  if (
    (currentTime == 0 || currentWordsCompleted.length == numberOfWords) &&
    !gameEnded
  ) {
    setGameEnded(true);
    console.log("acabou");
  }

  return (
    <>
      <div className="max-width">
        <div className="pagina-jogo-principal">
          <ModoJogo mode={mode} />
          <TimerAndPoints
            timer={timer}
            setStartGame={setStartGame}
            newList={newList}
            mode={mode}
            currentWordsCompleted={currentWordsCompleted}
            setCurrentTime={setCurrentTime}
            gameEnded={gameEnded}
          />
          <Canvas
            rowsColumns={rowsColumns}
            newList={newList}
            startGame={StartGame}
            setNewList={setNewList}
            setCurrentWordsCompleted={setCurrentWordsCompleted}
          />
          <GameWords newList={newList} numberOfWords={numberOfWords} />
        </div>
      </div>
    </>
  );
}
