import React, { useState } from "react";
import Welcome from "./Welcome";
import Signup from "./Signup";

const LoginControl = () => {
  const [users, setUsers] = useState([
    { username: "code", password: "blogger" },
    { username: "true", password: "codes" },
    { username: "furkan", password: "gulsen" },
  ]);
  const [welcomeConnect, setWelcomeConnect] = useState(false);
  const [trueUsername, setTrueUsername] = useState("");
  const [isSign, setIsSign] = useState(false);

  const Control = () => {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    const userFound = users.find(
      (user) => user.username === username && user.password === password
    );

    if (userFound) {
      setWelcomeConnect(true);
      setTrueUsername(username);
    } else {
      alert("Invalid username or password.");
    }
  };

  const SignUp = () => {
    setIsSign(true);
  };

  return (
    <div>
      {welcomeConnect ? (
        <Welcome uName={trueUsername} />
      ) : isSign ? (
        <Signup />
      ) : (
        <div className="main_box--main--login">
          <input
            type="text"
            id="username"
            className="form-control"
            placeholder="Username"
            autoComplete="off"
          />
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Password"
          />
          <button className="btn btn-success" onClick={Control}>
            LOGIN
          </button>
          <p onClick={SignUp} className="signup-link">
            Sign Up
          </p>
        </div>
      )}
    </div>
  );
};

export default LoginControl;
