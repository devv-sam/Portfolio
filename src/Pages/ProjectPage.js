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

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Check if project is active
  const isActive = project?.active !== false; // Default to true if active property is missing

  return (
    <>
      <Preloader loadertext={project.name} />
      <section className="flex flex-col gap-12 my-12">
        {isActive ? (
          <section className="mx-4 md:mx-8 lg:mx-16 xl:mx-24 project-page">
            <div className="row gapped">
              <div className="project-info">
                <div className="project-stats">
                  <h2 className="rvl-hd">{project.name}</h2>
                  <h4 className="rvl-pg">Project Summary</h4>
                </div>
                <div className="project-duration">
                  <div className="duration-design">
                    {project.duration.design && (
                      <>
                        <h3 className="rvl-hd">{project.duration.design}</h3>
                        <p className="rvl-pg">Design</p>
                      </>
                    )}
                  </div>
                  <div className="duration-development">
                    {project.duration.development && (
                      <>
                        <h3 className="rvl-hd">
                          {project.duration.development}
                        </h3>
                        <p className="rvl-pg">Development</p>
                      </>
                    )}
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
                {project?.description && (
                  <p className="rvl-pg">{project.description}</p>
                )}
                <div className="tags">
                  {project?.tags &&
                    project.tags.map((tag, index) => (
                      <p key={index} className="rvl-pg tag-div">
                        {tag}
                      </p>
                    ))}
                </div>
              </div>
            </div>
            <div className="banner-image obj-rvl shadow-md hover:shadow-lg transition-shadow duration-300">
              {project?.bannerImage && (
                <video
                  src={project.bannerImage}
                  alt="Banner"
                  autoPlay
                  loop
                  muted
                ></video>
              )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 grid-flow-row gap-4 md:gap-6 lg:gap-8 w-full">
              {project?.showcaseOne && (
                <img
                  src={project?.showcaseOne}
                  alt="Showcase Banner"
                  className="w-full h-auto object-cover col-span-2 md:col-span-1 rounded-lg"
                />
              )}
            </div>

            <div className="my-4 md:my-6 lg:my-8">
              {project?.videoShowcase && (
                <video
                  src={project?.videoShowcase}
                  autoPlay
                  muted
                  loop
                  alt="Feature Video"
                  className="w-full h-auto object-cover shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg"
                />
              )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 grid-flow-row gap-4 md:gap-6 lg:gap-8 w-full">
              {project?.showcaseThree && (
                <img
                  src={project?.showcaseThree}
                  alt="Showcase Banner"
                  className="w-full h-auto object-cover col-span-2 md:col-span-1 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg"
                />
              )}
              {project?.showcaseFour && (
                <img
                  src={project?.showcaseFour}
                  alt="Showcase Banner"
                  className="w-full h-auto object-cover col-span-2 md:col-span-1 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg"
                />
              )}
            </div>
          </section>
        ) : (
          <section className="mx-4 md:mx-8 lg:mx-16 xl:mx-24 project-page">
            <div className="flex flex-col items-center gap-8 project-stats">
              <h2 className="rvl-hd text-center">{project.name}</h2>

              {project?.bannerImage && (
                <div className="w-full shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden obj-rvl">
                  <video
                    src={project.bannerImage}
                    alt="Banner"
                    autoPlay
                    loop
                    muted
                    className="w-full h-auto"
                  ></video>
                </div>
              )}

              {project?.description && (
                <div className="max-w-2xl mx-auto text-center">
                  {/* Using same rvl-pg class as in the active state */}
                  <p className="rvl-pg">{project.description}</p>
                </div>
              )}

              {/* Development notice with styling similar to tags */}
              <div className="tags flex justify-center">
                <p className="rvl-pg tag-div">In Development</p>
              </div>
            </div>
          </section>
        )}

        {/* NextProject component is rendered regardless of project active status */}
        <NextProject id={project.id} />
      </section>
    </>
  );
};

export default ProjectPage;
