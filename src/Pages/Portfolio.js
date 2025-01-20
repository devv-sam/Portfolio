import React from "react";
import "../index.css";

import PortfolioMenu from "../Components/PortfolioMenu";
import "lenis/dist/lenis.css";
import projectsData from "../project-info.json";
import Preloader from "../Components/Preloader";

const Portfolio = () => {
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
            </div>
          </div>
        </section>
        <PortfolioMenu projects={projectsData} />
      </section>
    </>
  );
};

export default Portfolio;
