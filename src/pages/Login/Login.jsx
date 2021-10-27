import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../../components";

// Estilos
import Wrapper from "./Login.styles";

const Login = () => {
  return (
    <Wrapper>
      <div className="login__form">
        <form>
          <h1>Acesse o sistema</h1>
          <input type="text" />
          <input type="password" />

          <Button type="submit">CONFIRMAR</Button>

          <div className="login__form__links">
            <Link to="#">Esqueceu a senha?</Link>
            <Link to="#">Solicitar acesso</Link>
          </div>
        </form>
      </div>
      <div className="login__fundo">
        <div className="login__fundo__img" />
      </div>
    </Wrapper>
  );
};

export default Login;
export { Login };
