import React, { useState } from "react";
import Logo from "../componets/Logo";
import { useHistory } from "react-router-dom";
import axios from '../axios'

export default function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try{
    const response = await axios.post('/auth/logIn', {email,password})
    localStorage.setItem("token", response.data.token)
    history.push("/Landing");

    }catch(e){
      //hacelo pasmada

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
            className ="inputForm"
            type ="email"
            placeholder ="Ingrese su correo"
            name ="email"
            required
            value = {email}
            onChange = {(e)=>{
              setEmail(e.target.value)
            }}
          />
          <label className="labelForm" htmlFor="psw">
            Contraseña
          </label>
          <input
            className ="inputForm"
            type ="password"
            placeholder ="Ingrese su contraseña"
            name ="psw"
            required
            value = {password}
            onChange = {(e)=>{
              setPassword(e.target.value)
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
