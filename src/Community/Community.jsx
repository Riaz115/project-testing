import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import communityImage from "../Assests/home.png";
import "./Community.css";

function Community() {
  return (
    <div className="community">
      <div className="for-community">
        <div className="left-side">
          <h1 className="heading">join the community</h1>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            ratione ad perspiciatis quia beatae ex enim
          </p>
          <div className="buttons">
            <button className="btn">
              <FaTelegramPlane className="icon" /> Telegram
            </button>
            <button className="btn">
              <FaDiscord className="icon" />
              Discord
            </button>
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
