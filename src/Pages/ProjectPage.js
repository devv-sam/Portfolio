import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import projects from "../project-info.json";
import "../index.css";
import Nav from "../Components/Nav";
import Preloader from "../Components/Preloader";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Lenis from "lenis";
import Footer from "../Components/Footer";
const ProjectPage = () => {
  const { id } = useParams();
  // Find the project by ID
  const project = projects.find((proj) => proj.id === parseInt(id));

  useEffect(() => {
    if (!project) {
      console.log("Project not found");
    }
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const hdReveal = new SplitType(".rvl-hd", { types: "words" });
    const pgReveal = new SplitType(".rvl-pg", { types: "lines" });
    const objReveal = document.querySelectorAll(".obj-rvl");
    const scrReveal = new SplitType(".scr-rvl", { types: "lines" });
    const scrTrigger = document.querySelectorAll(".project-introduction");
    const problemReveal = new SplitType(".prb-rvl", { types: "lines" });
    const outcomeReveal = new SplitType(".out-rvl", { types: "lines" });
    const solutionReveal = new SplitType(".sol-rvl", { types: "lines" });
    const scrBannerReveal = document.querySelectorAll(".scr-rvl-banner");
    const scrBannerTrigger = document.querySelectorAll(".duo-banner");
    const problemTrigger = document.querySelector(".problem-section");
    const solutionTrigger = document.querySelector(".solution-section");
    const outcomeTrigger = document.querySelector(".outcome-section");

    gsap.to(hdReveal.words, {
      y: 0,
      stagger: 0.05,
      delay: 3.9,
      duration: 0.1,
    });
    gsap.from(pgReveal.lines, {
      y: 110,
      stagger: 0.05,
      delay: 3.9,
      duration: 1,
    });
    gsap.from(objReveal, {
      y: 50,
      delay: 3.9,
      duration: 1,
      opacity: 0,
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
      duration: 1,
    });
    gsap.from(scrBannerReveal, {
      scrollTrigger: {
        trigger: scrBannerTrigger,
        start: "top +=700",
        end: " +=550",
        scrub: false,
        markers: false,
      },
      y: 100,
      stagger: 1,
      duration: 1,
      opacity: 0,
    });

    gsap.from(problemReveal.lines, {
      scrollTrigger: {
        trigger: problemTrigger,
        start: "top +=600",
        end: "bottom center",
        scrub: false,
        markers: false,
      },
      y: 110,
      stagger: 0.05,
      duration: 1,
    });

    gsap.from(solutionReveal.lines, {
      scrollTrigger: {
        trigger: solutionTrigger,
        start: "top +=600",
        end: "bottom center",
        scrub: false,
        markers: false,
      },
      y: 110,
      stagger: 0.05,
      duration: 1,
    });

    gsap.from(outcomeReveal.lines, {
      scrollTrigger: {
        trigger: outcomeTrigger,
        start: "top +=600",
        end: "bottom center",
        scrub: false,
        markers: false,
      },
      y: 110,
      stagger: 0.05,
      duration: 1,
    });
  }, []);
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return (
    <>
      <Preloader loadertext={project.name} />

      <section className="project-page">
        <Nav />
        <div className="row gapped">
          <div className="project-info">
            <div className="project-stats">
              <h2 className="rvl-hd">{project.name}</h2>
              <h4 className="rvl-pg">Project Summary</h4>
            </div>
            <div className="project-duration">
              <div className="duration-design">
                <h3 className="rvl-hd">{project.duration.design}</h3>
                <p className="rvl-pg">Design</p>
              </div>
              <div className="duration-development">
                <h3 className="rvl-hd">{project.duration.development}</h3>
                <p className="rvl-pg">Development</p>
              </div>
            </div>
            <a href={project.externalLink} className="btn obj-rvl">
              Visit Site{" "}
              <ion-icon name="open-outline" className="icon-ex"></ion-icon>
            </a>
          </div>
          <div className="project-description">
            <p className="rvl-pg">{project.description}</p>
            <div className="tags">
              <div className="tag-div obj-rvl">{project.tags[0]}</div>
              <div className="tag-div obj-rvl">{project.tags[1]}</div>
            </div>
          </div>
        </div>
        <div className="banner-image obj-rvl">
          <img src={project.bannerImage} alt="Banner"></img>
        </div>

        <section className="project-introduction">
          <div className="content-wrap">
            <div className="center-intro">
              <div className="introduction">
                <h4 className="h4-lt scr-rvl">INTRODUCTION</h4>
                <p className="p-lt scr-rvl">{project.introduction}</p>
              </div>
            </div>
            <div className="row gap-jc">
              <div className="role-tools">
                <div className="role">
                  <h4 className="h4-lt scr-rvl">MY ROLE</h4>
                  <p className="p-lt scr-rvl">{project.role}</p>
                </div>
                <div className="tools">
                  <h4 className="h4-lt scr-rvl">TOOLS</h4>
                  <p className="p-lt scr-rvl">{project.tools}</p>
                </div>
              </div>
              <div className="client-duration">
                <div className="client">
                  <h4 className="h4-lt scr-rvl">CLIENT</h4>
                  <p className="p-lt scr-rvl">{project.client}</p>
                </div>
                <div className="duration">
                  <h4 className="h4-lt scr-rvl">DURATION</h4>
                  <p className="p-lt scr-rvl">{project.totalDuration}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="duo-banner scr-rvl-banner">
          <img src={project.showcaseOne} alt="Showcase Banner"></img>
          <img src={project.showcaseTwo} alt="Showcase Banner"></img>
        </div>
        <div className="main-wrap">
          <section className="problem-section content-wrap">
            <div className="problem">
              <h4 className="h4-lt prb-rvl">THE PROBLEM</h4>
              <p className="p-lt prb-rvl">{project.problem}</p>
            </div>
          </section>
        </div>
        <div className="banners">
          <div className="banner-image scr-rvl-banner">
            <img src={project.bannerShowcaseOne} alt="Showcase Banner"></img>
          </div>
        </div>
        <div className="main-wrap">
          <section className="solution-section content-wrap">
            <div className="solution">
              <h4 className="h4-lt sol-rvl">THE SOLUTION</h4>
              <p className="p-lt sol-rvl">{project.solution}</p>
            </div>
          </section>
        </div>

        <div className="duo-banner scr-rvl-banner">
          <img src={project.showcaseThree} alt="Showcase Banner"></img>
          <img src={project.showcaseFour} alt="Showcase Banner"></img>
        </div>
        <div className="main-wrap">
          <section className="outcome-section content-wrap">
            <div className="outcome">
              <h4 className="h4-lt out-rvl">THE OUTCOME</h4>
              <p className="p-lt out-rvl">{project.outcome}</p>
            </div>
          </section>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default ProjectPage;
