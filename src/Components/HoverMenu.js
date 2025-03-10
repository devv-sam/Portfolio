import React, { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const HoverMenu = ({ projects }) => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 50, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    cursorX.set(clientX);
    cursorY.set(clientY);
  };

  return (
    <section className="w-full bg-white" onMouseMove={handleMouseMove}>
      <div className="px-4 md:px-8 pt-16 pb-24">
        <div className="max-w-[90%] mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal">
              works
            </h1>
            <p className="text-base md:text-lg text-gray-600 lg:max-w-xl">
              Here are some of the projects I've worked on. I personally learn
              best through experience so a good bunch of these were 'code it to
              learn it' style projects. Hope you enjoy!
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-8">
        <div className="max-w-[90%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-24">
            {projects.map((project) => (
              <a
                href={`/projects/${project.id}`}
                to={`/projects/${project.id}`}
                className="block"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="group relative">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={project.coverImage}
                      alt={project.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="mt-6">
                    <h2 className="text-xl md:text-2xl font-normal mb-2">
                      {project.name}
                    </h2>
                    <p className="text-sm md:text-base text-gray-600">
                      {project.tags.join(" · ")}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
        >
          <div className="px-6 py-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-lg text-white text-sm whitespace-nowrap bg-gradient-to-r from-black/60 to-black/50">
            View Work
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HoverMenu;
