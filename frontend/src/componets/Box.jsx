import React from "react";

export default function Box(props) {
  return (
    <div className="box">
      <h1>{props.name}</h1>
      <p>{props.value}</p>
    </div>
  );
}
