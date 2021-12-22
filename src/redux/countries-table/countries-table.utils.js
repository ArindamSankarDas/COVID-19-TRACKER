export const sortData = (data) => {
  const dataToSort = [...data];

  return dataToSort.sort((a, b) => (a.countryCases > b.countryCases ? -1 : 1));
};
