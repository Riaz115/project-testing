import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="for-footer">
        <h1 className="heading">Your NeXt</h1>
        <div className="for-links">
          <a href="#" className="link">
            About <FiArrowUpRight />
          </a>
          <a href="#" className="link">
            Stack SneXt <FiArrowUpRight />
          </a>
          <a href="#" className="link">
            Resources <FiArrowUpRight />
          </a>
          <a href="#" className="link">
            Airdrop <FiArrowUpRight />
          </a>
        </div>
        <div className="icons">
          <div className="for-icon">
            <FaTelegramPlane className="icon" />
          </div>
          <div className="for-icon">
            <FaDiscord className="icon" />
          </div>
        </div>
        <p className="copy-right">@Copyright 2024, All Rights Reserved </p>
      </div>
    </div>
  );
}

export default Footer;
