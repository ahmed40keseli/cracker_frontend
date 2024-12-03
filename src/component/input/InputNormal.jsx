import React from "react";

const InputField = ({ type, value, onChange, placeholder }) => {
  return (
    <div>
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
