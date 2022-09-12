import React from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/pages/Home/Home";
import Services from "./components/pages/Services/Services";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import NavBar from "./components/layout/NavBar/NavBar";
import Footer from "./components/layout/Footer/Footer";
import Error from "./components/pages/Error/Error";

function App() {
  const location = useLocation();
  const currentPathName = location.pathname;

  const greenBg = "greenGradient";
  const pinkBg = "pinkGradient";
  const purpleBg = "purpleGradient";
  const yellowBg = "yellowGradient";
  let currentBgColor;

  if (currentPathName === "/home" || "/" || "/*") {
    currentBgColor = purpleBg;
  }

  if (currentPathName === "/about") {
    currentBgColor = pinkBg;
  }
  if (currentPathName === "/services") {
    currentBgColor = yellowBg;
  }
  if (currentPathName === "/contact") {
    currentBgColor = greenBg;
  }

  return (
    <div className={currentBgColor}>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
