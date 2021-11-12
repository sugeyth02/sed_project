import React from "react";
import Nav from "../componets/Nav";
import { useHistory } from "react-router-dom";

export default function RegisterDay() {
  const history = useHistory();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    history.push("/AmountSave");
  };
  return (
    <div>
      <Nav name="Registrar Dia" />
      <div className="container">
        <h1 className="subtitle">
          ¿Cuanto fue tu gasto total este dia?
        </h1>
        <form onSubmit={handleOnSubmit} className="form">
          <input
            className="inputForm"
            type="number"
            min="0.00"
            max="10000.00"
            step="0.01"
            required
          />
          <button className="registerDaybtn" type="submit">
            REGISTRAR
          </button>
        </form>
      </div>
    </div>
  );
}
