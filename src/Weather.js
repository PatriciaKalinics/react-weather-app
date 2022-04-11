import React from "react";
import Date from "./Date";
import WeatherTemperature from "./WeatherTemperature";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="overview">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <Date date={props.data.date} />
          </li>
          <li>{props.data.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="float-left"
            />
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} m/H</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
