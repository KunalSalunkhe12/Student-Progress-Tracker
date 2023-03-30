import React from "react";
import { GiProgression } from "react-icons/gi";

function Navbar() {
  return (
    <nav className="bg-pBlue text-white text-xl md:text-2xl lg:text-3xl font-bold p-4 flex gap-4 absolute w-full">
      <GiProgression className="text-pRed" />
      <h1>Student Progress Analyzer</h1>
    </nav>
  );
}

export default Navbar;
