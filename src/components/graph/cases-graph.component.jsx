import React from "react";
import ReactApexChart from "react-apexcharts";
import { connect } from "react-redux";

const CasesGraph = ({ graphData }) => {
  function buildX(data) {
    const xAxis = [];

    for (let i = 0; i < data.length; i++) {
      xAxis.push(data[i].x);
    }
    return xAxis;
  }

  function buildY(data) {
    const yAxis = [];

    for (let i = 0; i < data.length; i++) {
      yAxis.push(data[i].y);
    }

    return yAxis;
  }

  let series = [
    {
      name: "Cases",
      data: buildY(graphData),
    },
  ];

  let options = {
    chart: {
      height: 350,
      type: "area",
      zoom: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    xaxis: {
      type: "datetime",
      categories: buildX(graphData),
    },

    fill: {
      colors: "#003cf5",
    },
  };

  return (
    <div>
      <ReactApexChart
        series={series}
        options={options}
        height={350}
        type="area"
      />
    </div>
  );
};

const mapStateToProps = ({ casesGraphData }) => ({
  graphData: casesGraphData.graphData,
});

export default connect(mapStateToProps)(CasesGraph);
