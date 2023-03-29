import axios from "axios";
import { ActionTypes } from "../Constants/action-types";
const webUrl = process.env.REACT_APP_WEB_URL;
const webUrl2 = process.env.REACT_APP_FORECAST_URL;
const CURRENT_WEATHER_API = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchCurrentWeatherDetails = (lat, lon) => async (dispatch) => {
  const response = await axios.get(`${webUrl}lat=${lat}&lon=${lon}&units=metric&appid=${CURRENT_WEATHER_API}`);
  dispatch({ type: ActionTypes.FETCH_CURRENT_WEATHER_DEDAILS, payload: response.data });
};

export const fetchLocationWeatherDetails = (query) => async (dispatch) => {
  const response = await axios.get(`${webUrl}q=${query}&units=metric&appid=${CURRENT_WEATHER_API}`);
  dispatch({ type: ActionTypes.FETCH_LOCATION_WEATHER_DETAILS, payload: response.data });
};

export const fetchForecastWeatherDetails = (query) => async (dispatch) => {
  const response = await axios.get(`${webUrl2}q=${query}&units=metric&cnt=8&appid=${CURRENT_WEATHER_API}`);
  dispatch({ type: ActionTypes.FETCH_FORECAST_WEATHER_DETAILS, payload: response.data.list });
};

export const fetchCurrentForecastWeatherDetails = (lat, lon) => async (dispatch) => {
  const response = await axios.get(`${webUrl2}lat=${lat}&lon=${lon}&cnt=8&units=metric&appid=${CURRENT_WEATHER_API}`);
  dispatch({ type: ActionTypes.FETCH_CURRENT_FORECAST_WEATHER_DETAILS, payload: response.data.list });
};
