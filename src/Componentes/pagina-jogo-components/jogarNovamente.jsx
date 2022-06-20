import React from "react";
import { Link } from "react-router-dom";

export default function JogarNovamente({ mode }) {
  const [newMode, setNewMode] = useState(null);

  return (
    <>
      <Link to="/modos" className="jogar-novamente">
        Jogar Novamente
      </Link>
      <span className="vencedor">Ganhas te</span>
    </>
  );
}
