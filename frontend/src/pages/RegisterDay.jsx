import React, { useState } from "react";
import Nav from "../componets/Nav";
import services from "../services/services";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import { toast } from "react-toastify";

export default function RegisterDay() {
  const history = useHistory();

  const [spent, setSpent] = useState("");
  const [saved, setSaved] = useState("");
  const { token } = useUserContext();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      await services.createDailyLog(spent, saved, token);
      history.push("/AmountSave", { savedAmout: saved });
      toast.success("Successful registration");
    } catch (e) {
      if (e?.response?.status === 422) {
        toast.error("You need to create a goal first");
      } else {
        toast.error("We could not register the day, check your information!");
      }
    }
  };

  return (
    <div>
      <Nav name="Registrar Dia" />
      <div className="container">
        <h1 className="subtitle">¿Cuanto fue tu gasto total este dia?</h1>
        <form onSubmit={handleOnSubmit} className="form">
          <input
            className="inputForm"
            type="number"
            min="0.00"
            max="10000.00"
            step="0.01"
            required
            value={spent}
            onChange={(e) => {
              setSpent(e.target.value);
              setSaved(e.target.value * 0.25);
            }}
          />
          <button className="registerDaybtn" type="submit">
            REGISTRAR
          </button>
        </form>
      </div>
    </div>
  );
}
