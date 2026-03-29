import { useState } from "react";
import "../styles/SearchBar.css";
import { iconMap } from "../icons";
const key = "BWZJAKN5J73RM7Q2CQLWBAKV3";
const url =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const apiParams =
  "?include=current&elements=temp,humidity,windspeed,conditions,icon,feelslike&unitGroup=metric";

export default function SearchBar({ setWeather }) {
  const [searchQuery, setSearchQuery] = useState("");

  async function handleSearch(e) {
    e.preventDefault();

    try {
      const res = await fetch(url + searchQuery + apiParams + "&key=" + key);
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

      setWeather((prev) => ({
        ...prev,
        city: data.resolvedAddress,
        temp: data.currentConditions.temp,
        humidity: data.currentConditions.humidity,
        windSpeed: data.currentConditions.windspeed,
        state: data.currentConditions.conditions,
        icon: iconMap[data.currentConditions.icon],
      }));
    } catch (err) {
      alert(err);
    }
  }

  return (
    <form className="searchPanel" onSubmit={handleSearch}>
      <input
        className="searchInput"
        type="text"
        placeholder="Search city"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      ></input>
      <button type="submit" className="searchBtn">
        <span className="material-symbols-outlined">search</span>
      </button>
    </form>
  );
}
