import React from "react";
import "./inputNormal.css";

const InputField = ({ type, value, onChange, placeholder }) => {
  return (
    <div className="ınputNormalButtonForm">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="normalInput"
      />
    </div>
  );
};

export default InputField;
