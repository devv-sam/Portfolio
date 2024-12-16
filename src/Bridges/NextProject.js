import React from "react";
import projects from "../../project-info.json";
import "../index.css";
const NextProject = ({ id }) => {
  // Find the project by ID
  let nextID = (id += 1);
  if (id > projects.length) nextID = 1;
  const project = projects.find((proj) => proj.id === nextID);
  return (
    <>
      <section className="mx-4 md:mx-8 lg:mx-16 xl:mx-24">
        <div className="rounded-3xl border border-gray-300 flex flex-col gap-12 justify-between p-6 md:p-12 lg:p-20">
          <div className="flex flex-col gap-6 text-center">
            <h4 className="font-poppins text-[clamp(1rem,2.5vw,1.4rem)] leading-[1.8] font-medium text-black/80 [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)] transform transition-transform duration-500">
              Next Project
            </h4>
            <h3 className="text-[clamp(2rem,4vw,3rem)] font-medium tracking-[0.5px] w-full text-black [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)]">
              {project.name}
            </h3>
            <a href={`/projects/${nextID}`} className="btn link">
              <span className="mask">
                <div className="link-container">
                  <span className="link-title1 title">View Project</span>
                  <span className="link-title2 title">View Project</span>
                </div>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default NextProject;
