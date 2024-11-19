import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../Components/Landing";
import Portfolio from "../Pages/Portfolio";
import Bento from "../Pages/Bento";
import ProjectPage from "../Pages/ProjectPage";
function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="/bento" element={<Bento />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
