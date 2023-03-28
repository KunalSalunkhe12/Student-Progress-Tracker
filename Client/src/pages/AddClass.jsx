import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import jwt from "jwt-decode";
import { API_ENDPOINT } from "../constants";
import { useNavigate } from "react-router-dom";

const AddClass = () => {
  const Teacher = jwt(localStorage.getItem("user"));

  const [className, setClassName] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${API_ENDPOINT}class/add-class`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        className,
        branch,
        year,
      }),
    });

    const classData = await response.json();

    if (classData.class) {
      alert(classData.message);
      navigate("/teacher-classes");
    } else {
      alert(classData.message);
    }
  };

  return (
    <div className="flex">
      <Dashboard name={Teacher.name} />
      <form
        className="flex flex-col flex-1 justify-center items-center py-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl text-pBlue font-bold mb-4">Add Your Class</h1>
        <div className="bg-pRed p-6 rounded-md">
          <div className="text-2xl font-semibold text-white gap-2 flex flex-col">
            <label htmlFor="name">Class:</label>
            <input
              className="p-1 text-black outline-pBlue rounded-sm"
              type="text"
              id="name"
              value={className}
              onChange={(e) => setClassName(e.target.value.toUpperCase())}
            />
          </div>
          <div className="text-2xl font-semibold text-white gap-2 mt-4 flex flex-col">
            <label htmlFor="branch">Branch:</label>
            <input
              className="p-1 text-black outline-pBlue rounded-sm"
              type="text"
              id="branch"
              value={branch}
              onChange={(e) => setBranch(e.target.value.toUpperCase())}
            />
          </div>
          <div className="text-2xl font-semibold text-white gap-2 mt-4 flex flex-col">
            <label htmlFor="year">Year:</label>
            <input
              className="p-1 text-black outline-pBlue rounded-sm"
              type="text"
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value.toUpperCase())}
            />
          </div>
        </div>
        <button
          className="mt-4 p-2 text-xl bg-pBlue text-white rounded-md "
          type="submit"
        >
          Add Class
        </button>
      </form>
    </div>
  );
};

export default AddClass;
