import React from "react";
import Search from "../SearchContainer/Search";
import WeatherComponent from "../Weather/WeatherComponent";
import WeatherDetails from "../Weather/WeatherDetails";
import "./AppLayout.scss";

const AppLayout = () => {
  return (
    <div className="container">
      <Search />
      <WeatherComponent />
      <WeatherDetails />
    </div>
  );
};

export default AppLayout;
