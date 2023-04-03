import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_ENDPOINT } from "../constants";
import Dashboard from "../components/Dashboard";
import jwt from "jwt-decode";
import PerformancePieChart from "../components/PerformancePieChart";
import DefaulterBarChart from "../components/DefaulterBarChart";
import SgpiPieChart from "../components/SgpiPieChart";

function ViewAnalytics() {
  const [Teacher, setTeacher] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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

  const [studentClass, setStudentClass] = useState("");
  const [selectedClass, setSelectedClass] = useState();
  const [classId, setClassId] = useState("");

  const [students, setStudents] = useState([]);
  const [allClassData, setAllClassData] = useState([]);

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

  useEffect(() => {
    selectedClass ? setClassId(selectedClass._id) : setSelectedClass("");
  }, [selectedClass]);

  useEffect(() => {
    setIsLoading(true);
    const getStudents = async () => {
      try {
        const response = await fetch(
          `${API_ENDPOINT}student/get-students?classId=${classId}`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
            },
          }
        );

        const studentsData = await response.json();
        if (studentsData) {
          setStudents(studentsData);
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
        console.error(error);
      }
    };
    getStudents();
  }, [classId]);

  const handleClassChange = (e) => {
    setStudentClass(e.target.value);
  };

  return (
    <div className="flex">
      <Dashboard name={Teacher} />
      <div className="flex-1 flex flex-col gap-8 items-center py-20 px-4">
        <div className="flex gap-4 w-full items-center mb-6">
          <label className="text-xl font-semibold" htmlFor="studentClass">
            Select Class:
          </label>
          <select
            className="border-2 bg-pBlue text-white p-2 rounded-md font-semibold w-60"
            id="studentClass"
            value={studentClass}
            onChange={handleClassChange}
            required
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
        <div className="flex flex-col gap-4 items-center my-6 w-1/3">
          <h2 className="text-2xl font-semibold">Student Performance</h2>
          {isLoading ? (
            "Loading..."
          ) : (
            <PerformancePieChart className="" studentsData={students} />
          )}
        </div>
        <div className="flex flex-col gap-4 items-center my-6 w-1/3">
          <h2 className="text-2xl font-semibold">Student Defaulter</h2>
          {isLoading ? (
            "Loading..."
          ) : (
            <DefaulterBarChart className="" studentsData={students} />
          )}
        </div>
        <div className="flex flex-col gap-4 items-center my-6 w-1/3">
          <h2 className="text-2xl font-semibold">Student SGPI</h2>
          {isLoading ? "Loading..." : <SgpiPieChart studentsData={students} />}
        </div>
      </div>
    </div>
  );
}

export default ViewAnalytics;
