import React from "react";
import "./SingleForeCast.scss";
import moment from "moment";

const SingleForeCast = ({ forecast }) => {
  let iconUrl = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;
  return forecast.length === 0 ? (
    <div>No data found</div>
  ) : (
    <div className="single-content">
      <p>{moment(forecast?.dt_txt).format("hh:mm a")}</p>
      <div className="single-container">
        <img src={iconUrl} alt="icon" />
        <p>{forecast?.main?.temp}</p>
      </div>
    </div>
  );
};

export default SingleForeCast;
