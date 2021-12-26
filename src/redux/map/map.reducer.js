const INITIAL_STATE = {
  lat: 0.00134,
  lng: -78.446487,
  countriesData: [],
};

const mapReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_MAP_LATITUDE":
      return {
        ...state,
        lat: action.payload,
      };

    case "SET_MAP_LONGITUDE":
      return {
        ...state,
        lng: action.payload,
      };

    case "SET_MAP_COUNTRIES":
      return {
        ...state,
        countriesData: action.payload,
      };

    default:
      return state;
  }
};

export default mapReducer;
