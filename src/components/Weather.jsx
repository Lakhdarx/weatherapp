import { useEffect, useState } from "react";
import "../styles/Weather.css";
import SearchBar from "./SearchBar";
import { icons, iconMap } from "../icons";
// import clearIcon from "../assets/clear.svg";

export default function Weather() {
  const [weatherData, setWeatherData] = useState(null);

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });

  useEffect(() => {
    async function getDefaultCity() {
      try {
        const res = await fetch(
          "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Algiers?key=BWZJAKN5J73RM7Q2CQLWBAKV3&include=current&elements=temp,humidity,windspeed,conditions,icon,feelslike&unitGroup=metric",
        );
        const text = await res.text();
        let data;

        try {
          data = JSON.parse(text);
        } catch {
          data = text;
        }

        if (!res.ok) {
          throw new Error(data || "Something went wrong.");
        }

        setWeatherData({
          city: data.resolvedAddress,
          temp: data.currentConditions.temp,
          humidity: data.currentConditions.humidity,
          windSpeed: data.currentConditions.windspeed,
          state: data.currentConditions.conditions,
          icon: iconMap[data.currentConditions.icon],
        });
      } catch (err) {
        alert(err);
      }
    }
    getDefaultCity();
  }, []);

  return weatherData ? (
    <div className="card">
      <SearchBar setWeather={setWeatherData} />
      <div className="weather-info">
        <div className="locationDate">
          <div className="left">
            <span className="material-symbols-outlined">location_on</span>
            <h3 className="city">{weatherData.city}</h3>
          </div>
          <div className="right">{formattedDate}</div>
        </div>

        <div className="condition">
          <img
            src={
              icons.find((element) => {
                if (element[1] === weatherData.icon) {
                  return element;
                }
              })[0]
            }
            alt="x"
          />
          <div className="right">
            <h4 className="temp">{weatherData.temp} °C</h4>
            <div className="state">{weatherData.state}</div>
          </div>
        </div>

        <div className="moreInfo">
          <div className="humidity">
            <span className="material-symbols-outlined">water_drop</span>
            <div className="info">
              <div>Humidity</div>
              <h4 className="value">{weatherData.humidity}%</h4>
            </div>
          </div>
          <div className="wind">
            <span className="material-symbols-outlined">air</span>
            <div className="info">
              <div>Wind Speed</div>
              <h4 className="value">{weatherData.windSpeed} Km/h</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h3>Loading</h3>
  );
}
