import { useState } from "react";
import "../styles/Weather.css";
import SearchBar from "./SearchBar";
import clearIcon from "../assets/clouds.svg";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({
    city: "Singapore",
    temp: 30,
    state: "Clouds",
    humidity: 74,
    windSpeed: 4.12,
  });

  return (
    <div className="card">
      <SearchBar />
      <div className="weather-info">
        <div className="locationDate">
          <div className="left">
            <span class="material-symbols-outlined">location_on</span>
            <h3 className="city">{weatherData.city}</h3>
          </div>
          <div className="right">Wed, 07 Aug</div>
        </div>

        <div className="condition">
          <img src={clearIcon} alt="x" />
          <div className="right">
            <h4 className="temp">{weatherData.temp} °C</h4>
            <div className="state">{weatherData.state}</div>
          </div>
        </div>

        <div className="moreInfo">
          <div className="humidity">
            <span class="material-symbols-outlined">water_drop</span>
            <div className="info">
              <div>Humidity</div>
              <h4 className="value">{weatherData.humidity}%</h4>
            </div>
          </div>
          <div className="wind">
            <span class="material-symbols-outlined">air</span>
            <div className="info">
              <div>Wind Speed</div>
              <h4 className="value">{weatherData.windSpeed} M/S</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
