import React from "react";

// Estilos
import ButtonStyles from "./Button.styles";

const Button = ({ type = "button", children }) => {
  return <ButtonStyles type={type}>{children}</ButtonStyles>;
};

export default Button;
export { Button };
