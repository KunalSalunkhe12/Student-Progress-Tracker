import React, { useState, useEffect } from "react";
import { API_ENDPOINT } from "../constants";
import Dashboard from "../components/Dashboard";
import jwt from "jwt-decode";

function AddStudent() {
  const [studentName, setStudentName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [studentClass, setStudentClass] = useState();
  const [marks, setMarks] = useState({});
  const [allClassData, setAllClassData] = useState([]);
  //
  const [selectedClass, setSelectedClass] = useState();

  const Teacher = jwt(localStorage.getItem("user"));

  useEffect(() => {
    const getAllClasses = async () => {
      try {
        const response = await fetch(`${API_ENDPOINT}class/get-all-class`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        });

        const classes = await response.json();

        if (classes) setAllClassData(classes);
      } catch (error) {
        console.error(error);
      }
    };

    getAllClasses();
  }, []);

  useEffect(() => {
    const currentClassSelected = allClassData.filter((classData) => {
      return;
    });
  }, []);

  //add student
  const handleSubmit = (event) => {
    event.preventDefault();
    // send the student information to the server to be saved
    try {
    } catch (error) {}
    const studentInfo = { studentName, rollNumber, studentClass, marks };
    console.log(studentInfo);
    // ... make the API call here to save the student info to the server
  };

  //handles the marks input
  const handleMarksChange = (event) => {
    const { name, value } = event.target;
    setMarks((prevMarks) => ({
      ...prevMarks,
      [name]: parseInt(value),
    }));
  };

  return (
    <div className="flex">
      <Dashboard name={Teacher.name} />
      <div className="flex-1 flex justify-center items-center flex-col py-20">
        <h1 className="text-3xl font-bold text-pBlue mb-4">
          Add Student Details
        </h1>
        <form
          className="flex flex-col text-xl font-semibold text-white w-1/2"
          onSubmit={handleSubmit}
        >
          <div className="bg-pRed p-6 rounded-md flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name:</label>
              <input
                className="p-1 text-black outline-pBlue rounded-sm"
                type="text"
                id="name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="rollNumber">Roll Number:</label>
              <input
                className="p-1 text-black outline-pBlue rounded-sm"
                type="number"
                id="rollNumber"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="studentClass">Class:</label>
              <select
                className="text-black"
                id="studentClass"
                value={studentClass}
                onChange={(e) => setStudentClass(e.target.value)}
              >
                {allClassData.map((classData) => {
                  return (
                    <option key={classData._id}>
                      {classData.className}-{classData.branch}
                    </option>
                  );
                })}
              </select>
              {/* <input
                className="p-1 text-black outline-pBlue rounded-sm"
                type="text"
                id="studentClass"
                value={studentClass}
                onChange={(e) => setStudentClass(e.target.value)}
                required
              /> */}
            </div>
          </div>
          <h2 className="text-3xl font-bold text-pBlue mb-4 text-center mt-4">
            Add Student Marks
          </h2>
          <div className="bg-pRed p-6 rounded-md flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="marks-subject1">Subject 1 Marks:</label>
              <input
                className="p-1 text-black outline-pBlue rounded-sm"
                type="number"
                id="marks-subject1"
                name="subject1"
                value={marks.subject1 || ""}
                onChange={handleMarksChange}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="marks-subject2">Subject 2 Marks:</label>
              <input
                className="p-1 text-black outline-pBlue rounded-sm"
                type="number"
                id="marks-subject2"
                name="subject2"
                value={marks.subject2 || ""}
                onChange={handleMarksChange}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="marks-subject3">Subject 3 Marks:</label>
              <input
                className="p-1 text-black outline-pBlue rounded-sm"
                type="number"
                id="marks-subject3"
                name="subject3"
                value={marks.subject3 || ""}
                onChange={handleMarksChange}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="marks-subject4">Subject 4 Marks:</label>
              <input
                className="p-1 text-black outline-pBlue rounded-sm"
                type="number"
                id="marks-subject4"
                name="subject4"
                value={marks.subject4 || ""}
                onChange={handleMarksChange}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="marks-subject5">Subject 5 Marks:</label>
              <input
                className="p-1 text-black outline-pBlue rounded-sm"
                type="number"
                id="marks-subject5"
                name="subject5"
                value={marks.subject5 || ""}
                onChange={handleMarksChange}
                required
              />
            </div>
          </div>
          <button
            className="mt-4 p-2 text-xl bg-pBlue text-white rounded-md duration-100 hover:scale-105"
            type="submit"
          >
            Save Student
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;
