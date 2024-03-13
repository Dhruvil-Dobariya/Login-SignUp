import React from "react";
import LoginControl from "./LoginControl";

const Navbar = ({ header_h2__bold, header_title, main_title }) => {
  return (
    <div className="main_box">
      <div className="main_box--header">
        <h2>
          <b>{header_h2__bold}</b> {header_title}{" "}
        </h2>
      </div>

      <div className="main_box--main">
        <div className="main_box--main--title">
          <h4>{main_title}</h4>
        </div>
        <LoginControl />
      </div>
    </div>
  );
};

export default Navbar;
