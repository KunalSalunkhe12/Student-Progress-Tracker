import React from "react";
import { useParams } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import jwt from "jwt-decode";

function StudentList() {
  const { id } = useParams();
  const Teacher = jwt(localStorage.getItem("user"));

  return (
    Teacher && (
      <div className="flex">
        <Dashboard name={Teacher.name} />
        <div className="flex-1 flex justify-center items-center">
          <h1>{id}</h1>
        </div>
      </div>
    )
  );
}

export default StudentList;
