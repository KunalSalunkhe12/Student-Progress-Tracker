import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import jwt from "jwt-decode";
import { API_ENDPOINT } from "../constants";
import { useNavigate } from "react-router-dom";

const AddClass = () => {
  const Teacher = jwt(localStorage.getItem("user"));
  const navigate = useNavigate();

  const [className, setClassName] = useState("");
  const [sem, setSem] = useState("");
  const [year, setYear] = useState("");
  const [subject, setSubject] = useState({});

  const handleSubjectChange = (event) => {
    const { name, value } = event.target;
    setSubject((prevMarks) => ({
      ...prevMarks,
      [name]: value.toUpperCase(),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({ className, sem, year, subject });

    const response = await fetch(`${API_ENDPOINT}class/add-class`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        className,
        sem,
        year,
        subject,
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
    <div className="flex ">
      <Dashboard name={Teacher.name} />
      <form
        className="flex flex-col flex-1 justify-center items-center py-20"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl text-pBlue font-bold mb-4">
          Add Class Details
        </h1>
        <div className="bg-pRed p-6 rounded-md w-1/2">
          <div className="text-xl font-semibold text-white gap-2 flex flex-col">
            <label htmlFor="name">Year:</label>
            <input
              className="p-1 text-black outline-pBlue rounded-sm"
              type="text"
              id="name"
              value={year}
              onChange={(e) => setYear(e.target.value.toUpperCase())}
            />
          </div>
          <div className="text-xl font-semibold text-white gap-2 mt-4 flex flex-col">
            <label htmlFor="branch">Sem:</label>
            <input
              className="p-1 text-black outline-pBlue rounded-sm"
              type="number"
              id="branch"
              value={sem}
              onChange={(e) => setSem(e.target.value.toUpperCase())}
            />
          </div>
          <div className="text-xl font-semibold text-white gap-2 mt-4 flex flex-col">
            <label htmlFor="year">Class:</label>
            <input
              className="p-1 text-black outline-pBlue rounded-sm"
              type="text"
              id="year"
              value={className}
              onChange={(e) => setClassName(e.target.value.toUpperCase())}
            />
          </div>
        </div>
        <h2 className="text-3xl text-pBlue font-bold mb-4">
          Add Class Subjects
        </h2>
        <div className="bg-pRed p-6 rounded-md w-1/2">
          <div className="text-xl font-semibold text-white gap-2 mt-4 flex flex-col">
            <label htmlFor="marks-subject1">Subject 1:</label>
            <input
              className="p-1 text-black outline-pBlue rounded-sm"
              type="text"
              name="subject1"
              value={subject.subject1 || ""}
              onChange={handleSubjectChange}
              required
            />
          </div>
          <div className="text-xl font-semibold text-white gap-2 mt-4 flex flex-col">
            <label htmlFor="marks-subject1">Subject 2:</label>
            <input
              className="p-1 text-black outline-pBlue rounded-sm"
              type="text"
              name="subject2"
              value={subject.subject2 || ""}
              onChange={handleSubjectChange}
              required
            />
          </div>
          <div className="text-xl font-semibold text-white gap-2 mt-4 flex flex-col">
            <label htmlFor="marks-subject1">Subject 3:</label>
            <input
              className="p-1 text-black outline-pBlue rounded-sm"
              type="text"
              name="subject3"
              value={subject.subject3 || ""}
              onChange={handleSubjectChange}
              required
            />
          </div>
          <div className="text-xl font-semibold text-white gap-2 mt-4 flex flex-col">
            <label htmlFor="marks-subject1">Subject 4:</label>
            <input
              className="p-1 text-black outline-pBlue rounded-sm"
              type="text"
              name="subject4"
              value={subject.subject4 || ""}
              onChange={handleSubjectChange}
              required
            />
          </div>
          <div className="text-xl font-semibold text-white gap-2 mt-4 flex flex-col">
            <label htmlFor="marks-subject1">Subject 5:</label>
            <input
              className="p-1 text-black outline-pBlue rounded-sm"
              type="text"
              name="subject5"
              value={subject.subject5 || ""}
              onChange={handleSubjectChange}
              required
            />
          </div>
        </div>
        <button
          className="mt-4 p-2 text-xl bg-pBlue text-white rounded-md duration-100 hover:scale-105 w-1/2"
          type="submit"
        >
          Add Class
        </button>
      </form>
    </div>
  );
};

export default AddClass;
