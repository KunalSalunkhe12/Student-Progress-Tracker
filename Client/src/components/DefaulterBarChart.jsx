import React from "react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
Chart.register(CategoryScale, LinearScale, BarElement, Tooltip);

function DefaulterBarChart({ studentsData }) {
  const defaulterCounts = studentsData.reduce(
    (counts, student) => {
      if (student.defaulter === "Yes") {
        counts.defaulter++;
      } else {
        counts.nonDefaulter++;
      }
      return counts;
    },
    { defaulter: 0, nonDefaulter: 0 }
  );

  const chartData = {
    labels: ["Defaulters", "Non-Defaulters"],
    datasets: [
      {
        label: "Number of Students",
        data: [defaulterCounts.defaulter, defaulterCounts.nonDefaulter],
        backgroundColor: ["#ff1d58", "#fff685"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Defaulter Status",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Number of Students",
        },
      },
    },
  };

  return studentsData.length > 0 ? (
    <Bar data={chartData} options={options} />
  ) : (
    <div>No Students Data Available</div>
  );
}

export default DefaulterBarChart;
