import React from "react";
import projects from "../../project-info.json";
import "../../index.css";

const NextProject = ({ id }) => {
  // Find the project by ID
  let nextID = id + 1;
  if (nextID > projects.length) nextID = 1;
  const project = projects.find((proj) => proj.id === nextID);

  return (
    <section className="mx-4 md:mx-8 lg:mx-16 xl:mx-24">
      <div className="rounded-3xl border border-gray-300 flex flex-col md:flex-row justify-between p-6 md:p-12 lg:p-16 gap-8">
        <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
          <h4 className="font-poppins text-sm md:text-base lg:text-lg font-medium text-black/80 opacity-75">
            Next Project
          </h4>

          <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-black">
            {project.name}
          </h3>

          <div className="flex space-x-4 text-gray-600">
            {project.tags.slice(0, 2).map((tag, index) => (
              <p key={index} className="font-poppins text-xs md:text-sm">
                {tag}
              </p>
            ))}
          </div>

          <a
            href={`/projects/${nextID}`}
            rel="noreferrer"
            className="self-start mt-4 btn hover:shadow-lg transition-all duration-300"
          >
            View Project
          </a>
        </div>

        <div className="hidden md:flex md:w-1/2 items-center justify-center">
          <img
            src={project.coverImage}
            alt="Project Cover"
            className="w-full h-auto object-cover rounded-xl shadow-md max-h-96"
          />
        </div>
      </div>
    </section>
  );
};

export default NextProject;
