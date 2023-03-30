import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ClassBox from "../components/ClassBox";
import Dashboard from "../components/Dashboard";
import { API_ENDPOINT } from "../constants";
import jwt from "jwt-decode";

function ClassList() {
  const Teacher = jwt(localStorage.getItem("user"));

  const [allClassData, setAllClassData] = useState([]);

  //Gets all Classes from database
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

  return (
    <>
      <div className="flex">
        <Dashboard name={Teacher.name} />
        <div className="flex-1">
          <div className="grid grid-cols-3 gap-4 pt-24 px-8">
            {allClassData.length !== 0 ? (
              allClassData.map((classData) => {
                return (
                  <Link
                    key={classData._id}
                    to={`/teacher-classes/${classData._id}`}
                  >
                    <ClassBox key={classData._id} classData={classData} />
                  </Link>
                );
              })
            ) : (
              <h2 className="text-center text-2xl font-bold">
                Please Add a Class First
              </h2>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ClassList;
