import React from "react";

export default function Weather(props) {
  return (
    <div className="row">
      <div className="col-6">
        <div className="clearfix weather-temperature">
          <img src={props.data?.icon} alt="" className="float-left" id="icon" />
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
  );
}
