import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyVal, bigKey, disabled }) {
  const { onSelectLetter, onEnter, onBorrar } = useContext(AppContext);

  const selectLetter = () => {
    if (keyVal === "Enter") {
      onEnter();
    } else if (keyVal === "Borrar") {
      onBorrar();
    } else {
      onSelectLetter(keyVal);
    }
  };
  return (
    <div
      className="key"
      id={bigKey ? "big" : disabled && "disabled"}
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
}

export default Key;
