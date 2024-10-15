import React, { useEffect, useRef } from "react";
import "../index.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Outlet, Link } from "react-router-dom";

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
    <section className="footer-section" ref={footerRef}>
      <div className="footer-cta" ref={ctaRef}>
        <h3>Ready to spark your next big idea?</h3>
        <p>Let's dive in and make it happen!</p>
        <a href="#" className="btn">
          Let's get started
        </a>
      </div>
      <div className="footer-links" ref={linksRef}>
        <ul>
          <li>
            <a href="/landing" className="link">
              <span className="mask">
                <div className="link-container">
                  <span className="link-title1 title">Home</span>
                  <span className="link-title2 title">Home</span>
                </div>
              </span>
            </a>
          </li>
          <li>
            <a href="/about" className="link">
              <span className="mask">
                <div className="link-container">
                  <span className="link-title1 title">About</span>
                  <span className="link-title2 title">About</span>
                </div>
              </span>
            </a>
          </li>
          <li>
            <Link to="/portfolio" className="link">
              <span className="mask">
                <div className="link-container">
                  <span className="link-title1 title">Craft</span>
                  <span className="link-title2 title">Craft</span>
                </div>
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-copyright" ref={copyrightRef}>
        <p>© 2024 Samuel Yeboah-Asi.</p>
      </div>
    </section>
  );
};

export default Footer;
