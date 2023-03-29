import React from "react";
import Card from "../UI/Card";
import "./WeatherDetail.scss";
const WeatherDetail = ({ title, value, unit, icon }) => {
  return (
      <Card>
        <div className="detail-content">
          <div>
            <h1>{title}</h1>
          </div>
          <div className="detail-icon">
          <p>
              {value}
              <span>{unit==="oC"? <span><sup>o</sup>C</span>: <span>{unit}</span>}</span>
            </p>
            <h5 className="icon">{icon}</h5>
          </div>
        </div>
      </Card>

  );
};

export default WeatherDetail;
