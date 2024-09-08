import React from "react";
import CharityImage from "../Assests/charty.png";
import "./Charity.css";

function Charity() {
  return (
    <div className="charity" data-aos="zoom-in-up" data-aos-duration="1000">
      <div className="for-charity">
        <div className="left-side">
          <div className="for-image">
            <img src={CharityImage} alt="charity" className="img-fluid" />
          </div>
        </div>
        <div className="right-side">
          <h1 className="heading">Charity</h1>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            ipsam modi voluptatum, ipsa fuga neque sequi temporibus, dolor odio,
            veritatis non quibusdam illum delectus quidem commodi odit quaerat
            vitae? Blanditiis!Lorem Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. A soluta asperiores delectus nam at quidem magni,
            suscipit voluptatum pariatur aliquid beatae in officiis numquam
            veniam consectetur expedita quasi placeat. Vero Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Laborum dolorum consequuntur,
            ea aut omnis esse voluptatibus? Rerum eum ducimus odio
          </p>
          <p className="second-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            repellat rerum commodi soluta eius, quo culpa nobis omnis! Vel
            laborum nam quaerat ut? Tot
          </p>
        </div>
      </div>
    </div>
  );
}

export default Charity;
