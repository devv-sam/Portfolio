import React, { useEffect } from "react";
import "../index.css";
import projects from "../project-info.json";
import { Link } from "react-router-dom";

const Project = ({ id }) => {
  // Find the project by ID
  const project = projects.find((proj) => proj.id === id);

  useEffect(() => {
    // If no project is found return null
    if (!project) {
      console.log("Project not found");
    }
  }, [project, id]);

  return (
    <>
      <div className="project">
        <a href={`/projects/${id}`}>
          <div className="prx-thumb">
            <img
              src={project.coverImage}
              alt="Project Cover"
              className="portfolio-cover"
            />
          </div>
          <div className="prx-details">
            <div className="prx-basic">
              <h4 className="text-[clamp(1.25rem,1.1959rem,1.5rem)] font-medium">
                {project.name}
              </h4>
              <div className="prx-subtitle">
                <p>
                  {project.tags[0]} — {project.date}
                </p>
              </div>
            </div>
            <div className="btn-external">
              <Link to={`/projects/${id}`} className="btn btn-external">
                View Details{" "}
                <ion-icon name="open-outline" className="icon-ex"></ion-icon>
              </Link>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Project;
