import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TeacherAuth() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSwitch = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email && !password) {
      alert("Enter Email and Password");
      return;
    }
    if (!name && isSignUp) {
      alert("Enter Name");
      return;
    }

    if (isSignUp) {
      const response = await fetch("http://localhost:5000/user/teacherSignup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log(data);
    } else {
      const response = await fetch("http://localhost:5000/user/teacherLogin", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (data.teacher) {
        alert("Login successful");
        navigate("/teacher-classes");
      } else {
        alert("Incorrect email or password");
      }
    }
  };

  return (
    <div className="w-screen min-h-screen flex justify-center items-center flex-col p-3">
      <form
        onSubmit={handleSubmit}
        className="w-[90%] md:w-1/2 lg:w-1/3 p-4 text-white bg-pBlue rounded-lg flex flex-col gap-4"
      >
        {isSignUp && (
          <label htmlFor="c-password">
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
        <label htmlFor="email">
          <h4>Email</h4>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
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
