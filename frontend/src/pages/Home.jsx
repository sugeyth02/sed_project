import React from "react";
import Logo from "../componets/Logo";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();

  const handleRouteLogin = () => {
    history.push("/Login");
  };

  const handleRouteSingUp = () => {
    history.push("/SingUp");
  };
  return (
    <div className="container">
      <Logo />
      <div id="buttonLogIn" onClick={handleRouteLogin}>
        LOGIN
      </div>
      <div id="buttonSingUp" onClick={handleRouteSingUp}>
        SING UP
      </div>
    </div>
  );
}
