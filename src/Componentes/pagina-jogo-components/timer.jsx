import { useState, useEffect } from "react";

function Cronometro({ timer, setStartGame, mode }) {
  const TEMPO_TOTAL = timer;

  let [tempoRestante, setTempoRestante] = useState(TEMPO_TOTAL);
  const [clickedStart, setClikedStart] = useState(false);
  const [time, setTime] = useState("Start Game");

  const startTimer = () => {
    setClikedStart(true);
    setStartGame(true);
    setTimeout(() => {
      if (tempoRestante > 0) {
        setTempoRestante((tempoRestante -= 1));
      }
    }, 1000);
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
    return tempoRestante / TEMPO_TOTAL;
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

export default Cronometro;
