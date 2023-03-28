import React from "react";
import { Link } from "react-router-dom";

function Dashboard({ name }) {
  return (
    <div className="min-h-screen flex flex-row">
      <div className="flex flex-col w-56 mt-16 bg-pBlue overflow-hidden">
        <div className="flex items-center justify-center h-10 shadow-md">
          <h1 className="text-md uppercase text-gray-300">{name}</h1>
        </div>
        <ul className="flex flex-col py-4">
          <li>
            <Link
              to="/teacher-classes"
              className="flex flex-row items-center justify-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-500"
            >
              <span className="text-sm font-medium">Classes</span>
            </Link>
          </li>
          <li>
            <Link
              to="/teacher-add-class"
              className="flex flex-row items-center justify-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-500"
            >
              <span className="text-sm font-medium">Add Class</span>
            </Link>
          </li>
          <li>
            <Link
              to="/teacher-add-student"
              className="flex flex-row items-center justify-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-500"
            >
              <span className="text-sm font-medium">Add students</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex flex-row items-center justify-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-500"
            >
              <span className="text-sm font-medium">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
