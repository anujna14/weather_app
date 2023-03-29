import { ActionTypes } from "../Constants/action-types";

const initialState = {
  weather: {},
  forecast: [],
};

export const currentWeatherReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_CURRENT_WEATHER_DEDAILS:
      return { ...state, weather: payload };
    case ActionTypes.FETCH_LOCATION_WEATHER_DETAILS:
      return { ...state, weather: payload };
    case ActionTypes.FETCH_FORECAST_WEATHER_DETAILS:
      return { ...state, forecast: payload };
      case ActionTypes.FETCH_CURRENT_FORECAST_WEATHER_DETAILS:
        return {...state, forecast: payload}
    default:
      return state;
  }
};
