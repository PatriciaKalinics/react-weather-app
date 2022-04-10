import React from "react";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="overview">
        <h1 id="city">{props.data?.city}</h1>
        <ul>
          <li>
            Last updated: <span id="date">{props.data?.date}</span>
          </li>
          <li id="description">{props.data?.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={props.data?.icon}
              alt=""
              className="float-left"
              id="icon"
            />
            <strong id="temperature">{props.data?.temperature}</strong>
            <span className="units">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <span id="humidity">{props.data?.humidity}</span>%
            </li>
            <li>
              Wind: <span id="windspeed">{props.data?.wind}</span> m/H
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
