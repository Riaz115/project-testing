import React from "react";
import aboutImage from "../Assests/about.png";
import "./About.css";
import { FaCircleNotch } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { FiCircle } from "react-icons/fi";

function About() {
  return (
    <div
      className="about"
      id="about"
      data-aos="zoom-in-up"
      data-aos-duration="1000">
      <div className="for-about">
        <div className="left-side ">
          <h1 className="heading">TOKENOMICS</h1>
          <p className="about-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit enim
            ab adipisci consectetur veniam eius possimus itaque. Iste, odio,
            quae ab dolore illum ipsum dignissimos ad saepe tempora rem quidem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            tenetur et, velit natus explicabo in nisi eaque iste, voluptatum
            molestias quo libero corrupti? Harum nam non nulla ab ullam illum!
          </p>
          <p className="new-para">
            <FaCircleNotch className="circle-one" />
            Dev's wallet will have a maximum of 10%, anything earned over that
            will be at Dev's Discretion.
          </p>
          <p className="new-para">
            <FaRegCircle className="circle-two" />
            Dev's wallet will have a maximum of 10%, anything earned over that
            will be at Dev's Discretion.
          </p>
          <p className="new-para">
            <FiCircle className="circle-three" />
            Dev's wallet will have a maximum of 10%, anything earned over that
            will be at Dev's Discretion.
          </p>
          <p className="new-para">
            <FiCircle className="circle-four" />
            Dev's wallet will have a maximum of 10%, anything earned over that
            will be at Dev's Discretion.
          </p>
        </div>
        <div className="right-side ">
          <div className="for-image">
            <img src={aboutImage} alt="about img" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
