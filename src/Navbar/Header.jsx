import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="left-side">
        <h1 className="for-logo">Your neXt</h1>
        <p className="link-text">
          Buy neXt
          <span>
            <IoIosArrowDown />
          </span>
        </p>
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
    </div>
  );
}

export default Header;
