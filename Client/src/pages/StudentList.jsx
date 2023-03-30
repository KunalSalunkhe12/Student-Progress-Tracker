import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_ENDPOINT } from "../constants";
import { AiFillDelete } from "react-icons/ai";
import Dashboard from "../components/Dashboard";
import jwt from "jwt-decode";

function StudentList() {
  const { id: classId } = useParams();
  const Teacher = jwt(localStorage.getItem("user"));

  const [students, setStudents] = useState([]);

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
      if (studentsData) setStudents(studentsData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getStudents();
  }, [classId]);

  const deleteStudent = async (studentId) => {
    try {
      const response = await fetch(
        `${API_ENDPOINT}student/delete-student?studentId=${studentId}`,
        { method: "DELETE" }
      );

      if (!response.ok) {
        const error = await response.json();
        alert(error.error);
      }

      const result = await response.json();
      if (result.status === "ok") {
        getStudents();
      } else {
        alert(result.message);
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  return (
    <div className="flex">
      <Dashboard name={Teacher.name} />
      <div className="flex-1 flex flex-col items-center py-20 px-4 ">
        <div className="grid grid-cols-6 w-full">
          <h2 className="p-2 border-2 bg-pRed text-pYellow font-semibold">
            Roll No.
          </h2>
          <h2 className="p-2 border-2 bg-pRed text-pYellow font-semibold">
            Class
          </h2>
          <h2 className="p-2 border-2 bg-pRed text-pYellow font-semibold">
            Name
          </h2>
          <h2 className="p-2 border-2 bg-pRed text-pYellow font-semibold">
            Prediction
          </h2>
          <h2 className="p-2 border-2 bg-pRed text-pYellow font-semibold">
            Profile
          </h2>
          <h2 className="p-2 border-2 bg-pRed text-pYellow font-semibold">
            Action
          </h2>
        </div>
        {students.length > 0 ? (
          students.map((student) => {
            return (
              <div
                className="grid grid-cols-6 w-full border-2"
                key={student._id}
              >
                <h2 className="p-2">{student.rollNumber}</h2>
                <h2 className="p-2">{student.studentClass}</h2>
                <h2 className="p-2">{student.studentName}</h2>
                <h2 className="p-2">{student.prediction}</h2>
                <Link
                  className="p-2 text-pBlue font-semibold"
                  to={`/teacher-student-profile/${student._id}`}
                >
                  View Student Profile
                </Link>
                <button
                  className="p-2 flex justify-center cursor-pointer"
                  onClick={() => deleteStudent(student._id)}
                >
                  <AiFillDelete />
                </button>
              </div>
            );
          })
        ) : (
          <h2 className="mt-10 text-2xl font-semibold">Please Add Students</h2>
        )}
      </div>
    </div>
  );
}

export default StudentList;
