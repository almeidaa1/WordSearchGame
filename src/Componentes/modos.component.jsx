import React from "react";

export default function Modos() {
  return (
    <>
      <div class="titulo-modos">
        <span class="letra-m">M</span>ODOS <span class="letra-d">D</span>E{" "}
        <span class="letra-j">J</span>OGO
      </div>
      <div class="modos-jogo">
        <ul class="escolher-modos">
          <li class="simples">
            <a href="#" id="modo" class="simp">
              <span class="difi">Simples</span>
            </a>
          </li>
          <li class="intermedio">
            <a href="#" id="modo" class="inter">
              <span class="difi">Intermédio</span>
            </a>
          </li>
          <li class="avançado">
            <a href="#" id="modo" class="avan">
              <span class="difi">Avançado</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="costumizar">Costumizar</div>
    </>
  );
}
