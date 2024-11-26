import React from "react";
import "./button.css";

function ButtonNormal({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

export default ButtonNormal;
