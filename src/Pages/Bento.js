import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SpotifyNowPlaying from "../Components/spotify/SpotifyNowPlaying.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "../Components/Nav";
gsap.registerPlugin(ScrollTrigger);

const Bento = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll(".gsap-animate");

    gsap.set(animatedElements, { y: 50, opacity: 0 });

    animatedElements.forEach((element, index) => {
      gsap.to(element, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
        delay: index * 0.1,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Nav />
      <section className="min-h-screen bg-white mx-4 md:mx-8 lg:mx-16 xl:mx-24">
        <div className="mx-auto max-w-[2000px] h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8 h-full">
            {/* About Section */}
            <div className="lg:col-span-5 flex flex-col gap-4 md:gap-6">
              <div className="gsap-animate h-full rounded-3xl border border-gray-300 p-6 transition-all hover:border-gray-400 hover:shadow-lg block flex-1">
                <div className="flex h-full flex-col justify-between">
                  <h3 className="font-poppins text-2.5xl md:text-3xl lg:text-3.5xl">
                    About Me
                  </h3>
                  <p className="font-poppins text-sm md:text-base lg:text-lg">
                    Frontend developer with <strong>2+ years</strong> of
                    experience in <strong>HTML</strong>, <strong>CSS</strong>,{" "}
                    <strong>JavaScript</strong>, <strong>React</strong>, and{" "}
                    <strong>GSAP</strong>. I also design intuitive interfaces
                    with
                    <strong> Figma</strong>. Outside of coding, I enjoy soccer
                    and classical music.
                  </p>
                </div>
              </div>

              <div className="gsap-animate flex-1 rounded-3xl border border-gray-300 bg-gray-50/5 p-6 transition-all hover:border-gray-400 hover:shadow-lg">
                <div className="flex h-full flex-col">
                  <h3 className="font-poppins text-2.5xl md:text-3xl lg:text-3.5xl">
                    Stack
                  </h3>
                  {/* Add your stack content here */}
                  <div className="grid grid-cols-4 gap-4">
                    {/* Placeholder for tech stack icons */}
                  </div>
                </div>
              </div>
            </div>

            {/* Center Section - Image & Spotify */}
            <div className="lg:col-span-3 flex flex-col gap-4 md:gap-6">
              <div className="flex-1 overflow-hidden rounded-3xl border border-gray-300 transition-all hover:border-gray-400 hover:shadow-lg">
                <img
                  src="./assets/profile-img-2.jpg"
                  alt="Sam's Profile"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="gsap-animate rounded-3xl border border-gray-300 p-6 transition-all hover:border-gray-400 hover:shadow-lg">
                <SpotifyNowPlaying />
              </div>
            </div>

            {/* Experience Section */}
            <div className="lg:col-span-4 gsap-animate rounded-3xl border border-gray-300 bg-gray-50/5 p-6 transition-all hover:border-gray-400 hover:shadow-lg flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-poppins text-2.5xl md:text-3xl lg:text-3.5xl">
                  Experience
                </h3>
                <a href="#" className="hover:opacity-75 transition-opacity">
                  <img
                    src="./assets/arrow.svg"
                    alt="arrow svg"
                    className="w-6 h-6"
                  />
                </a>
              </div>

              <div className="flex-1 flex flex-col justify-between">
                {[
                  {
                    title: "Project: Empower",
                    role: "Frontend Developer",
                    duration: "AUG 2024 - PRESENT",
                    description:
                      "Building web applications with a team to support low-income, first-generation students.",
                  },
                  {
                    title: "Bloomberg",
                    role: "CN Fellowship 1 Intern",
                    duration: "NOV 2023 - MAY 2024",
                    description:
                      "Completed coursework focused on career readiness and professional skills.",
                  },
                  {
                    title: "DWC HS",
                    role: "Frontend Developer",
                    duration: "DEC 2023 - MAY 2024",
                    description:
                      "Enhanced school websites with web development skills to improve user experience.",
                  },
                ].map((job, index, array) => (
                  <div
                    key={index}
                    className={`group rounded-lg transition-all hover:bg-gray-50 flex-1 ${
                      index !== array.length - 1 ? "mb-4" : ""
                    }`}
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                        <h4 className="font-poppins text-lg font-medium">
                          {job.title}
                        </h4>
                        <p className="font-poppins text-sm text-gray-600">
                          {job.role}
                        </p>
                      </div>
                      <p className="font-poppins text-xs text-gray-500 mb-2">
                        {job.duration}
                      </p>
                      <p className="font-poppins text-sm text-gray-700">
                        {job.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bento;
