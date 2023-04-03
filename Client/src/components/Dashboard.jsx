import React from "react";
import { Link } from "react-router-dom";
import { SiGoogleclassroom } from "react-icons/si";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { MdGroupAdd } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";

function Dashboard({ name }) {
  const handleLogout = () => {
    console.log("hi");
    localStorage.removeItem("user");
  };
  return (
    <div className="min-h-screen flex flex-row">
      <div className="flex flex-col w-56 mt-16 bg-pBlue overflow-hidden">
        <div className="flex items-center justify-center h-10 shadow-md">
          <h1 className="text-md uppercase text-gray-300 flex items-center gap-2 text-pYellow">
            <FaUserCircle /> {name}
          </h1>
        </div>
        <ul className="flex flex-col py-4">
          <li>
            <Link
              to="/teacher-classes"
              className="flex flex-row items-center justify-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-500"
            >
              <span className="text-sm font-medium flex items-center gap-2">
                <SiGoogleclassroom /> Classes
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/teacher-add-class"
              className="flex flex-row items-center justify-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-500"
            >
              <span className="text-sm font-medium flex items-center gap-2">
                <AiOutlineFolderAdd />
                Add Class
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/teacher-add-student"
              className="flex flex-row items-center justify-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-500"
            >
              <span className="text-sm font-medium flex items-center gap-2">
                <MdGroupAdd />
                Add students
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/teacher-view-analytics"
              className="flex flex-row items-center justify-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-500"
            >
              <span className="text-sm font-medium flex items-center gap-2">
                <MdOutlineAnalytics />
                View Analytics
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex flex-row items-center justify-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-500"
            >
              <button
                className="text-sm font-medium flex items-center gap-2"
                onClick={handleLogout}
              >
                <BiLogOut />
                Logout
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
