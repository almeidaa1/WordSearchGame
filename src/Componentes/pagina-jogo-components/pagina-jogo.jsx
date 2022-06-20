import { React, useState } from "react";
import { Link } from "react-router-dom";
import TimerAndPoints from "./timerAndPoints";
import GameWords from "./gameWords";
import Canvas from "./Canvas";
import ModoJogo from "./modoJogo";
import JogarNovamente from "./jogarNovamente";
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
          <Link to="/modos" className="voltar">
            {" "}
            afasdfafl
          </Link>
          <Canvas
            rowsColumns={rowsColumns}
            newList={newList}
            startGame={StartGame}
            setNewList={setNewList}
            setCurrentWordsCompleted={setCurrentWordsCompleted}
            mode={mode}
          />
          <GameWords newList={newList} numberOfWords={numberOfWords} />
          {gameEnded ? <JogarNovamente mode={mode} /> : null}
        </div>
      </div>
    </>
  );
}
