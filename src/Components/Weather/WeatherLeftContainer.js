import React from "react";
import { ImLocation2 } from "react-icons/im";
import "./WeatherLeftContainer.scss";

const WeatherLeftContainer = ({ weatherData }) => {
  const getTodayDate = () => {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    let newDate = new Date();
    let currentDate = newDate.getDate();
    let currentDay = days[newDate.getDay()];
    let currentMonth = months[newDate.getMonth()];
    return {
      currentDate,
      currentDay,
      currentMonth,
    };
  };

  let iconUrl = weatherData.weather && `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

  return (
    <div className="left-container">
      <div className="left-container-date-icon">
        <div className="date-content">
          <h1>Today</h1>
          <p>
            <span>{getTodayDate().currentDay}</span>, <span>{getTodayDate().currentDate}</span> <span>{getTodayDate().currentMonth}</span>
          </p>
        </div>
        <div className="icon-content">
          <img src={iconUrl} alt="weather-icon" />
        </div>
      </div>
      <div className="left-container-temp">
        {weatherData?.main?.temp}
        <sup>o</sup>
      </div>
      <div className="left-container-location">
        <ImLocation2 className="location-icon" />
        <h1>{weatherData.name}</h1>
      </div>
    </div>
  );
};

export default WeatherLeftContainer;
