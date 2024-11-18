import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const HoverText = ({ formal, casual }) => {
  const containerRef = useRef(null);
  const formalRef = useRef(null);
  const casualRef = useRef(null);
  const animationRef = useRef(null);
  const mediaQueryRef = useRef(null);

  useEffect(() => {
    if (!casual) return;

    // Create media query for laptop screens and above (1024px)
    mediaQueryRef.current = window.matchMedia("(min-width: 1024px)");

    const setupAnimation = () => {
      // Only setup animations if on larger screens
      if (mediaQueryRef.current.matches) {
        // Initial states
        gsap.set(casualRef.current, { y: 110, opacity: 0 });
        gsap.set(formalRef.current, { y: 0, opacity: 1 });

        // Animation timeline
        animationRef.current = gsap
          .timeline({ paused: true })
          .to(formalRef.current, {
            y: -110,
            opacity: 0,
            duration: 0.3,
            ease: "power2.inOut",
          })
          .to(
            casualRef.current,
            {
              y: 0,
              opacity: 1,
              duration: 0.3,
              ease: "power2.inOut",
            },
            "<0.1"
          );
      } else {
        // Reset animations and styles for mobile
        if (animationRef.current) {
          animationRef.current.kill();
        }
        gsap.set([casualRef.current, formalRef.current], {
          clearProps: "all",
        });
        // Show only formal text on mobile
        if (casualRef.current) {
          casualRef.current.style.display = "none";
        }
        if (formalRef.current) {
          formalRef.current.style.position = "static";
        }
      }
    };

    // Initial setup
    setupAnimation();

    // Handle resize events
    const handleResize = () => {
      setupAnimation();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [formal, casual]);

  const handleMouseEnter = () => {
    if (animationRef.current && casual && mediaQueryRef.current?.matches) {
      animationRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current && casual && mediaQueryRef.current?.matches) {
      animationRef.current.reverse();
    }
  };

  if (!casual) {
    return (
      <div ref={formalRef} className="formal-text">
        {formal}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="hover-text-container relative inline-block overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={formalRef} className="formal-text relative">
        {formal}
      </div>
      <div
        ref={casualRef}
        className="casual-text absolute top-0 left-0 w-full lg:block"
      >
        {casual}
      </div>
    </div>
  );
};

export default HoverText;
