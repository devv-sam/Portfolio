import React from "react";
import ReactDOM from "react-dom/client";
import Landing from "./Components/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Portfolio from "./Pages/Portfolio";
import About from "./Components/About";
import "lenis/dist/lenis.css";
import ProjectPage from "./Pages/ProjectPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <Landing loadertext="Bringing ideas to life, one pixel at a time." />
          }
        />
        <Route
          path="/portfolio"
          element={<Portfolio loadertext="My digital playground." />}
        />
        <Route
          path="/landing"
          element={
            <Landing loadertext="Bringing ideas to life, one pixel at a time." />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  </>
);

reportWebVitals();
