import axios from "axios";
import React, { useState } from "react";

export default function Search({ displayWeather }) {
  let [query, setQuery] = useState();

  function handleWeather(response) {
    function formatDate(timestamp) {
      let date = new Date(timestamp);
      let hours = date.getHours();
      if (hours < 10) {
        hours = `0${hours}`;
      }
      let minutes = date.getMinutes();
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }

      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let day = days[date.getDay()];
      return `${day} ${hours}:${minutes}`;
    }

    let weather = {
      city: response.data.name,
      date: formatDate(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
    };

    console.log(response);

    displayWeather(weather);
  }

  function handleQuery(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=10d1d5b699dafcc3bae98dd9eeecb91a&units=metric`;
    axios.get(url).then(handleWeather);
  }

  function updateQuery(event) {
    setQuery(event.target.value);
  }

  return (
    <form className="search" onSubmit={handleQuery}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Type a city..."
            className="form-control"
            id="city-input"
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
  );
}
