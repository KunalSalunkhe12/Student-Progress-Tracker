import React from "react";
import { Pie } from "react-chartjs-2";

function SgpiPieChart({ studentsData }) {
  // Categorize students based on their SGPI
  const categorizedData = studentsData.reduce(
    (acc, student) => {
      const sgpi = student.sgpi;
      if (sgpi >= 1 && sgpi <= 3) {
        acc["1-3"].count += 1;
        acc["1-3"].students.push(student);
      } else if (sgpi >= 4 && sgpi <= 7) {
        acc["4-7"].count += 1;
        acc["4-7"].students.push(student);
      } else if (sgpi >= 8 && sgpi <= 10) {
        acc["8-10"].count += 1;
        acc["8-10"].students.push(student);
      }
      return acc;
    },
    {
      "1-3": { count: 0, students: [] },
      "4-7": { count: 0, students: [] },
      "8-10": { count: 0, students: [] },
    }
  );

  // Create chart data
  const chartData = {
    labels: ["1-3 SGPI", "4-7 SGPI", "8-10 SGPI"],
    datasets: [
      {
        label: "Student SGPI",
        data: [
          categorizedData["1-3"].count,
          categorizedData["4-7"].count,
          categorizedData["8-10"].count,
        ],
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

export default SgpiPieChart;
