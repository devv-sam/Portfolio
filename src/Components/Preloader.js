import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import "../index.css";

const Preloader = ({ loadertext }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    gsap.registerPlugin(Flip);

    const preloaderBackground = document.querySelector(
      ".preloader__background"
    );
    const preloaderText = document.querySelector(".preloader__text span");
    const body = document.body;

    const preventScroll = () => {
      body.style.overflow = "hidden";
      body.style.position = "fixed";
      body.style.width = "100%";
      body.style.height = "100%";
    };

    const allowScroll = () => {
      body.style.overflow = "";
      body.style.position = "";
      body.style.width = "";
      body.style.height = "";
      setIsLoading(false);
    };

    // Initial text positioning
    gsap.set(preloaderText, {
      yPercent: 100,
    });

    preventScroll();

    const tl = gsap.timeline({
      defaults: {
        ease: "power2.out",
      },
      onComplete: allowScroll,
    });

    tl.to(preloaderText, {
      yPercent: 0,
      duration: 1,
      ease: "power2.inOut",
    })
      .to(preloaderText, {
        yPercent: -100,
      })
      .to(preloaderBackground, {
        yPercent: -100,
        duration: 1,
        ease: "power4.inOut",
      });

    return () => {
      allowScroll();
    };
  }, []);

  return (
    <div className="preloader">
      <p className="preloader__text">
        <span>
          {" "}
          <span className="hidden lg:block">x</span>
          {loadertext}
        </span>
      </p>
      <div className="preloader__background"></div>
    </div>
  );
};

export default Preloader;
