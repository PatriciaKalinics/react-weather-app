import React, { useState } from "react";
import Search from "./Search";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";
import "./styles.css";

export default function App() {
  let [weatherData, setWeatherData] = useState();

  function displayWeather(data) {
    setWeatherData(data);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Search displayWeather={displayWeather} />
            <Weather data={weatherData} />
            <Forecast />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
