import React from "react";
import "../index.css";
import Nav from "./Nav";
import Preloader from "./Preloader";
const About = ({ loadertext }) => {
  return (
    <>
      <Preloader loadertext={loadertext} />
      <section className="about-section">
        <Nav />
        <div className="about-wrapper">
          <div className="about-container">
            <div className="about-image">
              <img src="./assets/profile-image.png" alt="me" />
            </div>
            <div className="about-content">
              <h3>Samuel Yeboah-Asi</h3>
              <h4>Frontend Developer based in New York.</h4>
              <p>Building cutting edge tools for humans.</p>
              <div className="icons">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/samuel-yeboah-asi-82b28a2b9/"
                  className="link-icon"
                >
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                <a
                  target="_blank"
                  href="mailto:samuelydev@gmail.com?subject=Collaboration%20Inquiry"
                  className="link-icon"
                >
                  <ion-icon name="mail-outline"></ion-icon>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/devv-sam?tab=overview&from=2024-08-01&to=2024-08-12"
                  className="link-icon"
                >
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
        <section className="bio-section">
          <h3>
            I'm a frontend developer with over 2 years of experience in crafting
            responsive and dynamic web interfaces using HTML, CSS, JavaScript,
            and libraries like React and GSAP. I also bring ideas to life with
            thoughtful UI/UX design in Figma. When I'm not immersed in code,
            you’ll find me on the soccer field or unwinding to classical music.
          </h3>
        </section>
        <section className="stats-section"></section>
      </section>
    </>
  );
};

export default About;
