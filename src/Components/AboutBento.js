import React, { useState, useEffect } from "react";
import { Marquee } from "@devnomic/marquee";
import SpotifyNowPlaying from "./spotify/SpotifyNowPlaying.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Bento = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  useEffect(() => {
    const animatedElements = document.querySelectorAll(".gsap-animate");

    gsap.set(animatedElements, { y: 50, opacity: 0 });

    animatedElements.forEach((element, index) => {
      gsap.to(element, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
        delay: index * 0.1,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [expandedSection]);

  const expandSection = (section) => {
    setExpandedSection(section);
  };

  const closeExpandedSection = () => {
    setExpandedSection(null);
  };
  const backButton = (
    <button onClick={closeExpandedSection} className="btn">
      {/* Placeholder for back arrow SVG */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#E5E5E5" />
        <path
          d="M19 12H5"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 19L5 12L12 5"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
  const renderDefaultView = () => (
    <section className="bento-grid">
      <div className="title-txt-stack">
        <div
          className="title-bx gsap-animate"
          onClick={() => expandSection("about")}
        >
          <div className="title-stack">
            <h3>About Me</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div
          className="skillset-bx gsap-animate"
          onClick={() => expandSection("skills")}
        >
          <div className="skillset-stack">
            <h3>Stack</h3>
            <Marquee fade={true} pauseOnHover={true}>
              <div>
                <img src="./assets/react.svg" alt="stack logo"></img>
              </div>
              <div>
                <img src="./assets/js.svg" alt="stack logo"></img>
              </div>
              <div>
                <img src="./assets/html.svg" alt="stack logo"></img>
              </div>
              <div>
                <img src="./assets/css.svg" alt="stack logo"></img>
              </div>
              <div>
                <img src="./assets/figma.svg" alt="stack logo"></img>
              </div>
              <div>
                <img src="./assets/framer.svg" alt="stack logo"></img>
              </div>
            </Marquee>
          </div>
        </div>
      </div>

      <div
        className="experience-bx gsap-animate"
        onClick={() => expandSection("experience")}
      >
        <div className="experience-top">
          <h3>Experience</h3>
          <a href="#">
            <img src="./assets/arrow.svg" alt="arrow svg"></img>
          </a>
        </div>
        <div className="exp-stack">
          <div className="job">
            <div className="job-desc">
              <h4 className="job-title">Project Empower</h4>{" "}
              <div className="dash-dark"></div>{" "}
              <p className="role">Frontend Developer</p>
            </div>

            <p className="duration">AUG 2024 - PRESENT</p>
            <p className="desc">Managed modern frontend projects with peers.</p>
          </div>
          <div className="job">
            <div className="job-desc">
              <h4 className="job-title">DWC HS</h4>{" "}
              <div className="dash-dark"></div>{" "}
              <p className="role">Frontend Developer</p>
            </div>

            <p className="duration">DEC 2023 - MAY 2024</p>
            <p className="desc">
              {" "}
              Enhanced school websites with web development skills to improve
              user experience.
            </p>
          </div>
          <div className="job">
            <div className="job-desc">
              <h4 className="job-title">Bloomberg</h4>{" "}
              <div className="dash-dark"></div>{" "}
              <p className="role">CN Fellowship 1 Intern</p>
            </div>

            <p className="duration">NOV 2023 - MAY 2024</p>
            <p className="desc">
              Completed coursework focused on career readiness and professional
              skills.
            </p>
          </div>
        </div>
      </div>

      <div className="image-extra-stack">
        <div className="image-bx ">
          <img src="./assets/profile-image.png" alt="Sam's Profile" />
        </div>
        <div
          className="external-bx gsap-animate"
          onClick={() => expandSection("spotify")}
        >
          <SpotifyNowPlaying />
        </div>
      </div>
    </section>
  );

  const renderExpandedSection = () => {
    switch (expandedSection) {
      case "about":
        return (
          <div className="expanded-section">
            {backButton}
            <h2>About Me</h2>
            <p>
              Hi, I'm Sam! I'm a passionate frontend developer with a keen eye
              for design and a love for creating seamless user experiences. When
              I'm not coding, you can find me exploring new coffee shops,
              practicing yoga, or diving into a good sci-fi novel.
            </p>
            <p>
              My journey in tech started when I built my first website for a
              local non-profit. Since then, I've been on a continuous learning
              path, always eager to explore new technologies and methodologies
              in the ever-evolving world of web development.
            </p>
          </div>
        );
      case "skills":
        return (
          <div className="expanded-section">
            {backButton}
            <h2>My Tech Stack</h2>
            <ul>
              <li>React.js - Advanced</li>
              <li>JavaScript (ES6+) - Expert</li>
              <li>HTML5 & CSS3 - Expert</li>
              <li>TypeScript - Intermediate</li>
              <li>Node.js - Intermediate</li>
              <li>GraphQL - Beginner</li>
              <li>Figma - Advanced</li>
              <li>Git & GitHub - Advanced</li>
            </ul>
            <p>
              I'm always expanding my skillset. Currently, I'm diving deeper
              into WebGL and Three.js for creating immersive 3D experiences on
              the web.
            </p>
          </div>
        );
      case "experience":
        return (
          <div className="expanded-section">
            {backButton}
            <h2>Professional Experience</h2>
            <div className="detailed-experience">
              <h3>Project Empower - Frontend Developer</h3>
              <p>AUG 2024 - PRESENT</p>
              <ul>
                <li>
                  Lead frontend development for a suite of accessibility-focused
                  web applications
                </li>
                <li>
                  Implemented responsive designs using React and Tailwind CSS
                </li>
                <li>
                  Collaborated with UX designers to create intuitive user
                  interfaces
                </li>
                <li>Mentored junior developers and conducted code reviews</li>
              </ul>
              <h3>DWC HS - Frontend Developer</h3>
              <p>DEC 2023 - MAY 2024</p>
              <ul>
                <li>
                  Redesigned and developed the school's main website, improving
                  load times by 40%
                </li>
                <li>
                  Created an interactive virtual tour feature using Three.js
                </li>
                <li>
                  Implemented a content management system for easy updates by
                  non-technical staff
                </li>
              </ul>
              <h3>Bloomberg - CN Fellowship 1 Intern</h3>
              <p>NOV 2023 - MAY 2024</p>
              <ul>
                <li>
                  Participated in workshops on financial technology and data
                  visualization
                </li>
                <li>
                  Developed a prototype for a stock market analysis tool using
                  Bloomberg API
                </li>
                <li>
                  Presented project findings to senior leadership, receiving
                  commendation for innovation
                </li>
              </ul>
            </div>
          </div>
        );
      case "spotify":
        return (
          <div className="expanded-section">
            {backButton}
            <h2>My Music Journey</h2>
            <p>
              Music has always been a huge part of my life and work. It helps me
              focus, sparks creativity, and often influences my design choices.
            </p>
            <h3>Current Favorites:</h3>
            <ul>
              <li>Genre: Indie Electronic</li>
              <li>Artist: Bonobo</li>
              <li>Album: "Fragments" by Bonobo</li>
            </ul>
            <p>Check out what I'm listening to right now:</p>
            <SpotifyNowPlaying />
            <p>
              Fun fact: I often create coding playlists that match the "mood" of
              the project I'm working on!
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bx">
      {expandedSection ? renderExpandedSection() : renderDefaultView()}
    </div>
  );
};

export default Bento;
