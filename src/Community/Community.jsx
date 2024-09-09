import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import communityImage from "../Assests/home.png";
import "./Community.css";

function Community() {
  return (
    <div className="community" data-aos="zoom-in-up" data-aos-duration="1000">
      <div className="for-community">
        <div className="left-side">
          <h1 className="heading">join the community</h1>
          <p className="para">
            REMOVE THE WORDS AND LEAVE THE TELEGRAM AND DISCORD BUTTONG ONLY
          </p>
          <div className="buttons">
            <a href="https://t.me/YXCOINPortal" target="/blank" className="btn">
              <FaTelegramPlane className="icon" /> Telegram
            </a>
            <a href="http://x.com/yxcoins" target="/blank" className="btn">
              <FaDiscord className="icon" />
              Discord
            </a>
          </div>
        </div>
        <div className="right-side">
          <div className="for-image">
            <img src={communityImage} alt="community " className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
