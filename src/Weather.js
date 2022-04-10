import React from "react";
import Date from "./Date";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="overview">
        <h1 id="city">{props.data.city}</h1>
        <ul>
          <li>
            <Date date={props.data.date} />
          </li>
          <li id="description">{props.data.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="float-left"
              id="icon"
            />
            <strong id="temperature">{props.data.temperature}</strong>
            <span className="units">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <span id="humidity">{props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span id="windspeed">{props.data.wind}</span> m/H
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
