import React from "react";
import Nav from "../componets/Nav";
import { useHistory } from "react-router-dom";
import { formatCurrency } from "../utilities/currency";

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
        <h1 className="parrafo">
          {formatCurrency(history.location.state?.savedAmout)}
        </h1>
        <div className="btnOk" onClick={handleRouteLanding}>
          Ok
        </div>
      </div>
    </div>
  );
}
