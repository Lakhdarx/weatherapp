import clear from "./assets/clear.svg";
import clouds from "./assets/clouds.svg";
import lightrain from "./assets/lightrain.svg";
import partialclouds from "./assets/partialclouds.svg";
import rain from "./assets/rain.svg";
import snow from "./assets/snow.svg";
import thunderstorm from "./assets/thunderstorm.svg";

export const icons = [
  [clear, "clear"],
  [clouds, "clouds"],
  [lightrain, "lightrain"],
  [partialclouds, "partialclouds"],
  [rain, "rain"],
  [snow, "snow"],
  [thunderstorm, "thunderstorm"],
];

export const iconMap = {
  "clear-day": "clear",
  "clear-night": "clear",

  "partly-cloudy-day": "partialclouds",
  "partly-cloudy-night": "partialclouds",

  cloudy: "clouds",

  rain: "rain",
  "showers-day": "lightrain",
  "showers-night": "lightrain",

  "thunder-rain": "thunderstorm",
  "thunder-showers-day": "thunderstorm",
  "thunder-showers-night": "thunderstorm",

  snow: "snow",
};
