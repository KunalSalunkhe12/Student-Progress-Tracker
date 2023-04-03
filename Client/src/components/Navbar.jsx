import React from "react";
import Logo from "../assets/Logo.png";

function Navbar() {
  return (
    <nav className="bg-pBlue text-white text-xl md:text-2xl lg:text-3xl font-bold p-4 flex gap-4 absolute w-full">
      <div className="w-10">
        <img src={Logo} alt="Logo-img" className="w-full" />
      </div>
      <h1>Student Progress Analyzer</h1>
    </nav>
  );
}

export default Navbar;
