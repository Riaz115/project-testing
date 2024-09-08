import React from "react";
import Header from "../Navbar/Header";
import Home from "../Home/Home";
import "./HeaderAndHome.css";

function HeaderAndHome() {
  return (
    <div className="headerAndHome">
      <Header />
      <Home />
    </div>
  );
}

export default HeaderAndHome;
