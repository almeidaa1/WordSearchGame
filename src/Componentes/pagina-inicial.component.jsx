import React from "react";

export default function PaginaInicial() {
  return (
    <>
      <div className="video">
        <video id="bgvideo" autoplay loop muted playsinline>
          <source
            src="../imagens&videos/letters_-_5157(Original).mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="max-width">
        <div className="titulo">
          <h1>SOPA DE LETRAS</h1>
        </div>
        <div className="menu">
          <ul className="options">
            <li className="start-game">
              <a href="#" id="jogar">
                <span id="letra-n">N</span>ovo <span id="letra-j">J</span>ogo
              </a>
            </li>
            <li className="help">
              <a href="#">
                <span id="letra-a">A</span>juda
              </a>
            </li>
          </ul>
        </div>
        <div className="autores-box">
          <div className="autores-titulo">Desenvolvedores</div>
          <a href="https://github.com/almeidaa1" target="_blank">
            Rui Almeida
          </a>{" "}
          <span>| </span>
          <a href="https://github.com/CL0UDhxh" target="_blank">
            David Leonel
          </a>{" "}
          <span>| </span>
          <a href="https://github.com/Rodri-Nascimento" target="_blank">
            Rodrigo Nascimento
          </a>
        </div>
      </div>
    </>
  );
}
