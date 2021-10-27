import React from "react";

// Estilos
import InputStyles from "./Input.styles";

const Input = ({ type, value, changeValue }) => {
  return (
    <InputStyles
      type={type}
      value={value}
      onChange={(e) => changeValue(e.target.value)}
    />
  );
};

export default Input;
export { Input };
