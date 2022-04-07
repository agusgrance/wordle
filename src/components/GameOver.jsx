import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const { gameOver, currAttempt, correctWord } = useContext(AppContext);
  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord ? "Has acertado correctamente" : "Has fallado!"}
      </h3>
      <h1> Palabra Correcta: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>Has acertado en {currAttempt.attempt} intentos</h3>
      )}
    </div>
  );
}

export default GameOver;
