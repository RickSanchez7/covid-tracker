export const sortData = (data) => {
  const sortedData = [...data];

  return sortedData.sort((a, b) => {
    if (a.cases > b.cases) return -1;
    return 1;
  });
};
