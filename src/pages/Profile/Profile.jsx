import React from "react";
import { useHistory } from "react-router";

const Profile = () => {
  const { goBack } = useHistory();

  const type = "button";

  return (
    <div>
      <p>Página de Perfil do usuário!</p>
      <button onClick={() => goBack()} type={type}>
        Voltar
      </button>
    </div>
  );
};

export default Profile;
export { Profile };
