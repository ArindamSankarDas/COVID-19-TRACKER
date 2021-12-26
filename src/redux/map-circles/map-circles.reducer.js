const INITIAL_STATE = {
  caseType: "cases",
};

const mapCirclesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_MAP_CIRCLES_RECOVERED":
      return {
        ...state,
        caseType: action.payload,
      };

    case "SET_MAP_CIRCLES_DEATHS":
      return {
        ...state,
        caseType: action.payload,
      };

    case "SET_MAP_CIRCLES_CASES":
      return {
        ...state,
        caseType: action.payload,
      };
    default:
      return state;
  }
};

export default mapCirclesReducer;
