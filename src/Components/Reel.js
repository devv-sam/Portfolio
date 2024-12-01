import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Reel = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // Note: This assumes GSAP and SplitType are loaded externally
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    let animation;

    const setupAnimation = () => {
      if (mediaQuery.matches) {
        // Modified animation for larger screens
        animation = gsap.from(videoRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
            markers: false,
            toggleActions: "play reverse play reverse",
          },
          duration: 2,
          scale: 0.9,
          opacity: 0.5,
          y: -100,
          borderRadius: "2rem",
          ease: "power2.out",
        });
      } else {
        // Cleanup animation for mobile
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

  return (
    <section className="flex flex-col items-center w-full">
      <div
        ref={containerRef}
        className="flex items-center justify-center w-full lg:px-24 md:px-16 px-8 py-8 lg:py-16"
      >
        <video
          ref={videoRef}
          a
          src="/assets/video.mp4"
          className="w-full h-auto rounded-3xl transform-gpu"
          loop
          playsInline
          autoPlay
          muted
        />
      </div>
    </section>
  );
};

export default Reel;
