import React from "react";
import Nav from "./Nav";
import HoverText from "./HoverText";
import "../index.css";

const Hero = () => {
  return (
    <section className="flex flex-col justify-between h-90vh p-8 lg:px-24 gap-3">
      <div className="flex justify-between items-end md:flex-row flex-col gap-3">
        <div className="w-full">
          <img
            src="/assets/profile-icon.png"
            alt="Sam's profile"
            className="w-40 md:w-48 lg:w-52"
          />
          <h3 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[0.5px] w-full text-black [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)]">
            <HoverText formal={"Hey, I'm Sam,"} />
          </h3>
          <p className="font-poppins text-[clamp(1rem,2.5vw,1.4rem)] leading-[1.8] font-medium text-black/80 [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)] transform transition-transform duration-500">
            A Frontend Developer
          </p>
        </div>

        <p className="font-poppins text-[clamp(0.875rem,2vw,1.1rem)] w-full cursor-default text-black/70 [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)]  leading-[1.8] transform transition-transform duration-500">
          <HoverText
            formal={
              "Working with frontend technologies to craft cutting-edge tools for humans."
            }
            casual={
              "I just want to create something people actually want to use."
            }
          />
        </p>
      </div>

      {/* Base Section */}
      <div className="base">
        <div className="avail">
          <div className="wrap">
            <span className="dot"></span>
            <p className="text-sm md:text-base">Ready to collaborate</p>
          </div>
        </div>

        {/* Icons - Hidden on mobile */}
        <div className="icons">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/samuel-yeboah-asi-82b28a2b9/"
            className="link-icon"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:samuelydev@gmail.com?subject=Collaboration%20Inquiry"
            className="link-icon"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/devv-sam?tab=overview&from=2024-08-01&to=2024-08-12"
            className="link-icon"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
