import { combineReducers } from "redux";
import { currentWeatherReducer } from "./weatherReducer";

const reducers = combineReducers({
    currentWeather: currentWeatherReducer,
})

export default reducers;