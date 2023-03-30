import React from "react";

function ClassBox({ classData }) {
  return (
    <div className="bg-pRed p-4 text-pCreme text-2xl font-semibold rounded cursor-pointer duration-75 hover:scale-105">
      <h2>
        <span className="text-pYellow">Class:-</span> {classData.className}
      </h2>
      <h3>
        <span className="text-pYellow">Semester:-</span> {classData.sem}
      </h3>
      <h3>
        <span className="text-pYellow">Year:-</span> {classData.year}
      </h3>
    </div>
  );
}

export default ClassBox;
