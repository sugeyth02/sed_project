import axios from "../services/axios";

const services = {};

services.login = async (email, password) => {
  try {
    const response = await axios.post("/auth/logIn", { email, password });
    console.log(response);
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("name", response.data.name);
    localStorage.setItem("email", response.data.email);
    return response.data;
  } catch (e) {
    throw e;
  }
};

services.singUp = async (name, email, password) => {
  try {
    await axios.post("/auth/singUp", {
      name,
      email,
      password,
    });
  } catch (e) {
    throw e;
  }
};

services.verifyToken = async (token) => {
  try {
    const response = await axios.get("/user/validateToken", {
      headers: { Authorization: `Bearer ${token}` },
    });
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("name", response.data.name);
    localStorage.setItem("email", response.data.email);
    return response.data;
  } catch (e) {
    throw e;
  }
};

export default services;
