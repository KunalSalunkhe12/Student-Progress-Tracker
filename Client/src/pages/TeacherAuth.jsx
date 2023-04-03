import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { API_ENDPOINT } from "../constants";

function TeacherAuth() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSwitch = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!email && !password) {
      alert("Enter Email and Password");
      setIsLoading(false);

      return;
    }
    if (!name && isSignUp) {
      alert("Enter Name");
      setIsLoading(false);

      return;
    }

    if (isSignUp) {
      const response = await fetch(`${API_ENDPOINT}user/teacher-signup`, {
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

      if (data.message === "ok") {
        alert("Registration successful");
        setIsSignUp(false);
        setIsLoading(false);
      } else {
        alert("User already exist Duplicate email");
        setIsLoading(false);
      }
    } else {
      const response = await fetch(`${API_ENDPOINT}user/teacher-login`, {
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
      if (data.teacher) {
        alert(data.message);
        localStorage.setItem("user", data.teacher);
        setIsLoading(false);
        navigate("/teacher-classes");
      } else {
        alert(data.message);
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="w-screen min-h-screen flex justify-center items-center flex-col p-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
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
          {isLoading ? "..." : isSignUp ? "Sign up" : "Log in"}
        </button>
      </form>
      <p className="mt-4">
        <button className="mr-6">
          <Link to="/">Go Back</Link>
        </button>
        {isSignUp ? "Already have an account?" : `Don't have an account?`}
        <button className="ml-4" onClick={handleSwitch}>
          {isSignUp ? "Log in" : "Sign up"}
        </button>
      </p>
    </div>
  );
}

export default TeacherAuth;
