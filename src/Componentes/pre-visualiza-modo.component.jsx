import React from "react";

export default function PreVisualizarModos() {
  return (
    <div className="pre-visualizacao">
      <div id="selecione">
        <span style={{ "--i": 1 }}>S</span>
        <span style={{ "--i": 2 }}>e</span>
        <span style={{ "--i": 3 }}>l</span>
        <span style={{ "--i": 4 }}>e</span>
        <span style={{ "--i": 5 }}>c</span>
        <span style={{ "--i": 6 }}>i</span>
        <span style={{ "--i": 7 }}>o</span>
        <span style={{ "--i": 8 }}>n</span>
        <span style={{ "--i": 9 }}>e </span>
        <span style={{ "--i": 10 }}>o </span>
        <span style={{ "--i": 11 }}>m</span>
        <span style={{ "--i": 12 }}>o</span>
        <span style={{ "--i": 13 }}>d</span>
        <span style={{ "--i": 14 }}>o </span>
        <span style={{ "--i": 15 }}>d</span>
        <span style={{ "--i": 16 }}>e </span>
        <span style={{ "--i": 17 }}>j</span>
        <span style={{ "--i": 18 }}>o</span>
        <span style={{ "--i": 19 }}>g</span>
        <span style={{ "--i": 20 }}>o </span>
        <span style={{ "--i": 21 }}>.</span>
        <span style={{ "--i": 22 }}>.</span>
        <span style={{ "--i": 23 }}>.</span>
      </div>
      <div className="pre-view">
        <div className="palavras">
          Palavras : <span className="n-palavras">10</span>
        </div>
        <img src="../imagens&videos/pre.jpg" width="400px" height="335px" />
        <div className="start">
          <a href="#" className="start-button">
            Começar Jogo
          </a>
        </div>
      </div>
    </div>
  );
}
