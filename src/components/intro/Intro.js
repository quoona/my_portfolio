import React from "react";
import "./intro.css";
import right from "../../images/right.jpg";
function Intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Nguyen Quoc Nam</h1>
          <h2 className="i-intro">I'm a</h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">IT Support</div>
              <div className="i-title-item">UI/UX</div>
              <div className="i-title-item">Photographer</div>
              <div className="i-title-item">Web Developer</div>
            </div>
          </div>
          <div className="i-desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern website.
          </div>
        </div>
      </div>
      <div className="i-right">
        <img src={right} className="i-img" alt="" />
      </div>
    </div>
  );
}

export default Intro;
