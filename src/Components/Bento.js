import React from "react";
import { useEffect } from "react";
import "../index.css";
import { Marquee } from "@devnomic/marquee";
import SpotifyNowPlaying from "./spotify/SpotifyNowPlaying.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Outlet, Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Bento = () => {
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
        delay: index * 0.1, // This creates the stagger effect
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <>
      <div className="bx">
        <section className="bento-grid">
          <div className="title-txt-stack">
            <Link to="/about">
              <div className="title-bx gsap-animate">
                <div className="title-stack">
                  <h3>About Me</h3>

                  <p>
                    Frontend developer with <strong>2+ years</strong> of
                    experience in <strong>HTML</strong>, <strong>CSS</strong>,{" "}
                    <strong>JavaScript</strong>, <strong>React</strong>, and{" "}
                    <strong>GSAP</strong>. I also design intuitive interfaces
                    with
                    <strong> Figma</strong>. Outside of coding, I enjoy soccer
                    and classical music.
                  </p>
                </div>
              </div>
            </Link>
            <div className="skillset-bx gsap-animate">
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

          <div className="experience-bx gsap-animate">
            <div className="experience-top">
              <h3>Experience</h3>
              <a href="#">
                <img src="./assets/arrow.svg" alt="arrow svg"></img>
              </a>
            </div>
            <div className="exp-stack">
              <div className="job">
                <div className="job-desc">
                  <h4 className="job-title">Project: Empower</h4>{" "}
                  <div className="dash-dark"></div>{" "}
                  <p className="role">Frontend Developer</p>
                </div>

                <p className="duration">AUG 2024 - PRESENT</p>
                <p className="desc">
                  Building web applications with a team to support low-income,
                  first-generation students.
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
                  Completed coursework focused on career readiness and
                  professional skills.
                </p>
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
                  Enhanced school websites with web development skills to
                  improve user experience.
                </p>
              </div>
            </div>
          </div>

          <div className="image-extra-stack">
            <div className="image-bx ">
              <img src="./assets/profile-image.png" alt="Sam's Profile" />
            </div>
            <div className="external-bx gsap-animate">
              <SpotifyNowPlaying />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Bento;
