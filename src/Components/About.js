import React from "react";
import { useRef, useEffect } from "react";
import "../index.css";
import Nav from "./Nav";
import Preloader from "./Preloader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./Footer";
const About = ({ loadertext }) => {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    const cards = cardsRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    tl.from(title, {
      y: 30,
      duration: 0.6,
      opacity: 0,
      ease: "power2.out",
    }).from(cards, {
      y: 50,
      scale: 0.9,
      duration: 0.9,
      opacity: 0,
      ease: "power2.out",
      stagger: 0.2,
    });

    // Cleanup function
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, []);
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
              <h4>Frontend Developer from New York.</h4>
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
        <section className="experience-section">
          <div className="experience-wrapper">
            <div className="title-cv">
              <div className="title-container">
                <h3>Experience</h3>
                <p>
                  I have broad experience across various projects and
                  industries, offering adaptability and a strong skill set to
                  tackle any challenge
                </p>
              </div>
              <div className="cv-btn">
                <a href="#" className="btn">
                  <ion-icon name="download-outline"></ion-icon> Download CV
                </a>
              </div>
            </div>
            <div className="experience-container" ref={containerRef}>
              <h3 ref={titleRef}>Working Experience</h3>
              <div className="experience-content">
                <div
                  className="experience-card"
                  ref={(el) => (cardsRef.current[0] = el)}
                >
                  <div className="experience-icon">
                    <img src="./assets/pempower.svg" alt="project: empower" />
                  </div>
                  <div className="experience-info">
                    <h4>
                      Frontend Developer Intern at{" "}
                      <strong>Project: Empower</strong>
                    </h4>
                    <p>August 2024 - Present</p>
                  </div>
                </div>
                <div className="exp-card-seperator"></div>
                <div
                  className="experience-card"
                  ref={(el) => (cardsRef.current[1] = el)}
                >
                  <div className="experience-icon">
                    <img src="./assets/bloomberg.svg" alt="bloomberg" />
                  </div>
                  <div className="experience-info">
                    <h4>
                      Frontend Developer Intern at <strong>Bloomberg</strong>
                    </h4>
                    <p>December 2023 - May 2024</p>
                  </div>
                </div>
                <div className="exp-card-seperator"></div>
                <div
                  className="experience-card"
                  ref={(el) => (cardsRef.current[2] = el)}
                >
                  <div className="experience-icon">
                    <img src="./assets/dwc.svg" alt="dwc hs" />
                  </div>
                  <div className="experience-info">
                    <h4>
                      Frontend Developer Intern at <strong>DWC HS</strong>
                    </h4>
                    <p>December 2023 - May 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </section>
    </>
  );
};

export default About;
