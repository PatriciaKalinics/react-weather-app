import React from "react";

export default function ForecastDay(props) {
  let icon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  function showDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let daysList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return daysList[day];
  }

  return (
    <div className="forecast-day col-2">
      <div className="forecast-date">{showDay()}</div>
      <img src={icon} alt="" width="40" />
      <div className="forecast-temperature">
        <span className="max-forecast-temp">
          {Math.round(props.data.temp.max)}°
        </span>{" "}
        <span className="min-forecast-temp">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
