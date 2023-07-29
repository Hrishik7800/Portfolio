import React from "react";
import "./Profile.css";
import IMG1 from "../../Assets/portfolio1.jpg";
import IMG2 from "../../Assets/portfolio2.jpg";
import IMG5 from "../../Assets/portfolio5.png";

const Profile = () => {
  return (
    <section id="portfolio">
      <h5> My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>TechLearn</h3>
          <p>
            • TechLearn is an educational website which provides an online learning and teaching platform,
            it provides interactive content to make learning fun and effective.
            <br></br>
            <br></br> 
            • A wide range of subjects and topics catering to various age groups and
            interests.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Hrishik7800/TechLearn"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="techlearner.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>TextUtils</h3>
          <p>
          • It provides users with a wide range of text manipulation and analysis tools.
          <br></br>
          <br></br>
          • The project offers an intuitive user interface that allows user to interact with their text and apply various operations for text processing and analysis.
          </p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Hrishik7800/TextUtils-React" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dribbble.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Profile;
