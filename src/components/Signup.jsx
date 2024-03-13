import React, { useState } from "react";
import LoginControl from "./LoginControl";

const Signup = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [newUser, setNewUser] = useState(null);

  const handleNewUser = () => {
    var username = document.getElementById("signUpUsername").value;
    var password1 = document.getElementById("signUpPassword1").value;
    var password2 = document.getElementById("signUpPassword2").value;
    if (password1 === password2) {
      if (username !== "") {
        setIsSignUp(true);
        setNewUser({ username: username, password: password1 });
      } else {
        alert("User name cannot be blank.");
      }
    } else {
      alert("The passwords you entered do not match.");
    }
  };

  return (
    <div>
      {isSignUp ? (
        <LoginControl newUser={newUser} />
      ) : (
        <div className="main_box--main--signUp">
          <input
            type="text"
            id="signUpUsername"
            className="form-control"
            placeholder="Username"
            autoComplete="off"
          ></input>
          <input
            type="password"
            id="signUpPassword1"
            className="form-control"
            placeholder="Password"
          ></input>
          <input
            type="password"
            id="signUpPassword2"
            className="form-control"
            placeholder="Re-enter password"
          ></input>
          <button className="btn btn-success" onClick={handleNewUser}>
            SIGN UP
          </button>
        </div>
      )}
    </div>
  );
};

export default Signup;
