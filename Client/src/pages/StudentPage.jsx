import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import jwt from "jwt-decode";
import StudentProfile from "../components/StudentProfile";

function StudentPage() {
  const [Teacher, setTeacher] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("user");
    if (token) {
      const user = jwt(token);
      const userName = user.name;
      setTeacher(userName);
    } else {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="flex">
      <Dashboard name={Teacher} />
      <div className="flex-1">
        <StudentProfile />
      </div>
    </div>
  );
}

export default StudentPage;
