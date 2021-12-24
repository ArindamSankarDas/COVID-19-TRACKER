const INITIAL_STATE = {
  lat: 0.00134,
  lng: -78.446487,
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

    default:
      return state;
  }
};

export default mapReducer;
