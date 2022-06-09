import React from "react";

export default function Modos() {
  return (
    <>
      <div className="titulo-modos">
        <span className="letra-m">M</span>ODOS{" "}
        <span className="letra-d">D</span>E <span className="letra-j">J</span>
        OGO
      </div>
      <div className="modos-jogo">
        <ul className="escolher-modos">
          <li className="simples">
            <a href="#" id="modo" className="simp">
              <span className="difi">Simples</span>
            </a>
          </li>
          <li className="intermedio">
            <a href="#" id="modo" className="inter">
              <span className="difi">Intermédio</span>
            </a>
          </li>
          <li className="avançado">
            <a href="#" id="modo" className="avan">
              <span className="difi">Avançado</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="costumizar">Costumizar</div>
    </>
  );
}
