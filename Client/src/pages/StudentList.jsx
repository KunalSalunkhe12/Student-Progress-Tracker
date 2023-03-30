import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_ENDPOINT } from "../constants";
import Dashboard from "../components/Dashboard";
import jwt from "jwt-decode";

function StudentList() {
  const { id: classId } = useParams();
  const Teacher = jwt(localStorage.getItem("user"));

  const [students, setStudents] = useState([]);

  useEffect(() => {
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

    getStudents();
  }, [classId]);

  return (
    <div className="flex">
      <Dashboard name={Teacher.name} />
      <div className="flex-1 flex flex-col items-center py-20 px-4 ">
        <div className="grid grid-cols-5 w-full">
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
        </div>
        {students.length > 0 ? (
          students.map((student) => {
            return (
              <div
                className="grid grid-cols-5 w-full border-2"
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
