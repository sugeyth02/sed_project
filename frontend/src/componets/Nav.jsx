import React from "react";
import Icon from "./Icon";
import LogoutIcon from "./LogoutIcon";
import { useHistory } from "react-router-dom";

export default function Nav(props) {
  const history = useHistory();

  const handleRoutelogOut = () => {
    localStorage.clear()
    history.push("/Login");
  };
  return (
    <div className="navContainer">
      <div className="navTittle">
        <Icon width="3.5vw" />
        <h1>{props.name}</h1>
      </div>
      <div className="logoutIcon" onClick={handleRoutelogOut}>
      <LogoutIcon width="2.3vw" />
      </div>
    </div>
  );
}
