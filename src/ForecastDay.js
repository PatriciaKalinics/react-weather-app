import React from "react";

export default function ForecastDay(props) {
  return (
    <div className="forecast-day col-2">
      <div className="forecast-date">{props.date}</div>
      <img
        src="http://openweathermap.org/img/wn/04d@2x.png"
        alt=""
        width="40"
      />
      <div className="forecast-temperature">
        <span className="max-forecast-temp">12°</span>{" "}
        <span className="min-forecast-temp">2°</span>
      </div>
    </div>
  );
}
