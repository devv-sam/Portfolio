import React, { useState, useEffect } from "react";
import { FileText } from "lucide-react";
import RiveProfile from "./RiveProfile";

// Status options
const STATUS_TYPES = {
  AVAILABLE: {
    text: "Available for work!",
    dotColor: "#4ade80",
    pulseColor: "rgba(74, 222, 128, 0.75)",
  },
  BUSY: {
    text: "Busy—check back soon!",
    dotColor: "#f73b26",
    pulseColor: "rgba(247, 59, 38, 0.75)",
  },
  AWAY: {
    text: "Away—will respond soon",
    dotColor: "#fbbf24",
    pulseColor: "rgba(251, 191, 36, 0.75)",
  },
};

const Hero = () => {
  const [currentStatus, setCurrentStatus] = useState("BUSY");

  useEffect(() => {
    fetch("/status.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.status && STATUS_TYPES[data.status]) {
          setCurrentStatus(data.status);
        }
      })
      .catch((err) => {
        console.error("Failed to load status.json", err);
      });
  }, []);

  const status = STATUS_TYPES[currentStatus];

  return (
    <section className="flex flex-col justify-between p-8 lg:px-24 gap-3">
      <div className="flex justify-between items-end md:flex-row flex-col gap-3">
        <div className="w-full">
          <RiveProfile />
          <h3 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[0.5px] w-full text-black">
            Hey, I'm Sam
          </h3>
          <p className="font-poppins text-[clamp(1rem,2.5vw,1.4rem)] leading-[1.8] font-medium text-black/80">
            A Fullstack Developer
          </p>
        </div>

        <p className="font-poppins text-[clamp(0.875rem,2vw,1.1rem)] w-full cursor-default text-black/70 leading-[1.8]">
          Working with the latest technologies to craft cutting-edge tools for
          humans.
        </p>
      </div>

      {/* Base Section */}
      <div className="base">
        <div className="avail">
          <div className="wrap" style={{ cursor: "default" }}>
            <span
              className="dot"
              style={{
                "--pulsating-dot": status.dotColor,
                "--pulsating-ring": status.pulseColor,
              }}
            ></span>
            <p className="text-sm md:text-base">{status.text}</p>
          </div>
        </div>

        {/* Icons */}
        <div className="icons">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="../assets/SY_Resume.pdf"
            className="btn mr-[10px]"
          >
            <FileText className="w-5 h-5" />
            <span>Resume</span>
          </a>

          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/samuel-yeboah-asi-82b28a2b9/"
            className="link-icon"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>

          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/devv-sam?tab=overview&from=2024-08-01&to=2024-08-12"
            className="link-icon"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
