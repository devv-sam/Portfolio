import React, { useEffect, useRef } from "react";
import "../index.css";
import "lenis/dist/lenis.css";
import Nav from "./Nav";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Footer from "./Footer";
import Hero from "./Hero";
import Reel from "./Reel";
import HomeIntro from "./HomeIntro";
import Preloader from "./Preloader";
// import HoverMenu from "./HoverMenu";
import projectsData from "../project-info.json";
import PortfolioMenu from "./PortfolioMenu";
import HoverMenu from "./HoverMenu";

export const Home = ({ loadertext }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    let animation;
    gsap.registerPlugin(ScrollTrigger);
    const hdReveal = new SplitType(".rvl-hd", { types: "words" });
    const pgReveal = new SplitType(".rvl-pg", { types: "lines" });

    gsap.to(hdReveal.words, {
      y: 0,
      stagger: 0.05,
      delay: 3.9,
      duration: 0.1,
    });

    gsap.from(pgReveal.lines, {
      y: 110,
      stagger: 0.05,
      delay: 3.9,
      duration: 1,
    });

    const setupAnimation = () => {
      if (mediaQuery.matches) {
        // Apply GSAP animation for laptop screens and above (1024px and wider)
        animation = gsap.from(videoRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "+=-400 center",
            end: "+=300",
            scrub: true,
            markers: false,
            toggleActions: "play reverse play reverse",
          },
          duration: 2.3,
          transform: "translate(0px, -220px) scale(0.14, 0.14)",
          borderRadius: "100rem",
        });
      } else {
        // Remove GSAP animation for smaller screens
        if (animation) {
          animation.kill();
        }
        gsap.set(videoRef.current, {
          clearProps: "all",
        });
      }
    };

    setupAnimation();

    const handleResize = () => {
      setupAnimation();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (animation) {
        animation.kill();
      }
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <>
      <Preloader loadertext={"⨯ Home"} />
      <section className="flex flex-col gap-12">
        <Nav />
        <Hero />
        <Reel />
        <HomeIntro />

        <HoverMenu projects={projectsData} />
        <Footer />
      </section>
    </>
  );
};

export default Home;
