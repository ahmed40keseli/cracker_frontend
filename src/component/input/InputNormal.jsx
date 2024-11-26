import React from "react";

const InputField = ({ type, value, onChange, placeholder }) => {
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <hr />
    </div>
  );
};

export default InputField;
