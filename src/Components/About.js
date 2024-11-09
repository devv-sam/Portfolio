import React from "react";
import { useRef, useEffect } from "react";
import "../index.css";
import Nav from "./Nav";
import Preloader from "./Preloader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./Footer";
import SplitType from "split-type";

const About = ({ loadertext }) => {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const aboutWrapperRef = useRef(null);
  const aboutImageRef = useRef(null);
  const aboutContentRef = useRef(null);

  useEffect(() => {
    const aboutWrapper = aboutWrapperRef.current;
    const aboutImage = aboutImageRef.current;
    const aboutContent = aboutContentRef.current;
    const container = containerRef.current;
    const title = titleRef.current;
    const cards = cardsRef.current;
    const scrReveal = new SplitType(".scr-rvl", { types: "lines" });
    const scrTrigger = document.querySelectorAll(".bio-section");

    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
    });

    // About wrapper animation
    // tl.from(aboutWrapper, {
    //   autoAlpha: 0,
    //   duration: 1,
    //   ease: "power3.out",
    //   delay: 3.9,
    // })
    //   .from(
    //     aboutImage,
    //     {
    //       y: -50,
    //       autoAlpha: 0,
    //       duration: 1,
    //       ease: "power3.out",
    //     },
    //     "-=0.5"
    //   )
    //   .from(
    //     aboutContent,
    //     {
    //       y: 50,
    //       autoAlpha: 0,
    //       duration: 1,
    //       ease: "power3.out",
    //     },
    //     "-=0.7"
    //   );

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

    gsap.from(scrReveal.lines, {
      scrollTrigger: {
        trigger: scrTrigger,
        start: "top +=500",
        end: "bottom +=50",
        scrub: false,
        markers: false,
      },
      y: 110,
      stagger: 0.05,
      duration: 0.6,
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
        <div className="about-wrapper" ref={aboutWrapperRef}>
          <div className="about-container">
            <h3>
              <strong>S</strong>occerphile, <strong>A</strong>udacious and{" "}
              <storng>M</storng>elomaniac...
            </h3>
            <p>
              Three words that describe me outside my work. Get to know a few
              things that drive my craft. My experiences, skills and interests.
            </p>
          </div>
        </div>
        <section className="bio-section">
          <h3 className="scr-rvl">
            Hi! 👋 I'm Sam, a Frontend Developer from New York. I design with{" "}
            <strong>Figma</strong> and develop with <strong>React</strong> along
            with other developer tools.
          </h3>
        </section>
        <section className="story-section">
          <h3>Paths I've taken on my developer journey...</h3>
          <div className="story-content">
            <div className="story-item">
              <h3>
                01. — Computers and tech have captivated me since I was a kid,
                shaping my academic interests and hobbies.
              </h3>
            </div>
            <div className="story-item">
              <h3>
                02. — Started formal CS education in 10th grade, though my real
                learning happened beyond the classroom.
              </h3>
            </div>
            <div className="story-item">
              <h3>
                03. — Built websites for local businesses and my school using
                platforms like Framer and GoDaddy.
              </h3>
            </div>
            <div className="story-item">
              <h3>
                04. — Now pursuing CS in college as a Questbridge National
                College Match finalist.
              </h3>
            </div>
            {/* <div className="story-item">
              <h3>Accolades and Accomplishments. </h3>
              <p>01. — Questbridge National College Match Finalist</p>
              <p>02. — Questbridge College Prep Scholar</p>
              <p>03. — 2024 Palazzo Strozzi Essay Award Recipient</p>
              <p>04. — CodeNation-Bloomberg Hackathon Winner</p>
            </div> */}
          </div>
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
              <h3 ref={titleRef}>Recent Work Experience</h3>
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
                      CodeNation Fellowship 1 at <strong>Bloomberg</strong>
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
