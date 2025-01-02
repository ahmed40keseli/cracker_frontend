import React from "react";
import "../input/inputCheckbox.css";

function InputCheckbox({ type, value, onChange, placeholder }) {
  return (
    <div className="checkbox-container">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="normalCheckbox"
      />
    </div>
  );
}

export default InputCheckbox;
