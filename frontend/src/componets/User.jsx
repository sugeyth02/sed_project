import React from "react";

export default function User(props) {
  return (
    <div className="userContainer">
      <h1>{props.name}</h1>
      <div className="subuserContainer">
        <p>
          Metas cumplidas: <b>{props.active}</b>
        </p>
        <p>
          Metas restantes: <b>{props.inactive}</b>
        </p>
        <p>
          Monto ahorrado: <b>{props.saved}</b>
        </p>
      </div>
    </div>
  );
}
