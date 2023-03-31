import React from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
Chart.register(ArcElement, Tooltip, Legend);

function PerformancePieChart({ studentsData }) {
  const predictions = studentsData.map((student) => student.prediction);
  const predictionCounts = predictions.reduce((acc, prediction) => {
    acc[prediction] = (acc[prediction] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(predictionCounts),
    datasets: [
      {
        label: "Student Performance",
        data: Object.values(predictionCounts),
        backgroundColor: ["#ff1d58", "#fff685", "#0049B7"],
      },
    ],
  };

  return studentsData.length > 0 ? (
    <Pie data={chartData} />
  ) : (
    <div>No Students Data Available</div>
  );
}

export default PerformancePieChart;
