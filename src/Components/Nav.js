import "../index.css";
import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import gsap from "gsap";
import SplitType from "split-type";

function Nav() {
  useEffect(() => {
    const navAnim = document.querySelectorAll(".nav-anim");

    navAnim.forEach((char, i) => {
      const letter = new SplitType(char, { types: "lines" });

      gsap.from(letter.lines, {
        y: -20,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        delay: 4,
        ease: "power2.out",
      });
    }, []);
  });

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
          <ul>
            <li>
              <a href="/about" class="link">
                <span class="mask">
                  <div class="link-container">
                    <span class="link-title1 title nav-anim">About</span>
                    <span class="link-title2 title ">About</span>
                  </div>
                </span>
              </a>
            </li>
            <li>
              <Link to="/portfolio">
                <a href="#" class="link">
                  <span class="mask">
                    <div class="link-container">
                      <span class="link-title1 title nav-anim">Craft</span>
                      <span class="link-title2 title ">Craft</span>
                    </div>
                  </span>
                </a>
              </Link>
            </li>
            <li className="nav-anim">
              <a href="#" className="btn ">
                Connect
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet />
    </>
  );
}

export default Nav;
