import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import "./Header.css";

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle dropdown menu
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="header">
        <div className="left-side">
          <h1 className="for-logo">
            Your Ne<span className="text-primary">X</span>t
          </h1>
          <p className="link-text">Buy neXt </p>
          <p className="link-text">Markets </p>
        </div>
        <div className="right-side">
          <p className="icon">
            <FiSearch />
          </p>

          <p className="icon">
            <FaRegBell />
          </p>
          <div className="for-btn">
            <button className="btn">Get Started</button>
          </div>
        </div>
        <div className="navbar-toggle" onClick={toggleDropdown}>
          <IoMenu className="text-white fs-2" />
        </div>
      </div>
      {isDropdownOpen && (
        <div className="navbar-dropdown">
          <p className="link">Buy neXt </p>
          <p className="link">Markets </p>
          <div className="for-btn">
            <button className="btn">Get Started</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
