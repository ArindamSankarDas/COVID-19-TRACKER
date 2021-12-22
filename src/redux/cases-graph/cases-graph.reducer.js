import { buildChartData } from "./cases-graph.utils";

const INITIAL_STATE = {
  graphData: {},
};

const graphReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_GRAPH_DATA":
      return {
        ...state,
        graphData: buildChartData(action.payload),
      };

    default:
      return state;
  }
};

export default graphReducer;
