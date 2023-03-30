import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

function ClassBox({ classData, deleteClass }) {
  return (
    <div className="bg-pRed p-4 text-pCreme text-2xl font-semibold rounded cursor-pointer duration-75 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <Link to={`/teacher-classes/${classData._id}`}>
        <h2>
          <span className="text-pYellow">Class:-</span> {classData.className}
        </h2>
        <h3>
          <span className="text-pYellow">Semester:-</span> {classData.sem}
        </h3>
        <h3>
          <span className="text-pYellow">Year:-</span> {classData.year}
        </h3>
      </Link>
      <button className="w-full flex justify-end" onClick={deleteClass}>
        <AiFillDelete />
      </button>
    </div>
  );
}

export default ClassBox;
