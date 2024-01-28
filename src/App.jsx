// import Navbar from "./components/Navbar";
import "./App.css";
import { Route, Router } from "react-router-dom";
import Home from "./pages/Home";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import Particle from "./components/Particle";

function App() {
  return (
    <>
      <Particle />
      <Home />
      <AnimatedCursor
        innerSize={10}
        outerSize={8}
        color="238, 0, 255"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "button",
          "textarea",
          ".link",
        ]}
      />
    </>
  );
}

export default App;
