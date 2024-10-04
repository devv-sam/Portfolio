import React from "react";
import "../index.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Outlet, Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-cta">
        <h3>Ready to spark your next big idea?</h3>
        <p>Let’s dive in and make it happen!</p>
        <a href="#" className="btn">
          Let’s get started
        </a>
      </div>
      <div className="footer-links">
        <ul>
          <li>
            <a href="/about" class="link">
              <span class="mask">
                <div class="link-container">
                  <span class="link-title1 title  ">Home</span>
                  <span class="link-title2 title ">Home</span>
                </div>
              </span>
            </a>
          </li>
          <li>
            <a href="/about" class="link">
              <span class="mask">
                <div class="link-container">
                  <span class="link-title1 title  ">About</span>
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
                    <span class="link-title1 title  ">Craft</span>
                    <span class="link-title2 title ">Craft</span>
                  </div>
                </span>
              </a>
            </Link>
          </li>
        </ul>
        <div className="footer-copyright">
          <p> © 2024 Samuel Yeboah-Asi. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
