import axios from "../services/axios";

const services = {};

services.login = async (email, password) => {
  try {
    const response = await axios.post("/auth/logIn", { email, password });
    console.log(response, "este");
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("name", response.data.name);
    localStorage.setItem("email", response.data.email);
    return response.data;
  } catch (e) {
    console.log(e, "ese es");
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

services.createGoal = async (name, cost, token) => {
  try {
    const data = {
      name,
      cost,
    };
    const response = await axios.post("/user/Goals", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (e) {
    throw e;
  }
};

services.createDailyLog = async (spent, saved, token) => {
  try {
    const data = {
      spent,
      saved,
    };
    const response = await axios.post("/user/DailyLog", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (e) {
    throw e;
  }
};

services.getGoals = async (token) => {
  try {
    const response = await axios.get("/user/getGoals", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.status;
  } catch (e) {
    throw e;
  }
};
services.getTotalSaved = async (token) => {
  try {
    const response = await axios.get("/admin/getSaved", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.status;
  } catch (e) {
    throw e;
  }
};
services.getGoalTotalState = async (token) => {
  try {
    const response = await axios.get("/admin/getGoalsState", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.status;
  } catch (e) {
    throw e;
  }
};
services.getAllUsers = async (token) => {
  try {
    const response = await axios.get("/admin/getUsers", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.status;
  } catch (e) {
    throw e;
  }
};

export default services;
