import React from "react";
import "../index.css";
import { useState, useEffect } from "react";
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-4 md:mx-8 lg:mx-16 xl:mx-24">
        {projectsData.map((project) => (
          <Project
            key={project.id}
            id={project.id}
            className="h-full p-4 bg-white/5 rounded-lg transition-all duration-300 
                     hover:bg-white/10 hover:shadow-lg 
                     flex flex-col justify-between"
          />
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
      <Preloader loadertext={"⨯ Playground"} />

      <section className="flex flex-col gap-12 my-12">
        <section className="mx-4 md:mx-8 lg:mx-16 xl:mx-24">
          <div className="mt-8 flex flex-col gap-10">
            <div>
              <h3 className="text-[clamp(2rem,4vw,3rem)] font-medium  w-full text-black [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)]">
                A hub for all my projects
              </h3>
              <p className="text-[clamp(1rem,2vw,1.1rem)] w-full cursor-default text-gray-500 [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)] transform transition-transform duration-500">
                Built with passion, powered by coffee and iteration
              </p>
            </div>
            <div className="mt-2 flex justify-between align-center">
              <p className="text-[clamp(1rem,2vw,1.1rem)] w-full cursor-default text-gray-500 [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)] transform transition-transform duration-500">
                FEATURED WORK (0{projectsData.length})
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
      </section>
    </>
  );
};

export default Portfolio;
