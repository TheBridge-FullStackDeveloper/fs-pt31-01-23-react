import React from "react";
import "./Header.css";
import studentImg from "../../assets/students.jpg"

const Header = ({ title, subheading, paragraph, button }) => {
  return (
    <header className="container">
      <div className="parteIzquierda">
        <h1 className="title">{title}</h1>
        <h2 className="subheading">{subheading}</h2>
        <p className="paragraph">{paragraph}</p>
        <button className="button">{button}</button>
      </div>
      <div className="parteDerecha">
        <div className="image-container">
          <img src={studentImg} alt="students" className="student-image"></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
