import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./../src/contexts/UserContext";

import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
      <ToastContainer />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
