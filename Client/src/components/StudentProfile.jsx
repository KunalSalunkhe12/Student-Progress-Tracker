import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_ENDPOINT } from "../constants";

function StudentProfile() {
  const { id: studentId } = useParams();
  const [student, setStudent] = useState({});

  useEffect(() => {
    const getStudentData = async () => {
      console.log(studentId);
      try {
        const response = await fetch(
          `${API_ENDPOINT}student/get-student-data?studentId=${studentId}`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        const studentData = await response.json();
        if (studentData) setStudent(studentData);
      } catch (error) {
        console.error(error);
      }
    };
    getStudentData();
  });

  return <div className="">{studentId}</div>;
}

export default StudentProfile;
