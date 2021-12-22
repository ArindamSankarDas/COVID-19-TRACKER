import { combineReducers } from "redux";
import countryReducer from "./countries/countries.reducer";
import countriesTableReducer from "./countries-table/countries-table.reducer";
import graphReducer from "./cases-graph/cases-graph.reducer";

const rootReducer = combineReducers({
  countryData: countryReducer,
  countriesTableData: countriesTableReducer,
  casesGraphData: graphReducer,
});

export default rootReducer;
