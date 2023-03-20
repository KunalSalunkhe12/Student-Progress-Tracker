import React from "react";
import ClassBox from "../components/ClassBox";
import Dashboard from "../components/Dashboard";

function ClassList() {
  return (
    <div className="flex">
      <Dashboard />
      <div className="flex-1">
        <div className="grid grid-cols-3 gap-4 pt-24 px-8">
          <ClassBox />
          <ClassBox />
          <ClassBox />
          <ClassBox />
        </div>
      </div>
    </div>
  );
}

export default ClassList;
