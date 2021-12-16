export const setCurrentCountry = (country) => ({
  type: "SET_CURRENT_COUNTRY",
  payload: country,
});

export const setCountriesArray = (countriesArr) => ({
  type: "SET_COUNTRIES_ARRAY",
  payload: countriesArr,
});

export const setCountryInfo = (countryInfo) => ({
  type: "SET_COUNTRY_INFO",
  payload: countryInfo,
});
