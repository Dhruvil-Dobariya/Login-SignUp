import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import LoginControl from "./components/LoginControl";
import Signup from "./components/Signup";

class App extends React.Component {
  state = {
    // header
    header_h2__bold: "React",
    header_title: "Login System",

    // main
    main_title: "Login to our site",
  };

  render() {
    const state = this.state;
    return (
      <div className="container mt-5">
        <Navbar
          header_h2__bold={state.header_h2__bold}
          header_title={state.header_title}
          main_title={state.main_title}
        />
      </div>
    );
  }
}

export default App;
