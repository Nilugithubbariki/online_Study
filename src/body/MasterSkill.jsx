import React from "react";
import "./MasterSkill.css";
import "../Style.css";
const MasterSkill = () => {
  return (
    <div>
      <div className="mainContainer">
        <div className="leftContainer">
          <p style={{ color: "red" }}>What's New</p>
          <h3>Master the skills to drive your career</h3>
          <p>
            Lorem Ipsum dolor sit amet,consectetur adipiscing elit.Eget aenean
            accumsan accumsan bibendum
            <br />
            gravida maecenas augue elementum et neque.Suspendisse imperdiet.
          </p>
          <div className="boxStyle">
            <div className="gridboxStyle">
              ContentStay motivated with
              <br /> engaging instuctors
            </div>
            <div className="gridboxStyle">
              Keep up with in the latest in
              <br /> cloud
            </div>
            <div className="gridboxStyle">
              {" "}
              Get certified with 100+
              <br /> certification courses
            </div>
            <div className="gridboxStyle">
              Build skills your way,from labs
              <br /> to courses
            </div>
          </div>
          <img
            className="imageTwoStyle"
            src="https://www.mzuonline.in/images/mzu-mid-img1.png"
            alt="logo"
          />
        </div>
        {/* <div className="rightContainer">
          <img
            className="midimgStyle"
            src="https://www.mzuonline.in/images/mzu-mid-img1.png"
            alt="image_logo"
          />
        </div> */}
      </div>
    </div>
  );
};

export default MasterSkill;
