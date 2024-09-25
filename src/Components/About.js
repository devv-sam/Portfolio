import React from "react";
import "../index.css";
import Nav from "./Nav";
import Preloader from "./Preloader";
import AbBento from "./AboutBento";
const About = ({ loadertext }) => {
  return (
    <>
      <Preloader loadertext={loadertext} />
      <section className="about-section">
        <Nav />
        <AbBento />
      </section>
    </>
  );
};

export default About;
