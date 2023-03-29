import { fetchLocationWeatherDetails, fetchForecastWeatherDetails } from "./../../Redux/Actions/weatherActions";
import React, { useState } from "react";
import "./Search.scss";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";

const Search = () => {
  const [searchedValue, setSearchedValue] = useState("");
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchLocationWeatherDetails(searchedValue));
    dispatch(fetchForecastWeatherDetails(searchedValue))
    setSearchedValue("");
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        className="search"
        name="search"
        type="text"
        placeholder="Please Enter the city name. Eg.London"
        value={searchedValue}
        onChange={(e) => {
          setSearchedValue(e.target.value);
        }}
      />
      {/* <FaSearch className="search-icon" /> */}
    </form>
  );
};

export default Search;
