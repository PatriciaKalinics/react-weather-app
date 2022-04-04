import React from "react";

export default function Overview(props) {
  return (
    <div className="overview">
      <h1 id="city">{props.data?.city}</h1>
      <ul>
        <li>
          Last updated: <span id="date">{props.data?.date}</span>
        </li>
        <li id="description">{props.data?.description}</li>
      </ul>
    </div>
  );
}
