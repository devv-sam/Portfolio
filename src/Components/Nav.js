import "../index.css";
import React, { useState, useEffect, useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import gsap from "gsap";
import SplitType from "split-type";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileNavRef = useRef(null);

  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }

    return () => {
      body.classList.remove("no-scroll");
    };

    const navAnim = document.querySelectorAll(".nav-anim");

    navAnim.forEach((char) => {
      const letter = new SplitType(char, { types: "lines" });

      gsap.from(letter.lines, {
        y: -20,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        delay: 4,
        ease: "power2.out",
      });
    });
  }, [isOpen]);

  useEffect(() => {
    const mobileNav = mobileNavRef.current;
    const navItems = mobileNav.querySelectorAll(".mobile-nav-item");

    if (isOpen) {
      gsap.to(mobileNav, {
        y: "0%",
        duration: 0.5,
        ease: "power2.out",
        display: "block",
      });

      gsap.from(navItems, {
        x: -50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(mobileNav, {
        y: "100%",
        duration: 0.5,
        ease: "power2.in",

        onComplete: () => {
          mobileNav.style.display = "none";
        },
      });
    }
  }, [isOpen]);

  return (
    <>
      <div className="Nav">
        <nav>
          <div className={`logo ${isOpen ? "hidden" : ""}`}>
            <ul>
              <li>
                <Link to="/landing" className="nav-anim">
                  Samuel Yeboah-Asi
                </Link>
              </li>
            </ul>
          </div>
          <ul className="desktop-nav">
            <li>
              <a href="/about" className="link">
                <span className="mask">
                  <div className="link-container">
                    <span className="link-title1 title nav-anim">About</span>
                    <span className="link-title2 title">About</span>
                  </div>
                </span>
              </a>
            </li>
            <li>
              <Link to="/portfolio">
                <a href="#" className="link">
                  <span className="mask">
                    <div className="link-container">
                      <span className="link-title1 title nav-anim">Craft</span>
                      <span className="link-title2 title">Craft</span>
                    </div>
                  </span>
                </a>
              </Link>
            </li>
            <li className="nav-anim">
              <a href="#" className="btn">
                Connect
              </a>
            </li>
          </ul>
          <div
            className={`hamburger ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>

      <section
        ref={mobileNavRef}
        className={`mobile-nav ${isOpen ? "open" : ""}`}
      >
        <div>
          <ul>
            <li className="mobile-nav-item">
              <Link to="/about" onClick={() => setIsOpen(false)}>
                <h3>About</h3>
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link to="/portfolio" onClick={() => setIsOpen(false)}>
                <h3>Craft</h3>
              </Link>
            </li>
          </ul>
        </div>

        <div className="mobile-nav-footer">
          <div className="mobile-nav-item">
            <h3>EMAIL</h3>
            <a href="mailto:samuelydev@gmail.com">samuelydev@gmail.com</a>
          </div>
          <div className="mobile-nav-item">
            <h3>CONNECT</h3>
            <div className="social-links">
              <a
                href="http://www.linkedin.com/in/samuel-yeboah-asi-82b28a2b9"
                target="_blank"
                rel="noopener noreferrer"
              >
                LN.
              </a>
              <a
                href="https://github.com/devv-sam"
                target="_blank"
                rel="noopener noreferrer"
              >
                GH.
              </a>
            </div>
          </div>
        </div>
      </section>

      <Outlet />
    </>
  );
}

export default Nav;
