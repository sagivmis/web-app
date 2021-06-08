import React from "react";
import { Chart } from "react-charts";
import CanvasJSReact from "../canvasjs.react";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const BarChart = ({ items }) => {
  console.log(items);
  const options = {
    title: {
      text: "",
    },
    dataPointWidth: 155,
    data: [
      {
        type: "column",
        dataPoints: [
          { label: `${items[0].text}`, y: parseInt(`${items[0].number_sold}`) },
          { label: `${items[1].text}`, y: parseInt(`${items[1].number_sold}`) },
          { label: `${items[2].text}`, y: parseInt(`${items[2].number_sold}`) },
        ],
      },
    ],
  };
  return (
    <div>
      <CanvasJSChart
        options={options}
        /* onRef = {ref => this.chart = ref} */
      />
    </div>
  );
};

export default BarChart;
