import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ arr = [], currency, days }) => {
  const prices = [];
  const date = ["12/2/2022", "11/5/22", "16/3/2023"];

  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (days === "24h") date.push(new Date(arr[i][0]).toLocaleTimeString());
    else
    date.push(new Date(arr[i][0]).toLocaleDateString());
    prices.push(arr[i][1]);
  }

  console.log("the array date is ");

  console.log(date);

  const data = {

    // x-axis
    labels: date,

    //y-axis

    datasets: [
      {
        label: `Price in ${currency}`,
        data: prices,
        borderColor: "rgb(255,99,132)",
        borderColor: "rgba(255,99,132,0.5)",
      },
    ],
  };

  return (
    <Line
      options={{
        responsive: true,
      }}
      data={data}
    />
  );
};

export default Chart;
