import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function Letter({ letterPos, attempVal }) {
  const {
    board,
    correctWord,
    currAttempt,
    disabledLetters,
    setDisebledLetters,
  } = useContext(AppContext);
  const letter = board[attempVal][letterPos];

  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterState =
    currAttempt.attempt > attempVal &&
    (correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisebledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
}

export default Letter;
