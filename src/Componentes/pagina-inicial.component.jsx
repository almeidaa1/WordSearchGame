import React from "react";
import video from "../imagens&videos/letters_-_5157(Original).mp4";
import { Link } from "react-router-dom";

export default function PaginaInicial() {
  const alertaAjuda = () => {
    alert("Encontre Todas As Palavras No Tabuleiro Antes Do Tempo Acabar !");
  };
  return (
    <>
      <div className="video">
        <video id="bgvideo" autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="max-width">
        <div className="titulo">
          <h1>SOPA DE LETRAS</h1>
        </div>
        <div className="menu">
          <ul className="options">
            <li className="start-game">
              <Link to="/modos" id="jogar">
                <span id="letra-n">N</span>ovo <span id="letra-j">J</span>ogo
              </Link>
            </li>
            <li className="help">
              <a href="" onClick={alertaAjuda}>
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
          <a href="https://github.com/Rodri-Nascimento" target="_blank">
            Rodrigo Nascimento
          </a>
          <span> | </span>
          <a href="https://github.com/Vampyyr" target="_blank">
            David Leonel
          </a>{" "}
        </div>
      </div>
    </>
  );
}
