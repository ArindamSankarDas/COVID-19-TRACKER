import { sortData } from "./countries-table.utils";

const INITIAL_STATE = {
  tableData: [],
};

const countriesTableReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_TABLE_DATA":
      return {
        ...state,
        tableData: sortData(action.payload),
      };

    default:
      return state;
  }
};
export default countriesTableReducer;
