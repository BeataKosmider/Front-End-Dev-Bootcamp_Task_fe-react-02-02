import React from "react";

function Button({ onBtnClick, label }) {
  return <button onClick={onBtnClick}>{label}</button>;
}

export default Button;
