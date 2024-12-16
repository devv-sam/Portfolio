import React from "react";
import { useRef, useEffect } from "react";
import "../index.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import PrxCheckout from "../Bridges/PrxCheckout";
import Preloader from "../Components/Preloader";
import Bento from "../Components/Bento";
const About = ({ loadertext }) => {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const aboutWrapperRef = useRef(null);
  const aboutImageRef = useRef(null);
  const aboutContentRef = useRef(null);

  useEffect(() => {
    const aboutWrapper = aboutWrapperRef.current;
    const aboutImage = aboutImageRef.current;
    const aboutContent = aboutContentRef.current;
    const container = containerRef.current;
    const title = titleRef.current;
    const cards = cardsRef.current;
    const scrReveal = new SplitType(".scr-rvl", { types: "lines" });
    const scrTrigger = document.querySelectorAll(".bio-section");

    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
    });

    // About wrapper animation
    // tl.from(aboutWrapper, {
    //   autoAlpha: 0,
    //   duration: 1,
    //   ease: "power3.out",
    //   delay: 3.9,
    // })
    //   .from(
    //     aboutImage,
    //     {
    //       y: -50,
    //       autoAlpha: 0,
    //       duration: 1,
    //       ease: "power3.out",
    //     },
    //     "-=0.5"
    //   )
    //   .from(
    //     aboutContent,
    //     {
    //       y: 50,
    //       autoAlpha: 0,
    //       duration: 1,
    //       ease: "power3.out",
    //     },
    //     "-=0.7"
    //   );

    tl.from(title, {
      y: 30,
      duration: 0.6,
      opacity: 0,
      ease: "power2.out",
    }).from(cards, {
      y: 50,
      scale: 0.9,
      duration: 0.9,
      opacity: 0,
      ease: "power2.out",
      stagger: 0.2,
    });

    gsap.from(scrReveal.lines, {
      scrollTrigger: {
        trigger: scrTrigger,
        start: "top +=500",
        end: "bottom +=50",
        scrub: false,
        markers: false,
      },
      y: 110,
      stagger: 0.05,
      duration: 0.6,
    });

    // Cleanup function
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, []);

  return (
    <>
      <Preloader loadertext={"⨯ About"} />
      <section className="flex flex-col gap-14">
        <Bento />
        <PrxCheckout />
      </section>
    </>
  );
};

export default About;
