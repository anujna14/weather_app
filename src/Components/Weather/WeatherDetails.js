import React from "react";
import WeatherDetail from "./WeatherDetail";
import "./WeatherDetails.scss";
import { useSelector } from "react-redux";
import moment from "moment";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { BsFillEyeFill } from "react-icons/bs";
import { TbArrowsDown, TbWind } from "react-icons/tb";
import { FaTemperatureHigh } from "react-icons/fa";
import { GiHeatHaze } from "react-icons/gi";
import { CiPercent } from "react-icons/ci";

const WeatherDetails = () => {
  const weatherData = useSelector((state) => state.currentWeather.weather);
  if (!weatherData) return null;
  return weatherData.length === 0 ? (
    <h1>No data found</h1>
  ) : (
    <div className="weather-details-container">
      <h1 className="weather-details-container-title">weather details</h1>
      <div className="detail-container">
        <WeatherDetail title="sunrise" value={moment.unix(weatherData?.sys?.sunrise).format("hh:mm a")} unit="" icon={<FiSunrise />} />
        <WeatherDetail title="sunset" value={moment.unix(weatherData?.sys?.sunset).format("hh:mm a")} unit="" icon={<FiSunset />} />
        <WeatherDetail title="wind" value={weatherData?.wind?.speed} unit="km/h" icon={<TbWind />} />
        <WeatherDetail title="pressure" value={weatherData?.main?.pressure} unit="hPa" icon={<TbArrowsDown />} />
        <WeatherDetail title="visibility" value={weatherData?.visibility / 1000} unit="km" icon={<BsFillEyeFill />} />
        <WeatherDetail title="feels Like" value={weatherData?.main?.feels_like} unit="oC" icon={<FaTemperatureHigh />} />
        <WeatherDetail title="humidity" value={weatherData?.main?.humidity} unit="%" icon={<CiPercent />} />
        <WeatherDetail title="Temp Max" value={weatherData?.main?.temp_max} unit="oC" icon={<GiHeatHaze />} />
      </div>
    </div>
  );
};

export default WeatherDetails;
