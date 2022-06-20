import React from "react";
import { Link } from "react-router-dom";

export default function JogarNovamente({ vencedor }) {
  return (
    <>
      <Link to="/modos" className="jogar-novamente">
        Jogar Novamente
      </Link>
      <span className="vencedor">{vencedor}</span>
    </>
  );
}
