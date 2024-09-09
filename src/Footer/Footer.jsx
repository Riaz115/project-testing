import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer" data-aos="zoom-in-up" data-aos-duration="1000">
      <div className="for-footer">
        <h1 className="heading">
          Your Ne<span className=" ex-color">X</span>t
        </h1>
        <div className="for-links">
          <a href="#" className="link">
            About <FiArrowUpRight />
          </a>

          <a href="#" className="link">
            Resources <FiArrowUpRight />
          </a>
        </div>
        <div className="icons">
          <a
            href="https://t.me/YXCOINPortal"
            target="/blank"
            className="for-icon">
            <FaTelegramPlane className="icon" />
          </a>
          <a href="http://x.com/yxcoins" target="/blank" className="for-icon">
            <FaDiscord className="icon" />
          </a>
        </div>
        <p className="copy-right">@Copyright 2024, All Rights Reserved </p>
      </div>
    </div>
  );
}

export default Footer;
