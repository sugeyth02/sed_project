import React from "react";
import Home from "./pages/Home";
import AmountSave from "./pages/AmountSave";
import CreateGoal from "./pages/CreateGoal";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import RegisterDay from "./pages/RegisterDay";
import SeeProgress from "./pages/SeeProgress";
import SingUp from "./pages/SingUp";
import Admin from "./pages/Admin";
import PrivateRoute from "./componets/PrivateRoute";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/SingUp">
          <SingUp />
        </Route>
        <PrivateRoute role="admin" path="/Admin">
          <Admin />
        </PrivateRoute>
        <PrivateRoute role="user" path="/Landing">
          <Landing />
        </PrivateRoute>
        <PrivateRoute role="user" path="/CreateGoal">
          <CreateGoal />
        </PrivateRoute>
        <PrivateRoute role="user" path="/RegisterDay">
          <RegisterDay />
        </PrivateRoute>
        <PrivateRoute role="user" e path="/AmountSave">
          <AmountSave />
        </PrivateRoute>
        <PrivateRoute role="user" path="/SeeProgress">
          <SeeProgress />
        </PrivateRoute>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
