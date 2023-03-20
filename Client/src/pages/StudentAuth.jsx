import React, { useState } from "react";

function TeacherAuth() {
  const [isSignUp, setIsSignUp] = useState(false);

  const [name, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSwitch = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, rollNumber, password);
  };

  return (
    <div className="w-screen min-h-screen flex justify-center items-center flex-col p-3">
      <form
        onSubmit={handleSubmit}
        className="w-[90%] md:w-1/2 lg:w-1/3 p-4 text-white bg-pBlue rounded-lg flex flex-col gap-4"
      >
        {isSignUp && (
          <label htmlFor="name">
            <h4>Name</h4>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
              className="w-full p-2 rounded-lg mt-2 text-black"
            />
          </label>
        )}
        <label htmlFor="rollNumber">
          <h4>Roll No</h4>
          <input
            type="number"
            name="rollNumber"
            value={rollNumber}
            onChange={(e) => {
              setRollNumber(e.target.value);
            }}
            required
            className="w-full p-2 rounded-lg mt-2 text-black"
          />
        </label>
        <label htmlFor="password">
          <h4>Password</h4>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="w-full p-2 rounded-lg mt-2 text-black"
          />
        </label>
        <button type="submit" className="text-lg">
          {isSignUp ? "Sign up" : "Log in"}
        </button>
      </form>
      <p className="mt-4">
        {isSignUp ? "Already have an account?" : `Don't have an account?`}
        <button className="ml-4" onClick={handleSwitch}>
          {isSignUp ? "Log in" : "Sign up"}
        </button>
      </p>
    </div>
  );
}

export default TeacherAuth;
