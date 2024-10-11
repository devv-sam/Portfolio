import "../index.css";
import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import gsap from "gsap";
import SplitType from "split-type";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    const mobileNav = document.querySelector(".mobile-nav");
    if (isOpen) {
      gsap.to(mobileNav, {
        x: "0%",
        duration: 0.5,
        ease: "power2.out",
        display: "block",
      });
    } else {
      gsap.to(mobileNav, {
        x: "100%",
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
          <div className="logo">
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
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>

      <div className={`mobile-nav ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link
              to="/about"
              className="nav-anim"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="nav-anim"
              onClick={() => setIsOpen(false)}
            >
              Craft
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="btn nav-anim"
              onClick={() => setIsOpen(false)}
            >
              Connect
            </a>
          </li>
        </ul>
      </div>

      <Outlet />
    </>
  );
}

export default Nav;
