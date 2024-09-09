import React from "react";
import { GiStarShuriken } from "react-icons/gi";
import firstIcon from "../Assests/icon-1.png";
import secondIcon from "../Assests/icon-2.png";
import thirdIcon from "../Assests/icon-3.png";
import homeImage from "../Assests/home-end.png";
import "./Home.css";
function Home() {
  return (
    <section
      id="home"
      className="home"
      data-aos="zoom-in-up"
      data-aos-duration="1000">
      <div className="for-home ">
        <div className="left-side">
          <p className="iconAndPara">
            <GiStarShuriken className="icon" />
            <span className="line"></span>
            NEXT TOKEN
          </p>
          <h1 className="heading">
            Start Your Philanthropic Journey With Your Ne
            <span className="ex-color">X</span>t
          </h1>
          <p className="for-text">
            “The Most Generous Crypto” aims to redefine generosity in the
            digital age by creating a community-driven cryptocurrency that
            empowers individuals and organizations to make impactful
            contributions easily and transparently. Our mission is to build a
            financial ecosystem where wealth distribution is fair, accessible,
            and empowering for all, enabling anyone to support causes they care
            about and drive positive global change. Through innovative
            blockchain technology, we are committed to making giving easy,
            secure, and rewarding, fostering a culture of kindness,
            accountability, and social responsibility.
          </p>
          <div className="for-btn">
            <button className="my-btn">Buy $YX</button>
          </div>

          <div className="support">
            <p className="text-sup">Supported</p>

            <img
              src={firstIcon}
              alt="first icon"
              className="img-fluid for-image"
            />

            <img
              src={secondIcon}
              alt="second icon"
              className="img-fluid for-image"
            />

            <img
              src={thirdIcon}
              alt="third icon"
              className="img-fluid for-image"
            />
          </div>
        </div>
        <div className="right-side">
          <div className="for-image">
            <img src={homeImage} alt="home" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
