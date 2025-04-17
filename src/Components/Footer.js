import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const ctaRef = useRef(null);
  const linksRef = useRef(null);
  const copyrightRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    const cta = ctaRef.current;
    const links = linksRef.current;
    const copyright = copyrightRef.current;

    gsap.set([cta, links, copyright], { opacity: 0, y: 50 });

    ScrollTrigger.create({
      trigger: footer,
      start: "top bottom-=100",
      onEnter: () => {
        gsap.to(cta, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" });
        gsap.to(links, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.2,
          ease: "power3.out",
        });
        gsap.to(copyright, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.4,
          ease: "power3.out",
        });
      },
      once: true,
    });

    const ctaButton = cta.querySelector(".btn");
    ctaButton.addEventListener("mouseenter", () => {
      gsap.to(ctaButton, { scale: 1.05, duration: 0.3, ease: "power2.out" });
    });
    ctaButton.addEventListener("mouseleave", () => {
      gsap.to(ctaButton, { scale: 1, duration: 0.3, ease: "power2.out" });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="mx-4 md:mx-8 lg:mx-16 xl:mx-24 mb-4">
      <div
        ref={footerRef}
        className="rounded-3xl border border-gray-300 flex flex-col gap-12 justify-between p-6 md:p-12 lg:p-20"
      >
        {/* CTA Section */}
        <div
          ref={ctaRef}
          className="flex flex-col items-center gap-6 text-center"
        >
          <h3 className="text-[clamp(2rem,4vw,3rem)] font-medium tracking-[0.5px] w-full text-black [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)]">
            Let's get in touch
          </h3>
          <p className="font-['Poppins'] text-base md:text-lg text-gray-600 max-w-2xl">
            Reach out to me to create something amazing or to just say hello!
          </p>
          <a
            href="mailto:samuelydev@gmail.com?subject=Inquiry from Your Portfolio"
            target="_blank"
            rel="noreferrer"
            className="btn hover:shadow-lg transition-shadow duration-300 "
          >
            samuelydev@gmail.com
          </a>
        </div>

        {/* Navigation Links */}
        <div ref={linksRef} className="flex flex-col gap-2">
          <ul className="flex flex-wrap justify-center gap-4 md:gap-6 ">
            <li>
              <a
                className="link"
                href="../assets/SY_Resume.pdf"
                target="_blank"
              >
                <span className="mask">
                  <div className="link-container">
                    <span className="link-title1 title">Resume</span>
                    <span className="link-title2 title">Resume</span>
                  </div>
                </span>
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/samuel-yeboah-asi-82b28a2b9/"
                className="link"
              >
                <span className="mask">
                  <div className="link-container">
                    <span className="link-title1 title">LinkedIn</span>
                    <span className="link-title2 title">LinkedIn</span>
                  </div>
                </span>
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/devv-sam?tab=overview&from=2024-08-01&to=2024-08-12"
                className="link"
              >
                <span className="mask">
                  <div className="link-container">
                    <span className="link-title1 title">Github</span>
                    <span className="link-title2 title">Github</span>
                  </div>
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright Section */}
        <div
          ref={copyrightRef}
          className="flex flex-col md:flex-row justify-center items-center gap-4 text-center"
        >
          <p className="font-['Poppins'] text-sm md:text-base text-gray-600">
            {new Date().getFullYear()} · Samuel Yeboah-Asi
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
