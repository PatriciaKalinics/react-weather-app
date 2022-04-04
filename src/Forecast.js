import React from "react";
import ForecastDay from "./ForecastDay";

export default function Forecast() {
  return (
    <div className="weather-forecast" id="forecast">
      <div className="row">
        <ForecastDay date="fri" />
        <ForecastDay date="sat" />
        <ForecastDay date="sun" />
        <ForecastDay date="mon" />
        <ForecastDay date="tue" />
        <ForecastDay date="wed" />
      </div>
    </div>
  );
}
