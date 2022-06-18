import React, { useState, useEffect } from "react";

export default function ModoJogo({ mode }) {
  const [gameMode, setGameMode] = useState(null);

  useEffect(() => {
    convertToMode();
  });

  const convertToMode = () => {
    switch (mode) {
      case "simp": // modo simples
        setGameMode("Simples");
        break;
      case "inter":
        setGameMode("Intermédio");
        break;
      case "avan":
        setGameMode("Avançado");
        break;
    }
  };

  return (
    <div className="game-mode">
      <span className="span-text-mode">{gameMode}</span>
    </div>
  );
}
