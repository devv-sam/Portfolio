import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import projects from "../project-info.json";
import "../index.css";
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

  const lenis = new Lenis();

  // lenis.on("scroll", (e) => {
  //   console.log(e);
  // });

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
                target="_blank"
                rel="noreferrer"
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
          <div className="banner-image obj-rvl shadow-md hover:shadow-lg transition-shadow duration-300">
            <video
              src={project.bannerImage}
              alt="Banner"
              autoPlay
              loop
              muted
            ></video>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 grid-flow-row gap-4 md:gap-6 lg:gap-8 w-full">
            <img
              src={project.showcaseOne}
              alt="Showcase Banner"
              className="w-full h-auto object-cover  col-span-2 md:col-span-1 rounded-lg "
            />
            <img
              src={project.showcaseTwo}
              alt="Showcase Banner"
              className="w-full h-auto object-cover  col-span-2 md:col-span-1 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg"
            />
          </div>

          <div className="my-4 md:my-6 lg:my-8  ">
            <video
              src={project.videoShowcase}
              autoPlay
              muted
              loop
              alt="Feature Video"
              className="w-full h-auto object-cover shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 grid-flow-row gap-4 md:gap-6 lg:gap-8 w-full ">
            <img
              src={project.showcaseThree}
              alt="Showcase Banner"
              className="w-full h-auto object-cover  col-span-2 md:col-span-1  shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg"
            />
            <img
              src={project.showcaseFour}
              alt="Showcase Banner"
              className="w-full h-auto object-cover  col-span-2 md:col-span-1  shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg"
            />
          </div>
        </section>
        <NextProject id={project.id} />
      </section>
    </>
  );
};

export default ProjectPage;
