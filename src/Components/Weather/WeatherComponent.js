import { fetchCurrentForecastWeatherDetails } from "./../../Redux/Actions/weatherActions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentWeatherDetails } from "../../Redux/Actions/weatherActions";
import "./WeatherContainer.scss";
import WeatherLeftContainer from "./WeatherLeftContainer";
import WeatherRightContainer from "./WeatherRightContainer";

const WeatherComponent = () => {
  const weatherData = useSelector((state) => state.currentWeather.weather);

  const dispatch = useDispatch();
  useEffect(() => {
    getGeolocation();
  }, []);

  const getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        dispatch(fetchCurrentWeatherDetails(latitude, longitude));
        dispatch(fetchCurrentForecastWeatherDetails(latitude, longitude));
      });
    }
  };

  if (!weatherData) return null;

  return weatherData.length === 0 ? (
    <h1>No data found</h1>
  ) : (
    <div className="current-weather">
      <WeatherLeftContainer weatherData={weatherData} />
      <WeatherRightContainer />
    </div>
  );
};

export default WeatherComponent;
