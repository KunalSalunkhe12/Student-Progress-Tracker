import React from "react";
import Dashboard from "../components/Dashboard";
import jwt from "jwt-decode";
import StudentProfile from "../components/StudentProfile";

function StudentPage() {
  const Teacher = jwt(localStorage.getItem("user"));

  return (
    <div className="flex">
      <Dashboard name={Teacher.name} />
      <div className="flex-1 flex justify-center items-center">
        <StudentProfile />
      </div>
    </div>
  );
}

export default StudentPage;
