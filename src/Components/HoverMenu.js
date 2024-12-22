import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const PortfolioGallery = ({ projects }) => {
  const galleryRef = useRef(null);
  const itemsRef = useRef([]);
  const textRefs = useRef([]);
  const imageRefs = useRef([]);
  const currentHoveredIndex = useRef(null);
  const isAnimating = useRef(false);

  useEffect(() => {
    // Initial setup remains the same
    gsap.set(itemsRef.current, {
      width: "20%",
      maxWidth: "400px",
    });

    gsap.set(textRefs.current, {
      opacity: 0,
      visibility: "hidden",
    });

    gsap.set(imageRefs.current, {
      scale: 1,
    });

    const middleIndex = Math.floor(projects.length / 2);
    gsap.set(itemsRef.current[middleIndex], {
      width: "70%",
      maxWidth: "700px",
    });
    gsap.set(textRefs.current[middleIndex], {
      opacity: 1,
      visibility: "visible",
      y: 0,
    });
  }, []);

  const animateItem = (index, isExpanding) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
      },
    });

    itemsRef.current.forEach((item, i) => {
      const isTarget = i === index;

      tl.to(
        item,
        {
          width: isExpanding && isTarget ? "70%" : "20%",
          maxWidth: isExpanding && isTarget ? "700px" : "300px",
          ease: "power2.out",
          duration: 0.5,
        },
        0
      );

      tl.to(
        imageRefs.current[i],
        {
          scale: isExpanding && isTarget ? 1.07 : 1,
          duration: 0.5,
          ease: "power2.out",
        },
        0
      );

      tl.to(
        textRefs.current[i],
        {
          opacity: isExpanding && isTarget ? 1 : 0,
          visibility: isExpanding && isTarget ? "visible" : "hidden",
          duration: 0.3,
          ease: "power2.out",
        },
        isExpanding ? 0.2 : 0
      );
    });
  };

  const handleHover = (index) => {
    // If hovering the same item, don't do anything
    if (currentHoveredIndex.current === index) return;

    // If we're moving from one item to another
    if (currentHoveredIndex.current !== null && index !== null) {
      currentHoveredIndex.current = index;
      animateItem(index, true);
      return;
    }

    // If we're entering a new item from no hover
    if (index !== null) {
      currentHoveredIndex.current = index;
      animateItem(index, true);
    }
  };

  const handleMouseLeave = (index) => {
    // Only handle leave for currently hovered item
    if (currentHoveredIndex.current === index) {
      currentHoveredIndex.current = null;
      animateItem(null, false);
    }
  };

  return (
    <section className="mx-4 pt-6 md:mx-8 lg:mx-16 xl:mx-24">
      <div className="hidden lg:block">
        <div
          ref={galleryRef}
          className="w-full flex items-start justify-center gap-4"
        >
          {projects.map((project, index) => (
            <Link
              to={`/projects/${project.id}`}
              key={project.id}
              ref={(el) => (itemsRef.current[index] = el)}
              className="flex flex-col gap-6"
              onMouseLeave={handleMouseLeave}
            >
              <div className="h-[450px] overflow-hidden rounded-lg">
                <div
                  ref={(el) => (imageRefs.current[index] = el)}
                  className="w-full h-full"
                  onMouseEnter={() => handleHover(index)}
                >
                  <img
                    src={project.coverImage}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div
                ref={(el) => (textRefs.current[index] = el)}
                className="flex flex-col gap-2"
              >
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-bold">{project.name}</h2>
                  <p className="text-sm text-gray-600">{project.tags[0]}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Tablet/Mobile View remains unchanged */}
      <div className="lg:hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col gap-4">
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img
                  src={project.coverImage}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="md:flex justify-between items-start">
                  <h2 className="text-2xl md:text-xl sm:text-lg font-bold">
                    {project.name}
                  </h2>
                  <p className="text-sm text-gray-600">{project.tags[0]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4 mb-8 md:mt-16 md:mb-12">
        <Link
          to="/projects"
          className="btn inline-block px-8 py-3 text-lg font-medium transition-all duration-300"
        >
          View All
        </Link>
      </div>
    </section>
  );
};

export default PortfolioGallery;
