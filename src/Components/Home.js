import React from "react";
import "../index.css";
import "lenis/dist/lenis.css";
import Lenis from "lenis";
import Hero from "./Hero";
import Reel from "./Reel";
import HomeIntro from "./HomeIntro";
import Preloader from "./Preloader";
import projectsData from "../project-info.json";
import HoverMenu from "./HoverMenu";

export const Home = ({ loadertext }) => {
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <>
      <Preloader loadertext={"Home"} />
      <section className="flex flex-col my-12 gap-14">
        <Hero />
        <Reel />
        <HoverMenu projects={projectsData} />
        <HomeIntro />
      </section>
    </>
  );
};

export default Home;
