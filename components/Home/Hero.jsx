'use client'
import React, { useEffect } from "react";
import "./styles/hero.css"; // stays the same

const Hero = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("./animations/heroAnimations.js")
        .then(() => console.log("Hero animations loaded"))
        .catch((err) => console.error("Animation load failed:", err));
    }
  }, []);

  return (
    <section className="sticky">
      {/* logo */}
      <div className="logo">
        <div className="col">
          <div className="block block-1"></div>
          <div className="block block-2"></div>
        </div>
        <div className="col">
          <div className="block block-3"></div>
          <div className="block block-4"></div>
        </div>
        <div className="col">
          <div className="block block-5"></div>
          <div className="block block-6"></div>
        </div>
      </div>

      {/* Cubes */}
      <div className="cubes">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div className={`cube cube${num}`} key={num}>
            <div className="front"></div>
            <div className="back"></div>
            <div className="right"></div>
            <div className="left"></div>
            <div className="top"></div>
            <div className="bottom"></div>
          </div>
        ))}
      </div>

      {/* header-1 */}
      <div>
        <h1 className="header-1">
          The first media company crafted for the digital first generation.
        </h1>
      </div>

      {/* header-2 */}
      <div className="btm-section">
        <h2 className="header-2">
          Where innovation meets precision.
        </h2>
        <p className="para">
          Symphonia unites visionary thinkers, creative architects, and
          analytical experts, collaborating seamlessly to transform challenges
          into opportunities. Together, we deliver tailored solutions that drive
          impact and inspire growth.
        </p>
      </div>
    </section>
  );
};

export default Hero;
