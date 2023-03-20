import React from "react";
import { GiProgression } from "react-icons/gi";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-pBlue text-white text-xl md:text-2xl lg:text-3xl font-bold p-4 flex gap-4 absolute w-full">
      <GiProgression className="text-pRed" />
      <Link to="/">
        <h1>Student Progress Tracker</h1>
      </Link>
    </nav>
  );
}

export default Navbar;
