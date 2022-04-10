import React from "react";
import Search from "./Search";
import Footer from "./Footer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Search defaultQuery="Glasgow" />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
