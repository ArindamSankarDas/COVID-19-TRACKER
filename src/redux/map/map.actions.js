export const setMapLatitude = (latitude) => ({
  type: "SET_MAP_LATITUDE",
  payload: latitude,
});
export const setMapLongitude = (longitude) => ({
  type: "SET_MAP_LONGITUDE",
  payload: longitude,
});

export const setMapCountries = (mapCountries) => ({
  type: "SET_MAP_COUNTRIES",
  payload: mapCountries,
});
