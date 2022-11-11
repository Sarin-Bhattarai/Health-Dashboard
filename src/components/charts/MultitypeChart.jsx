import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

function MultitypeChart() {
  const labels = ["2019", "2020", "2021", "2022", "2023", "2024", "2025"];

  const data = {
    labels,
    datasets: [
      {
        type: "line",
        label: "Covid Flow",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        fill: false,
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
      },
      {
        type: "bar",
        label: "Covid-Cases",
        backgroundColor: "rgb(75, 192, 192)",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "white",
        borderWidth: 2,
      },
      {
        type: "bar",
        label: "Covid-NewCases",
        backgroundColor: "rgb(53, 162, 235)",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
      },
    ],
  };

  return (
    <>
      <Chart type="bar" data={data} />
    </>
  );
}

export default MultitypeChart;
