import React from "react";
import "../index.css";
import { useState, useEffect } from "react";
import Nav from "../Components/Nav";
import { CiGrid41 } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";

import PortfolioMenu from "../Components/PortfolioMenu";
import "lenis/dist/lenis.css";
import projectsData from "../project-info.json";
import Preloader from "../Components/Preloader";
import Project from "../Components/Project";

const Portfolio = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isGrid, setIsGrid] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isList, setIsList] = useState(true);

  function gridView() {
    return (
      <div className="flex gap-4 mx-4 md:mx-8 lg:mx-16 xl:mx-24">
        {projectsData.map((project, index) => (
          <Project key={project.id} id={project.id} />
        ))}
      </div>
    );
  }

  const toggleGridView = () => {
    setIsGrid(true);
    setIsList(false);
  };

  const toggleListView = () => {
    setIsGrid(false);
    setIsList(true);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      <Preloader loadertext={"My digital playground."} />
      <Nav />
      <section className="mx-4 md:mx-8 lg:mx-16 xl:mx-24">
        <div className="mt-8 flex flex-col gap-10">
          <h3 className="text-[clamp(2rem,4vw,3rem)] font-semibold  w-full text-black [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)]">
            What I've been building
          </h3>
          <div className="mt-2 flex justify-between">
            <p className="text-[clamp(1rem,2vw,1.1rem)] w-full cursor-default text-gray-500 [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)] transform transition-transform duration-500">
              SELECTED WORK
            </p>
            {!isMobile ? (
              <div className="flex gap-4">
                <button
                  className={` p-4 rounded-[100%] transition-colors duration-300 ${
                    isGrid
                      ? "bg-black text-white"
                      : "bg-white text-black border border-black"
                  }`}
                  onClick={toggleGridView}
                >
                  <CiGrid41 size={25} />
                </button>
                <button
                  className={` p-4 rounded-[100%] transition-colors duration-300 ${
                    isList
                      ? "bg-black text-white"
                      : "bg-white text-black border border-black"
                  }`}
                  onClick={toggleListView}
                >
                  <CiMenuBurger size={25} />
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </section>
      {!isGrid && isList ? <PortfolioMenu projects={projectsData} /> : null}
      {isGrid ? gridView() : null}
    </>
  );
};

export default Portfolio;
