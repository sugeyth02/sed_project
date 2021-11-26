import React, { useState, useEffect } from "react";
import Logo from "../componets/Logo";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import { toast } from "react-toastify";

export default function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, logout } = useUserContext();

  useEffect(() => {
    logout();
  }, []);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const role = await login(email, password);
      if (typeof role === "undefined") {
        throw new Error("wrong credentials");
      }
      console.log(role);
      if (role === "user") history.push("/Landing");
      else history.push("/Admin");
    } catch (e) {
      toast.error(e.message);
    }
  };
  return (
    <div className="container loginContainer">
      <Logo />
      <form onSubmit={handleOnSubmit} className="form">
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
        </div>
        <button className="loginbtn" type="submit">
          LOGIN
        </button>
      </form>
    </div>
  );
}
