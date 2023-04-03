import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClassBox from "../components/ClassBox";
import Dashboard from "../components/Dashboard";
import { API_ENDPOINT } from "../constants";
import jwt from "jwt-decode";

function ClassList() {
  const [Teacher, setTeacher] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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
  const [allClassData, setAllClassData] = useState([]);

  const getAllClasses = async () => {
    try {
      const response = await fetch(`${API_ENDPOINT}class/get-all-class`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });

      const classes = await response.json();

      if (classes) {
        setAllClassData(classes);
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  //Gets all Classes from database
  useEffect(() => {
    getAllClasses();
  }, []);

  const deleteClass = async (classId) => {
    try {
      const response = await fetch(
        `${API_ENDPOINT}class/delete-class?classId=${classId}`,
        { method: "DELETE" }
      );

      if (!response.ok) {
        const error = await response.json();
        alert(error.error);
      }

      const result = await response.json();
      if (result.status === "ok") {
        getAllClasses();
      } else {
        alert(result.message);
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  return (
    <>
      <div className="flex">
        <Dashboard name={Teacher} />
        <div className="flex-1">
          <div className="grid grid-cols-3 gap-4 pt-24 px-8">
            {isLoading ? (
              <div className="text-center text-2xl font-bold">Loading....</div>
            ) : allClassData.length !== 0 ? (
              allClassData.map((classData) => {
                return (
                  <ClassBox
                    key={classData._id}
                    classData={classData}
                    deleteClass={() => deleteClass(classData._id)}
                  />
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
