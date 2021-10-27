import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button, Input } from "../../components";

// Estilos
import Wrapper from "./Login.styles";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (e) => {
    e.preventDefault();

    const data = {
      name,
      password,
    };

    console.log(data);
  };

  return (
    <Wrapper>
      <div className="login__form">
        <form method="POST" onSubmit={(e) => handleOnChange(e)}>
          <h1>Acesse o sistema</h1>
          {name.length < 10 ? "Nome muito curto" : "Validado"}
          <Input type="text" value={name} changeValue={setName} />
          <Input type="password" value={password} changeValue={setPassword} />

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
