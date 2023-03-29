import React from "react";
import "./WeatherRightContainer.scss";
import { useSelector } from "react-redux";
import SingleForeCast from "./SingleForeCast";

const WeatherRightContainer = () => {
  const forecastData = useSelector((state) => state.currentWeather.forecast);

  if (!forecastData) return null;
  return forecastData.length === 0 ? (
    <h1>No data found</h1>
  ) : (
    <div className="weather-right-container">
      {forecastData.map((forecast, index) => (
        <SingleForeCast key={index} forecast={forecast} />
      ))}
    </div>
  );
};

export default WeatherRightContainer;
