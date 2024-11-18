import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../Components/Landing";
import Portfolio from "../Pages/Portfolio";
import About from "../Components/About";
function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
