import React, { useEffect, useRef } from "react";
import "../index.css";
import Nav from "../Components/Nav";
import Project from "../Components/Project";
import "lenis/dist/lenis.css";
import SplitType from "split-type";
import gsap from "gsap";
import Preloader from "../Components/Preloader";
const Portfolio = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const hdReveal = new SplitType(".rvl-hd", { types: "words" });
    const pgReveal = new SplitType(".rvl-pg", { types: "lines" });

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.to(hdReveal.words, {
      y: 0,
      stagger: 0.05,
      duration: 0.1,
    }).from(
      pgReveal.lines,
      {
        y: 110,
        stagger: 0.05,
        duration: 1,
      },
      "-=0.5"
    );

    // Start the animation after the preloader
    tl.delay(3.9);
  }, []);

  return (
    <>
      <Preloader loadertext={"My digital playground."} />
      <Nav />
      <section className="project-canvas mx-4 md:mx-8 lg:mx-16 xl:mx-24">
        <div className="project-mainframe">
          <div className="header" ref={headerRef}>
            <h3 className="rvl-hd">
              I've been bringing ideas to life through case studies and client
              projects.
            </h3>
            <p className="rvl-pg">
              From concept to execution, each project tells a story of
              innovation, creativity, and collaboration.
            </p>
          </div>
          <div className="cl-wrap">
            <div className="project-grid-header">
              <h3 className="rvl-hd">Featured Projects</h3>
              <span className="rvl-pg">(06)</span>
            </div>
            <div className="row">
              <Project id={1} />
              <Project id={2} />
            </div>
            <div className="row">
              <Project id={1} />
              <Project id={2} />
            </div>
            <div className="row">
              <Project id={1} />
              <Project id={2} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
