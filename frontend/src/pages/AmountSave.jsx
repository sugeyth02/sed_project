import React from "react";
import Nav from "../componets/Nav";
import { useHistory } from "react-router-dom";

export default function AmountSave() {
  const history = useHistory();

  const handleRouteLanding = () => {
    history.push("/Landing");
  };
  return (
    <div>
      <Nav name="Monto a Ahorrar" />
      <div className="container">
        <h1 className="subtitle">El monto ahorrar este dia es :</h1>
        <h1 className="parrafo">$ X . xx</h1>
        <div className="btnOk" onClick={handleRouteLanding}>
          Ok
        </div>
      </div>
    </div>
  );
}
