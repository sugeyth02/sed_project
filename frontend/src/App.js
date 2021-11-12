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
import "./index.css";
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Switch>
            <Route  path="/Login"> <Login/>  </Route>
            <Route  path="/SingUp"> <SingUp/> </Route>
            <Route  path="/Admin"> <Admin/> </Route>
            <Route  path="/Landing"> <Landing/>  </Route>
            <Route  path="/CreateGoal"> <CreateGoal/>  </Route>
            <Route  path="/RegisterDay"> <RegisterDay/> </Route>
            <Route  path="/AmountSave"> <AmountSave/> </Route>
            <Route  path="/SeeProgress"> <SeeProgress/>  </Route>
            <Route  exact path="/"> <Home/> </Route>
        </Switch>
    </Router>
  );
}

export default App;
