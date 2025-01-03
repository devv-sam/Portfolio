import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./Routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "lenis/dist/lenis.css";
import AnimatedCursor from "react-animated-cursor";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <div className="hidden lg:block ">
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "#000",
        }}
        outerStyle={{
          border: "2px solid #000",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          ".hover-text-container",
          "textarea",
          "button",
          ".link",
        ]}
      />{" "}
    </div>
    <BrowserRouter>
      <Nav />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  </>
);

reportWebVitals();
