import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Project from "./Project";

const PortfolioMenu = ({ projects }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleMouseMove = (e) => {
    if (!isTablet) {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    }
  };
  return (
    <>
      {isMobile ? (
        <div className="flex flex-col mx-4 gap-4">
          {projects.map((project, index) => (
            <Project key={project.id} id={project.id} />
          ))}
        </div>
      ) : (
        <section
          className="relative mx-4 md:mx-8 lg:mx-16 xl:mx-24 z-0"
          onMouseMove={handleMouseMove}
        >
          <div className="grid grid-cols-12 py-8  text-gray-500 text-sm font-['Poppins'] border-b border-gray-200">
            <div className="col-span-6">CLIENT</div>
            <div className="col-span-4">CATEGORY</div>
            <div className="col-span-2 text-right">DATE</div>
          </div>
          <div className="relative z-10">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="relative"
                onMouseEnter={() => !isTablet && setHoveredIndex(index)}
                onMouseLeave={() => !isTablet && setHoveredIndex(null)}
              >
                <Link
                  to={`/projects/${project.id}`}
                  className="group block py-10 border-b border-gray-200"
                  onMouseEnter={() => !isTablet && setHoveredIndex(index)}
                  onMouseLeave={() => !isTablet && setHoveredIndex(null)}
                >
                  <div className="grid grid-cols-12 items-start font-['Poppins']">
                    <div className="col-span-6">
                      <h2 className="text-xl sm:text-lg md:text-xl font-medium">
                        {project.name}
                      </h2>
                    </div>
                    <div className="col-span-4">
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-3">
                          <span className="text-md text-gray-600">
                            {project.tags[0]}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 text-right">
                      <span className="text-md text-gray-600">
                        {project.date}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {hoveredIndex !== null && !isTablet && (
            <div
              className="fixed pointer-events-none"
              style={{
                left: `${mousePosition.x + 20}px`,
                top: `${mousePosition.y - 20}px`,
                zIndex: 50,
              }}
            >
              <img
                src={projects[hoveredIndex].coverImage}
                alt={projects[hoveredIndex].name}
                className="w-[500px] h-[300px] object-cover  shadow-lg"
              />
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default PortfolioMenu;
