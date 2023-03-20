import React from "react";
import { Link } from "react-router-dom";
import studentM from "../assets/studentM.png";
import studentF from "../assets/studentF.png";
import teacherM from "../assets/teacherM.png";
import teacherF from "../assets/teacherF.png";

function Home() {
  return (
    <div className="h-screen flex justify-around items-center text-center">
      <Link
        to="/teacher-auth"
        className="text-white bg-pBlue p-4 rounded-lg transition-all hover:scale-105"
      >
        <div className="flex gap-4">
          <img className="w-24" src={teacherM} alt="teacher-male" />
          <img className="w-24" src={teacherF} alt="teacher-female" />
        </div>
        <h2 className="text-3xl font-semibold mt-8">Teacher</h2>
      </Link>
      <Link
        to="/student-auth"
        className="text-white bg-pBlue p-4 rounded-lg transition-all hover:scale-105"
      >
        <div className="flex gap-4">
          <img className="w-24" src={studentM} alt="student-male" />
          <img className="w-24" src={studentF} alt="student-female" />
        </div>
        <h2 className="text-3xl font-semibold mt-8">Student</h2>
      </Link>
    </div>
  );
}

export default Home;
