import React from "react";
import "./about.css";
import cafe from "../../images/cafe.jpg";
function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={cafe} className="a-img" alt="" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I’m the fourth year student of HCMUNRE University
        </p>
        <h1 className="a-title">My Skill</h1>
        <p className="a-sub">Hyper Text Markup Language (HTML)</p>
        <p className="a-sub">Cascading Style Sheet (CSS)</p>
        <p className="a-sub">Javascript (JS)</p>
        <p className="a-sub">React</p>
      </div>
    </div>
  );
}

export default About;
