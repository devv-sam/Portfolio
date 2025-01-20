import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./Routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "lenis/dist/lenis.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Nav />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  </>
);

reportWebVitals();
