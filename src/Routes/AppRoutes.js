import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Portfolio from "../Pages/Portfolio";
import About from "../Pages/About";
import ProjectPage from "../Pages/ProjectPage";
function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
