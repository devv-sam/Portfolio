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
  const isDataScience = project?.projectType === "data_science";

  const DataScienceVisualization = ({ imageSrc, details }) => (
    <div className="visualization-container mb-12">
      <div className="image-container rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <img
          src={imageSrc}
          alt={details.title}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="visualization-details mt-6 px-4">
        <h3 className="text-2xl font-medium mb-3 text-gray-800">
          {details.title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-lg font-light">
          {details.explanation}
        </p>
      </div>
    </div>
  );

  return (
    <>
      <Preloader loadertext={project.name} />
      <section className="flex flex-col gap-12 my-12">
        {isActive ? (
          isDataScience ? (
            <section className="mx-4 md:mx-8 lg:mx-16 xl:mx-24 project-page">
              <div className="row gapped mb-16">
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
                    {isDataScience ? "View on GitHub" : "Live Site"}{" "}
                    <ion-icon
                      name="open-outline"
                      className="icon-ex"
                    ></ion-icon>
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

              <div className="mb-16">
                {project?.bannerImage && (
                  <DataScienceVisualization
                    imageSrc={project.bannerImage}
                    details={project.visualizations.volume_trends}
                  />
                )}
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-medium mb-8 text-gray-800">
                  Training Analysis
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {project?.showcaseOne && (
                    <DataScienceVisualization
                      imageSrc={project.showcaseOne}
                      details={project.visualizations.metric_distributions}
                    />
                  )}
                  {project?.showcaseTwo && (
                    <DataScienceVisualization
                      imageSrc={project.showcaseTwo}
                      details={project.visualizations.top_exercises}
                    />
                  )}
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-medium mb-8 text-gray-800">
                  Prediction Models
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {project?.showcaseThree && (
                    <DataScienceVisualization
                      imageSrc={project.showcaseThree}
                      details={project.visualizations.random_forest}
                    />
                  )}
                  {project?.showcaseFour && (
                    <DataScienceVisualization
                      imageSrc={project.showcaseFour}
                      details={project.visualizations.linear_regression}
                    />
                  )}
                </div>
              </div>
            </section>
          ) : (
            // Regular Project Layout
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
                    {isDataScience ? "View on GitHub" : "Live Site"}{" "}
                    <ion-icon
                      name="open-outline"
                      className="icon-ex"
                    ></ion-icon>
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
                {project?.showcaseTwo && (
                  <img
                    src={project?.showcaseTwo}
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
          )
        ) : (
          <section className="mx-4 md:mx-8 lg:mx-16 xl:mx-24 project-page">
            <div className="flex flex-col items-center gap-8 project-stats">
              {project.externalLink ? (
                <a
                  href={project.externalLink}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <h2 className="rvl-hd text-center">{project.name}</h2>
                </a>
              ) : (
                <h2 className="rvl-hd text-center">{project.name}</h2>
              )}

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
