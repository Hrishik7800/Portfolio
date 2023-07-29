import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../Assets/me.png";
import HeaderSocial from "./headerSocials";

const header = () => {
  return (
    
      <section>
        <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Rushikesh Kolgatram</h1>
        <h5 className="Text-light">Fullstack Developer</h5>
        <CTA />
        <div className="mypic">
          <HeaderSocial />
          <div className="me">
            <img src={ME} alt="me"/>
          </div>
          <a href="#contact" className="scroll_down">
            {" "}
            Scroll Down{" "}
          </a>
        </div>
      </div>
      </header>
      </section>
    
  );
};

export default header;
