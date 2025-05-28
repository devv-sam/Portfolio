import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";
import projects from "../project-info.json";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ProjectPage = () => {
  const scrollSectionRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const items = document.querySelectorAll(".item");

    items.forEach((item, index) => {
      if (index !== 0) {
        gsap.set(item, { yPercent: 100 });
      }
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: scrollSectionRef.current,
        pin: true,
        start: "top top",
        end: () => `+=${items.length * 100}%`,
        scrub: 1,
        invalidateOnRefresh: true,
      },
      defaults: { ease: "none" },
    });

    items.forEach((item, index) => {
      timeline
        .to(item, {
          scale: 0.9,
          borderRadius: "10px",
        })
        .to(
          items[index + 1],
          {
            yPercent: 0,
          },
          "<"
        );
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className=" bg-white">
      <div ref={scrollSectionRef} className="scroll-section section h-screen">
        <div ref={wrapperRef} className="wrapper h-full">
          <div className="list relative h-full">
            {projects.map((project, index) => (
              <Link to={`/projects/${project.id}`} key={project.id}>
                <div
                  className="mx-6 md:mx-12 lg:mx-24 item absolute inset-0 bg-white group"
                  role="listitem"
                >
                  <div className="flex flex-col h-full space-y-8 md:space-y-12">
                    <div className="pt-8 md:pt-12">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div className="flex items-center space-x-4">
                          <h2 className="text-[clamp(2rem,4vw,3rem)] font-medium ">
                            {project.name}
                          </h2>
                          <ArrowRight className="hidden md:block w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <p className="hidden md:block text-lg text-gray-600 w-full max-w-xl">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden rounded-lg">
                      {project.bannerImage &&
                      project.bannerImage.endsWith(".mp4") ? (
                        <video
                          src={project.bannerImage}
                          autoPlay
                          muted
                          loop
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <img
                          src={
                            project.projectType === "data_science"
                              ? project.coverImage
                              : project.bannerImage || project.coverImage
                          }
                          alt={project.name}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
