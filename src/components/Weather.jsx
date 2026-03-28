import { useState } from "react";
import "../styles/Weather.css";
import SearchBar from "./SearchBar";

export default function Weather() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div className="card">
      <SearchBar />
    </div>
  );
}
