import axios from "axios";
import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [forecast, setForecast] = useState();
  let [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(false);
  }, [props.coords]);

  function handleForecast(response) {
    setForecast(response.data.daily);
    setReady(true);
  }

  function searchForecast() {
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coords.lat}&lon=${props.coords.lon}&appid=10d1d5b699dafcc3bae98dd9eeecb91a&units=metric`;
    axios.get(url).then(handleForecast);
  }

  if (ready) {
    return (
      <div className="weather-forecast" id="forecast">
        <div className="row">
          <ForecastDay data={forecast[0]} />
          <ForecastDay data={forecast[1]} />
          <ForecastDay data={forecast[2]} />
          <ForecastDay data={forecast[3]} />
          <ForecastDay data={forecast[4]} />
          <ForecastDay data={forecast[5]} />
        </div>
      </div>
    );
  } else {
    searchForecast();
    return null;
  }
}
