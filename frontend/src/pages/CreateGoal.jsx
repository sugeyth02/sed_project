import React from "react";
import Nav from "../componets/Nav";
import { useHistory } from "react-router-dom";

export default function CreateGoal() {
    const history = useHistory();

    const handleOnSubmit = (e) => {
      e.preventDefault();
      history.push("/Landing");
    };
  return (
    <div>
      <Nav name="Crear Meta" />
      <div className="container createGoalContainer">
        <form onSubmit={handleOnSubmit} className="form">
        <div className="formcontainer">
          <label className="subtitle" for="name">
            Nueva Meta
          </label>
          <input className="inputForm" type="text" name="name" required />
          <label className="subtitle" for="costo">
            Costo
          </label>
          <input
            className="inputForm"
            type="number"
            min="0.00"
            max="10000.00"
            step="0.01"
            name="costo"
            required
          />
          </div>
          <button className="registerGoalbtn" type="submit">
            REGISTRAR
          </button>
        </form>
      </div>
    </div>
  );
}
