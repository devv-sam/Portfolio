import React from "react";
import SpotifyNowPlaying from "../Components/spotify/SpotifyNowPlaying.js";
import { gsap } from "gsap";
import { FaReact, FaJsSquare } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { RiSupabaseFill } from "react-icons/ri";
import {
  SiMongodb,
  SiTailwindcss,
  SiFigma,
  SiNextdotjs,
  SiPython,
  SiPrisma,
  SiShadcnui,
  SiTypescript,
} from "react-icons/si";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Bento = () => {
  return (
    <>
      <section className=" bg-white mx-4 md:mx-8 lg:mx-16 xl:mx-24 my-12">
        <div className="mx-auto max-w-[2000px] h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8 h-full">
            {/* About Section */}
            <div className="lg:col-span-5 flex flex-col gap-4 md:gap-6">
              <div className="gsap-animate h-full rounded-3xl border border-gray-300 p-6 transition-all  flex-1">
                <div className="flex h-full flex-col justify-between">
                  <h3 className="text-xl font-medium text-black mb-3 w-full  [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)]">
                    About me
                  </h3>
                  <p className="font-poppins text-md md:text-base lg:text-lg">
                    Ghanaian by blood, New Yorker by fate. When I'm not busy
                    coding out wild ideas, I'm hitting screamers on the field or
                    chilling to a classical piece. It's all about finding
                    balance right?
                  </p>
                </div>
              </div>

              <div className="bg-white/10 border border-gray-200 rounded-xl p-4 flex flex-col justify-center shadow-sm">
                <h5 className="text-xl font-medium text-black mb-3">
                  Tech stack
                </h5>
                <div className="flex flex-wrap items-center gap-3 justify-start">
                  {[
                    { Icon: FaReact, name: "React" },
                    { Icon: SiNextdotjs, name: "Next.js" },
                    { Icon: SiTypescript, name: "TypeScript" },
                    { Icon: SiTailwindcss, name: "Tailwind" },
                    { Icon: SiMongodb, name: "MongoDB" },
                    { Icon: SiPython, name: "Python" },
                    { Icon: SiFigma, name: "Figma" },
                    { Icon: RiSupabaseFill, name: "Supabase" },
                    { Icon: SiPrisma, name: "Prisma" },
                    { Icon: FaJsSquare, name: "JavaScript" },
                    { Icon: SiShadcnui, name: "Shadcn" },
                    { Icon: IoLogoNodejs, name: "Node.js" },
                  ].map(({ Icon, name }, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center w-[70px]"
                    >
                      <Icon size={40} className="text-black mb-1" />
                      <p className="text-sm font-medium text-black text-center">
                        {name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Center Section - Image & Spotify */}
            <div className="lg:col-span-3 flex flex-col gap-4 md:gap-6">
              <div className="flex-1 overflow-hidden rounded-3xl border border-gray-300 transition-all ">
                <img
                  src="./assets/profile-img-2.jpg"
                  alt="Sam's Profile"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="gsap-animate rounded-3xl border border-gray-300 p-6 transition-all ">
                <SpotifyNowPlaying />
              </div>
            </div>

            {/* Experience Section */}
            <div className="lg:col-span-4 gsap-animate rounded-3xl border border-gray-300 bg-gray-50/5 p-6 transition-all flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-poppins text-xl font-medium text-black mb-3">
                  Experience
                </h3>
                <a
                  href="../assets/SY_Resume.pdf"
                  target="_blank"
                  className="hover:opacity-75 transition-opacity"
                >
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
                    title: "America on Tech",
                    role: "Tech Flex Leader",
                    duration: "AUG 2024 - PRESENT",
                    description:
                      "Building custom prediction AI models using Python.",
                  },
                  {
                    title: "Codology",
                    role: "Frontend Developer",
                    duration: "DEC 2024 - FEB 2025",
                    description:
                      "Developed curricula for underrepresented communities and students in the STEM field.",
                  },
                  {
                    title: "Project: Empower",
                    role: "Frontend Developer",
                    duration: "AUG 2024 - JAN 2025",
                    description:
                      "Created scalable UI components for a nonprofit platform using Next.js, TypeScript, and Tailwind.",
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
                      <p className="font-poppins text-sm text-gray-700 lg:block hidden">
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
