import React, { useState, useEffect } from "react";
import Logo from "../componets/Logo";
import { useHistory } from "react-router-dom";
import services from "../services/services";
import { useUserContext } from "../contexts/UserContext";
import { toast } from "react-toastify";

export default function SingUp() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { logout } = useUserContext();

  useEffect(() => {
    logout();
  }, []);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("the passwords does not match");
      return;
    }
    try {
      await services.singUp(name, email, password);
      toast.success("user created");
      history.push("/Login");
    } catch (e) {
      toast.error(
        e?.response?.data?.status ||
          "We could not create the user try again later..."
      );
    }
  };
  return (
    <div className="container singUpContainer">
      <Logo />
      <form onSubmit={handleOnSubmit} className="form singUpForm">
        <div className="formcontainer">
          <label className="labelForm" htmlFor="email">
            Correo
          </label>
          <input
            className="inputForm"
            type="email"
            placeholder="Ingrese su correo"
            name="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label className="labelForm" htmlFor="name">
            Nombre
          </label>
          <input
            className="inputForm"
            type="text"
            placeholder="Ingrese su Nombre"
            name="name"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label className="labelForm" htmlFor="psw">
            Contraseña
          </label>
          <input
            className="inputForm"
            type="password"
            placeholder="Ingrese su contraseña"
            name="psw"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label className="labelForm" htmlFor="cpsw">
            Contraseña
          </label>
          <input
            className="inputForm"
            type="password"
            placeholder="Ingrese su contraseña nuevamente"
            name="cpsw"
            required
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
        <button className="singUpbtn" type="submit">
          SING UP
        </button>
      </form>
    </div>
  );
}
