import React from "react";
import Nav from "../componets/Nav";
import { useHistory } from "react-router-dom";

export default function Landing(props) {
  const history = useHistory();

  const handleRouteRegistarDia = () => {
    history.push("/RegisterDay");
  };
  const handleRouteCrearMeta = () => {
    history.push("/CreateGoal");
  };
  const handleRouteVerProgreso = () => {
    history.push("/SeeProgress");
  };

  return (
    <div>
      <Nav name="Sistema de Ahorros" />
      <div className = "container landingContainer">
        <h1 className="userTittle">Bienvenido userx!</h1>
        <div className="menuButtons">
          <div className="btn" onClick={handleRouteRegistarDia}>
            Registrar dia
          </div>
          <div className="btn" onClick={handleRouteCrearMeta}>
            Crear meta
          </div>
          <div className="btn" onClick={handleRouteVerProgreso}>
            Ver progreso
          </div>
        </div>
      </div>
    </div>
  );
}
