import React from "react";
import { Doughnut } from "react-chartjs-2";

const SgpiDonutChart = ({ studentsData }) => {
  const aggregateData = (students) => {
    let count1to3 = 0;
    let count4to7 = 0;
    let count8to10 = 0;

    students.forEach((student) => {
      const sgpi = student.sgpi;
      if (sgpi >= 1 && sgpi <= 3) {
        count1to3++;
      } else if (sgpi >= 4 && sgpi <= 7) {
        count4to7++;
      } else if (sgpi >= 8 && sgpi <= 10) {
        count8to10++;
      }
    });

    return [count1to3, count4to7, count8to10];
  };

  const data = aggregateData(studentsData);

  const chartData = {
    labels: ["1-3 SGPI", "4-7 SGPI", "8-10 SGPI"],
    datasets: [
      {
        label: "SGPI Distribution",
        data: data,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "SGPI Distribution",
      },
    },
  };
  return <Doughnut data={chartData} options={options}></Doughnut>;
};

export default SgpiDonutChart;
