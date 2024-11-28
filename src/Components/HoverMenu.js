import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HoverMenu = ({ projects }) => {
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
    <section
      className="relative mx-4 md:mx-8 lg:mx-16 xl:mx-24"
      onMouseMove={handleMouseMove}
    >
      <div>
        <p className="text-sm mt-1 md:mt-0 text-gray-500">RECENT WORK</p>
      </div>
      <div className="space-y-8 md:space-y-12 relative z-10">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="relative"
            onMouseEnter={() => !isTablet && setHoveredIndex(index)}
            onMouseLeave={() => !isTablet && setHoveredIndex(null)}
          >
            <Link to={`/projects/${project.id}`} className="group block">
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  {project.name}
                </h2>
                <span className="text-gray-500 text-sm mt-1 md:mt-0">
                  {project.client}
                </span>
              </div>

              {!isTablet && (
                <div
                  className={`overflow-hidden transition-all duration-500 max-w-2xl ${
                    hoveredIndex === index
                      ? "max-h-40 opacity-100 mt-3"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-sm text-black bg-blue-50 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </Link>
            <div className="h-px bg-gray-200 mt-4 md:mt-6" />
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
  );
};

export default HoverMenu;
