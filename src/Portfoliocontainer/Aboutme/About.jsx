import React from "react";
import "./about.css";
import ME from "../../Assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      
      <h5>Get To Know</h5>
      <h2>About ME</h2>

      <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>
          </div>

          <div className="about__content">

             <p>
                Hi, I'm <span style={{color:'#4db5ff'}}>Rushikesh Kolgatram</span> from Chh. Sambhajinagar, Maharashtra, India.
                <br></br>
                <br></br>
                I currently pursuing my graduation in Bacheloar Of Technology from <span style = {{color:'#4db5ff'}}>Information Technology </span> Branch as a <span style={{color:'#4db5ff'}}>Final year</span> student.
                <br></br>
                <br></br>
                As a skilled frontend developer, I possess a keen eye for design and a deep understanding of web technologies. 
                My expertise lies in HTML, CSS, and JavaScript, enabling me to translate designs into functional and responsive websites. 

              </p>

            

              <a href="#contact" className="btn btn-primary">
                Let's Talk
              </a>
          </div>
        </div>
    </section>
  );
};

export default About;
