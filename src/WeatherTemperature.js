import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function changeUnit(event) {
    event.preventDefault();
    if (unit === "celsius") {
      setUnit("fahrenheit");
    } else {
      setUnit("celsius");
    }
  }

  if (unit === "celsius") {
    return (
      <span class="WeatherTemperature">
        <strong>{Math.round(props.celsius)}</strong>
        <span className="units">
          °C{" "}
          <a href="/" onClick={changeUnit}>
            ⇆ °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span class="WeatherTemperature">
        <strong>{Math.round((props.celsius * 9) / 5 + 32)}</strong>
        <span className="units">
          °F{" "}
          <a href="/" onClick={changeUnit}>
            ⇆ °C
          </a>
        </span>
      </span>
    );
  }
}
