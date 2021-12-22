export const buildChartData = (data, casesType = "cases") => {
  const chartData = [];

  let lastChartDataPoint;

  for (let date in data.cases) {
    if (lastChartDataPoint) {
      const newChartDataPoint = {
        x: date,
        y: data[casesType][date] - lastChartDataPoint,
      };
      chartData.push(newChartDataPoint);
    }
    lastChartDataPoint = data[casesType][date];
  }
  return chartData;
};
