import { combineReducers } from "redux";
import RestaurantsReducer from "./RestaurantsReducer";

export default combineReducers({ restaurants: RestaurantsReducer });
