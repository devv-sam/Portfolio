import React from "react";
import { Link } from "react-router-dom";
const HomeIntro = () => {
  return (
    <section className="mx-4 md:mx-8 lg:mx-16 xl:mx-24">
      <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-start">
        <div className="w-full lg:w-2/3">
          <h3 className="text-xl md:text-2xl lg:text-2.5xl xl:text-2.5xl font-normal leading-[1.45]">
            I'm a selectively skilled <strong>Frontend Developer</strong> with a
            goal to build cutting-edge tools for humans. I design with{" "}
            <strong>Figma</strong> and develop with <strong>JavaScript</strong>.
          </h3>
        </div>
        <div className="lg:w-1/4 flex flex-col gap-4 align-start">
          <p className="font-['Poppins'] text-sm md:text-base text-gray-600 leading-[1.45]">
            Proud Ghanaian, Real Madrid superfan, passionate Classical music
            enthusiast.
          </p>
          <Link
            to="/about"
            className="btn hover:shadow-lg transition-shadow duration-300"
          >
            About me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
