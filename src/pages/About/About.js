import "./About.scss";
import aboutLogo from "../../assets/images/about-logos.png";
import meImage from "../../assets/images/IMG_3061.jpg";
import linkedin from "../../assets/logos/LI-In-Bug.png";
import github from "../../assets/logos/github-mark.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="about__container">
          <div className="about__top">
            <div className="about__top-text">
              <h4>
                bookSquirrel is a reading list app that was created with React,
                using Axios as the front-end library for making Prisma ORM calls
                to the Express back-end, and a PostgreSQL Database hosted on
                Supabase. Front-end styling using SCSS, and books data from
                Google Books API.
              </h4>
            </div>
            <div className="about__top-logos">
              <img src={aboutLogo} className="about__logos"></img>
            </div>
          </div>
          <div className="about__bottom">
            <div className="about__bottom-image-container">
              <h3 className="about__bottom-name">
                bookSquirrel was created by Michael Snowdon
              </h3>
              <div className="about__bottom-image">
                <img src={meImage} className="about__bottom-image-me"></img>
              </div>
              <div className="about__bottom-logos-container">
                <a
                  href="https://www.linkedin.com/in/michaelesnowdon/"
                  target="_blank"
                >
                  <img src={linkedin} className="about__bottom-logo"></img>
                </a>
                <a href="https://github.com/michaelesnowdon/" target="_blank">
                  <img src={github} className="about__bottom-logo"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
