import { combineReducers } from "redux";
import countryReducer from "./countries/countries.reducer";

const rootReducer = combineReducers({
  countryData: countryReducer,
});

export default rootReducer;
