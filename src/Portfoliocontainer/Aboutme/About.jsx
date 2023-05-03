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
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5> Client</h5>
                <small> 10+ All over Maharashtra </small>
              </article>

              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5> Projects </h5>
                <small> 10+ Completed</small>
              </article>

              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5> Experience</h5>
                <small> 1+ yeras Experience </small>
              </article>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate voluptatem ea, quidem reprehenderit ratione earum
                dolores quis. Cumque accusamus itaque mollitia reprehenderit?
                Ipsum est animi laboriosam eveniet, iusto soluta error?
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
