import React, { useState } from "react";
import Nav from "../componets/Nav";
import services from "../services/services";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import { toast } from "react-toastify";

export default function CreateGoal() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const { token } = useUserContext();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      await services.createGoal(name, cost, token);
      toast.success("Goal created succesfully!");
      history.push("/Landing");
    } catch (e) {
      toast.error("we could not create the goal, check your information");
    }
  };
  return (
    <div>
      <Nav name="Crear Meta" />
      <div className="container createGoalContainer">
        <form onSubmit={handleOnSubmit} className="form">
          <div className="formcontainer">
            <label className="subtitle" htmlFor="name">
              Nueva Meta
            </label>
            <input
              className="inputForm"
              type="text"
              name="name"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label className="subtitle" htmlFor="costo">
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
              value={cost}
              onChange={(e) => {
                setCost(e.target.value);
              }}
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
