import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components";

const Dashboard = () => {
  return (
    <div>
      <p>Você entrou no sistema!</p>
      <a href="https://google.com.br">Ir para o google</a>
      <br />
      <Link to="/dashboard/profile">Ir para o Perfil!</Link>
    </div>
  );
};

export default Dashboard;
export { Dashboard };
