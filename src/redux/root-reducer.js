import { combineReducers } from "redux";
import countryReducer from "./countries/countries.reducer";
import countriesTableReducer from "./countries-table/countries-table.reducer";
import graphReducer from "./cases-graph/cases-graph.reducer";
import mapReducer from "./map/map.reducer";
import mapCirclesReducer from "./map-circles/map-circles.reducer";

const rootReducer = combineReducers({
  countryData: countryReducer,
  countriesTableData: countriesTableReducer,
  casesGraphData: graphReducer,
  mapLocationData: mapReducer,
  mapCirclesData: mapCirclesReducer,
});

export default rootReducer;
