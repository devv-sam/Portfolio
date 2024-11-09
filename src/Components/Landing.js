import React, { useEffect, useRef } from "react";
import "../index.css";
import Nav from "./Nav";
import Bento from "./Bento";
import "lenis/dist/lenis.css";
import { Marquee } from "@devnomic/marquee";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Footer from "./Footer";
import Preloader from "./Preloader";

export const Landing = ({ loadertext }) => {
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
      <Preloader loadertext={loadertext} />
      <section className="cta-opening">
        <Nav />
        <div className="hero">
          <img src="/assets/profile-icon.png" alt="Sam's profile" />
          <h3 className="rvl-hd">
            Hi! 👋 I'm Sam, a Frontend Developer from New York.
          </h3>
          <p className="rvl-pg">
            I bring ideas to life with precision and creativity, crafting
            exceptional projects that stand out.
          </p>
        </div>
        <div className="base">
          <div className="avail">
            <div className="wrap">
              <span className="dot"></span>
              <p>Ready to collaborate</p>
            </div>
          </div>
          <div className="icons">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/samuel-yeboah-asi-82b28a2b9/"
              className="link-icon"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a
              target="_blank"
              href="mailto:samuelydev@gmail.com?subject=Collaboration%20Inquiry"
              className="link-icon"
            >
              <ion-icon name="mail-outline"></ion-icon>
            </a>
            <a
              target="_blank"
              href="https://github.com/devv-sam?tab=overview&from=2024-08-01&to=2024-08-12"
              className="link-icon"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </div>
        </div>
      </section>
      <section className="video-section">
        <div className="vid-box" ref={containerRef}>
          <video
            ref={videoRef}
            src="/assets/video.mp4"
            width="100%"
            height="100%"
            loop
            playsInline
            autoPlay
            muted
          />
        </div>
      </section>
      <div className="column-wrap">
        <Bento />
      </div>

      <Footer />
      <section>
        <Marquee></Marquee>
      </section>
    </>
  );
};

export default Landing;
