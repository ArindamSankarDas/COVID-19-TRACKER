export const sortData = (data) => {
  const dataToSort = [...data];

  dataToSort.sort((a, b) => {
    if (a.active > b.active) {
      return -1;
    } else {
      return 1;
    }
  });

  return dataToSort;
};
