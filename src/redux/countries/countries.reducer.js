const INITIAL_STATE = {
  countries: [],
  country: "worldwide",
  countryInfo: {},
};

const countryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_COUNTRIES_ARRAY":
      return {
        ...state,
        countries: action.payload,
      };

    case "SET_CURRENT_COUNTRY":
      return {
        ...state,
        country: action.payload,
      };

    case "SET_COUNTRY_INFO":
      return {
        ...state,
        countryInfo: action.payload,
      };
    default:
      return state;
  }
};

export default countryReducer;
