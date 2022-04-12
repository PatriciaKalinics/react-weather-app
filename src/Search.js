import axios from "axios";
import React, { useState } from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";

export default function Search(props) {
  let [query, setQuery] = useState(props.defaultQuery);
  let [weather, setWeather] = useState({ ready: false });

  function handleWeather(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      coords: response.data.coord,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
    });

    console.log(response);
  }

  function handleQuery(event) {
    event.preventDefault();
    search();
  }

  function updateQuery(event) {
    setQuery(event.target.value);
  }

  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=10d1d5b699dafcc3bae98dd9eeecb91a&units=metric`;
    axios.get(url).then(handleWeather);
  }

  if (weather.ready) {
    return (
      <div className="Search">
        <form onSubmit={handleQuery}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
                autoComplete="off"
                onChange={updateQuery}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search 🔍"
                className="btn btn-danger w-100"
              />
            </div>
          </div>
        </form>
        <Weather data={weather} />
        <Forecast coords={weather.coords} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
