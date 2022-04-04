import React, { useState } from "react";
import Search from "./Search";
import Overview from "./Overview";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";
import "./styles.css";

export default function App() {
  let [overviewData, setOverviewData] = useState();
  let [weatherData, setWeatherData] = useState();

  function displayOverview(data) {
    setOverviewData(data);
  }

  function displayWeather(data) {
    setWeatherData(data);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Search
              displayOverview={displayOverview}
              displayWeather={displayWeather}
            />
            <Overview data={overviewData} />
            <Weather data={weatherData} />
            <Forecast />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
