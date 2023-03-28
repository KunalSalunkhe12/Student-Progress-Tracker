import React from "react";

function Dashboard({ name }) {
  return (
    <div className="min-h-screen flex flex-row">
      <div className="flex flex-col w-56 mt-16 bg-pBlue overflow-hidden">
        <div className="flex items-center justify-center h-10 shadow-md">
          <h1 className="text-md uppercase text-gray-300">{name}</h1>
        </div>
        <ul className="flex flex-col py-4">
          <li>
            <a
              href="/teacher-classes"
              className="flex flex-row items-center justify-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-500"
            >
              <span className="text-sm font-medium">Classes</span>
            </a>
          </li>
          <li>
            <a
              href="/teacher-add-class"
              className="flex flex-row items-center justify-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-500"
            >
              <span className="text-sm font-medium">Add Class</span>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="flex flex-row items-center justify-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-500"
            >
              <span className="text-sm font-medium">Add students</span>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="flex flex-row items-center justify-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-500"
            >
              <span className="text-sm font-medium">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
