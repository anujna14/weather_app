import React from "react";
import "./Shimmer.scss";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      <div className="shimmer-search animate">
      </div>
      <div className="shimmer-content">
        <div className="shimmer-content-today animate"></div>
        <div className="forecast-details animate">
          {Array(8)
            .fill("")
            .map((val, index) => (
              <div key={index} className="card">
                <div></div>
                <div></div>
              </div>
            ))}
        </div>
      </div>
      <div className="shimmer-details">
        {Array(10)
          .fill("")
          .map((val, index) => (
            <div key={index} className="skeleton">
              <div className="skeleton-image animate"></div>
              <h1 className="skeleton-title animate"></h1>
              <p className="skeleton-title animate"></p>
              <p className="skeleton-title animate"></p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
