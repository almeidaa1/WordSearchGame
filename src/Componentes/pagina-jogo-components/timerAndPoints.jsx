import { useState, useEffect } from "react";

function PointsSystemAndTimer({
  timer,
  setStartGame,
  newList,
  mode,
  currentWordsCompleted,
  setCurrentTime,
  gameEnded,
}) {
  const [totalPoints, setTotalPoints] = useState(0);
  const [x, setX] = useState(0);

  let [tempoRestante, setTempoRestante] = useState(timer);
  const [clickedStart, setClikedStart] = useState(false);
  const [time, setTime] = useState("Start Game");

  useEffect(() => {
    if (x >= 1) {
      updatePoints();
    }
    setX((prevX) => prevX + 1);
  }, [newList]);

  useEffect(() => {
    setCurrentTime(tempoRestante);
  }, [tempoRestante]);

  if (gameEnded == 1) {

  }
  /*chamar esta função sempre que se verifica a igualdade*/
  const updatePoints = () => {
    let difficulty = 0;
    let divisor = 0;
    switch (mode) {
      case "simp":
        difficulty = 1;
        divisor = 250;
        break;
      case "inter":
        difficulty = 5;
        divisor = 150;
        break;
      case "avan":
        difficulty = 10;
        divisor = 50;
        break;
      default:
        difficulty = 0;
        divisor = 0;
        break;
    }
    let points = totalPoints;
    points +=
      Math.round(
        (tempoRestante / divisor) *
          currentWordsCompleted[currentWordsCompleted.length - 1].length
      ) + difficulty;

    setTotalPoints(points);
  };

  const startTimer = () => {
    if (!gameEnded) {
      setClikedStart(true);
      setStartGame(true);
      setTimeout(() => {
        if (tempoRestante > 0) {
          setTempoRestante((tempoRestante -= 1));
        }
      }, 1000);
    } else {
      setStartGame(false);
      setClikedStart(false);
    }
  };

  const formataTempo = (time) => {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  };

  const calculaFracao = () => {
    return tempoRestante / timer;
  };

  const changeHtml = () => {
    let time = formataTempo(tempoRestante);
    setTime(time);
  };

  useEffect(() => {
    if (clickedStart) {
      changeHtml();
      startTimer();
    }
  });

  return (
    <>
      <div className="points">
        <span className="points-span">
          Pontuação <span className="n-points">{totalPoints}</span>
        </span>
      </div>
      <div className="base-timer">
        <svg
          className="base-timer__svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="base-timer__circle">
            <circle
              className="base-timer__path-elapsed"
              cx="50"
              cy="50"
              r="45"
            ></circle>
            <path
              id="base-timer-path-remaining"
              strokeDasharray={(calculaFracao() * 283).toFixed(0) + " 283"}
              className="base-timer__path-remaining"
              d="
                M 50, 50
                m -45, 0
                a 45,45 0 1,0 90,0
                a 45,45 0 1,0 -90,0
                "
            ></path>
          </g>
        </svg>
        <span
          id="base-timer-label"
          className="base-timer__label"
          onClick={() => {
            if (!clickedStart) {
              changeHtml();
              startTimer();
            }
          }}
        >
          {time}
        </span>
      </div>
    </>
  );
}

export default PointsSystemAndTimer;
