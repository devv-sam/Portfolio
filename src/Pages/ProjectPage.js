import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import projects from "../project-info.json";
import "../index.css";
// import SplitType from "split-type";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import gsap from "gsap";
import Lenis from "lenis";
import Preloader from "../Components/Preloader";
import NextProject from "../Components/Bridges/NextProject";
const ProjectPage = () => {
  const { id } = useParams();
  // Find the project by ID
  const project = projects.find((proj) => proj.id === parseInt(id));

  useEffect(() => {
    if (!project) {
      console.log("Project not found");
    }
  });

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const hdReveal = new SplitType(".rvl-hd", { types: "words" });
  //   const pgReveal = new SplitType(".rvl-pg", { types: "lines" });
  //   const objReveal = document.querySelectorAll(".obj-rvl");
  //   const scrReveal = new SplitType(".scr-rvl", { types: "lines" });
  //   const scrTrigger = document.querySelectorAll(".project-introduction");
  //   const problemReveal = new SplitType(".prb-rvl", { types: "lines" });
  //   const outcomeReveal = new SplitType(".out-rvl", { types: "lines" });
  //   const solutionReveal = new SplitType(".sol-rvl", { types: "lines" });
  //   const scrBannerReveal = document.querySelectorAll(".scr-rvl-banner");
  //   const scrBannerTrigger = document.querySelectorAll(".duo-banner");
  //   const problemTrigger = document.querySelector(".problem-section");
  //   const solutionTrigger = document.querySelector(".solution-section");
  //   const outcomeTrigger = document.querySelector(".outcome-section");

  //   gsap.to(hdReveal.words, {
  //     y: 0,
  //     stagger: 0.05,
  //     delay: 1,
  //     duration: 0.1,
  //   });
  //   gsap.from(pgReveal.lines, {
  //     y: 110,
  //     stagger: 0.05,
  //     delay: 1,
  //     duration: 1,
  //   });
  //   gsap.from(objReveal, {
  //     y: 50,
  //     delay: 1,
  //     duration: 1,
  //     opacity: 0,
  //   });
  //   gsap.from(scrReveal.lines, {
  //     scrollTrigger: {
  //       trigger: scrTrigger,
  //       start: "top +=500",
  //       end: "bottom +=50",
  //       scrub: false,
  //       markers: false,
  //     },
  //     y: 110,
  //     stagger: 0.05,
  //     duration: 1,
  //   });
  //   gsap.from(scrBannerReveal, {
  //     scrollTrigger: {
  //       trigger: scrBannerTrigger,
  //       start: "top +=700",
  //       end: " +=550",
  //       scrub: false,
  //       markers: false,
  //     },
  //     y: 100,
  //     stagger: 1,
  //     duration: 1,
  //     opacity: 0,
  //   });

  //   gsap.from(problemReveal.lines, {
  //     scrollTrigger: {
  //       trigger: problemTrigger,
  //       start: "top +=600",
  //       end: "bottom center",
  //       scrub: false,
  //       markers: false,
  //     },
  //     y: 110,
  //     stagger: 0.05,
  //     duration: 1,
  //   });

  //   gsap.from(solutionReveal.lines, {
  //     scrollTrigger: {
  //       trigger: solutionTrigger,
  //       start: "top +=600",
  //       end: "bottom center",
  //       scrub: false,
  //       markers: false,
  //     },
  //     y: 110,
  //     stagger: 0.05,
  //     duration: 1,
  //   });

  //   gsap.from(outcomeReveal.lines, {
  //     scrollTrigger: {
  //       trigger: outcomeTrigger,
  //       start: "top +=600",
  //       end: "bottom center",
  //       scrub: false,
  //       markers: false,
  //     },
  //     y: 110,
  //     stagger: 0.05,
  //     duration: 1,
  //   });
  // }, []);
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
      <section className="flex flex-col gap-12  my-12">
        <section className="mx-4 md:mx-8 lg:mx-16 xl:mx-24  project-page">
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
              <a
                href={project.externalLink}
                className="btn obj-rvl hover:shadow-lg transition-shadow duration-300"
              >
                Live Site{" "}
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

          <div className="duo-banner scr-rvl-banner">
            <img src={project.showcaseOne} alt="Showcase Banner"></img>
            <img src={project.showcaseTwo} alt="Showcase Banner"></img>
          </div>

          <div className="banners">
            <div className="banner-image scr-rvl-banner">
              <img src={project.bannerShowcaseOne} alt="Showcase Banner"></img>
            </div>
          </div>

          <div className="duo-banner scr-rvl-banner">
            <img src={project.showcaseThree} alt="Showcase Banner"></img>
            <img src={project.showcaseFour} alt="Showcase Banner"></img>
          </div>
        </section>
        <NextProject id={project.id} />
      </section>
    </>
  );
};

export default ProjectPage;
