import React, { useState, useEffect } from "react";
import { API_ENDPOINT } from "../constants";
import { useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import jwt from "jwt-decode";
import { MdGroupAdd } from "react-icons/md";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { MdOutlineDisabledByDefault } from "react-icons/md";

function AddStudent() {
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

  const [studentName, setStudentName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [studentClass, setStudentClass] = useState();
  const [marks, setMarks] = useState({});
  const [defaulter, setDefaulter] = useState("");

  const [allClassData, setAllClassData] = useState([]);
  const [selectedClass, setSelectedClass] = useState();

  //get all class from database
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

  //selected Class
  useEffect(() => {
    const currentSelectedClass = allClassData.filter(
      (classData) =>
        `${classData.className}-${classData.year}-${classData.sem}` ===
        studentClass
    );
    setSelectedClass(...currentSelectedClass);
  }, [studentClass, allClassData]);

  //handles the marks input
  const handleMarksChange = (event) => {
    const { name, value } = event.target;
    setMarks((prevMarks) => ({
      ...prevMarks,
      [name]: value,
    }));
  };

  //add student submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${API_ENDPOINT}student/add-student`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          studentName,
          rollNumber,
          studentClass,
          studentClassId: selectedClass._id,
          marks,
          defaulter,
        }),
      });

      const student = await response.json();

      alert(student.message);

      if (student.savedStudent) {
        navigate(`/teacher-classes/${selectedClass._id}`);
      }
    } catch (error) {
      alert("Please Select Class and Defaulter");
      console.log(error);
    }
  };

  return (
    <div className="flex">
      <Dashboard name={Teacher} />
      <div className="flex-1 flex justify-center items-center flex-col py-20">
        <h1 className="text-2xl font-bold text-pBlue mb-4 flex items-center gap-2">
          <MdGroupAdd />
          Add Student Details
        </h1>
        <form
          className="flex flex-col text-xl font-semibold text-white w-1/2"
          onSubmit={handleSubmit}
        >
          <div className="bg-pRed p-6 rounded-md flex flex-col gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
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
                className="text-black p-1 rounded-sm"
                id="studentClass"
                value={studentClass}
                onChange={(e) => setStudentClass(e.target.value)}
              >
                <option value="">-</option>
                {allClassData.map((classData) => {
                  return (
                    <option key={classData._id}>
                      {classData.className}-{classData.year}-{classData.sem}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-pBlue my-4 flex items-center justify-center gap-2">
            <BsFileEarmarkSpreadsheet />
            Add Student Marks
          </h2>
          <div className="bg-pRed p-6 rounded-md flex flex-col gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="flex flex-col gap-2">
              <label htmlFor="marks-subject1">
                {selectedClass
                  ? selectedClass.subject.subject1
                  : "Subject 1 Marks"}
              </label>
              <input
                className="p-1 text-black outline-pBlue rounded-sm"
                type="number"
                id="marks-subject1"
                name={
                  selectedClass ? selectedClass.subject.subject1 : "subject1"
                }
                value={
                  selectedClass ? marks[selectedClass.subject.subject1] : ""
                }
                onChange={handleMarksChange}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="marks-subject2">
                {selectedClass
                  ? selectedClass.subject.subject2
                  : "Subject 2 Marks"}
              </label>
              <input
                className="p-1 text-black outline-pBlue rounded-sm"
                type="number"
                id="marks-subject2"
                name={
                  selectedClass ? selectedClass.subject.subject2 : "subject2"
                }
                value={
                  selectedClass ? marks[selectedClass.subject.subject2] : ""
                }
                onChange={handleMarksChange}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="marks-subject3">
                {selectedClass
                  ? selectedClass.subject.subject3
                  : "Subject 3 Marks"}
              </label>
              <input
                className="p-1 text-black outline-pBlue rounded-sm"
                type="number"
                id="marks-subject3"
                name={
                  selectedClass ? selectedClass.subject.subject3 : "subject3"
                }
                value={
                  selectedClass ? marks[selectedClass.subject.subject3] : ""
                }
                onChange={handleMarksChange}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="marks-subject4">
                {selectedClass
                  ? selectedClass.subject.subject4
                  : "Subject 4 Marks"}
              </label>
              <input
                className="p-1 text-black outline-pBlue rounded-sm"
                type="number"
                id="marks-subject4"
                name={
                  selectedClass ? selectedClass.subject.subject4 : "subject4"
                }
                value={
                  selectedClass ? marks[selectedClass.subject.subject4] : ""
                }
                onChange={handleMarksChange}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="marks-subject5">
                {selectedClass
                  ? selectedClass.subject.subject5
                  : "Subject 5 Marks"}
              </label>
              <input
                className="p-1 text-black outline-pBlue rounded-sm"
                type="number"
                id="marks-subject5"
                name={
                  selectedClass ? selectedClass.subject.subject5 : "subject5"
                }
                value={
                  selectedClass ? marks[selectedClass.subject.subject5] : ""
                }
                onChange={handleMarksChange}
                required
              />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-pBlue my-4 flex items-center gap-2 justify-center">
            <MdOutlineDisabledByDefault />
            Add Defaulter Status
          </h2>
          <div className="bg-pRed p-6 rounded-md flex flex-col gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="flex flex-col gap-2">
              <label htmlFor="defaulter">Defaulter:</label>
              <select
                className="text-black p-1 rounded-sm"
                id="defaulter"
                value={defaulter}
                onChange={(e) => setDefaulter(e.target.value)}
              >
                <option value="">-</option>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
          </div>

          <button
            className="mt-4 p-2 text-xl bg-pBlue text-white rounded-md duration-100 hover:scale-105 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
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
