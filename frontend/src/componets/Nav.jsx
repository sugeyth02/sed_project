import React from "react";
import Icon from "./Icon";
import LogoutIcon from "./LogoutIcon";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

export default function Nav(props) {
  const history = useHistory();
  const { logout } = useUserContext();

  const handleRoutelogOut = () => {
    logout();
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
