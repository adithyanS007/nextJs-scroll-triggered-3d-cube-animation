'use client'
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "@studio-freight/lenis";
import "./styles/hero.css";
import { cubeData } from "./cubeData";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const stickyRef = useRef(null);
  const logoRef = useRef(null);
  const cubesRef = useRef(null);
  const header1Ref = useRef(null);
  const header2Ref = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  const sticky = stickyRef.current;
  const logo = logoRef.current;
  const cubes = cubesRef.current;
  const header1 = header1Ref.current;
  const header2 = header2Ref.current;
  const paragraph = paragraphRef.current;

  const stickyHeight = window.innerHeight * 4;

  const cubeFaces = cubes.querySelectorAll(".cube > div");
  let imageCounter = 1;
  
  // Add images to the cube faces dynamically
  cubeFaces.forEach((face) => {
    const img = document.createElement("img");
    img.src = `/assets/img${imageCounter}.jpeg`; // Ensure this path is correct and images are present
    img.alt = `Cube Image ${imageCounter}`;
    face.appendChild(img);
    imageCounter++;

  });

  const interpolate = (start, end, progress) => {
    return start + (end - start) * progress;
  };

  ScrollTrigger.create({
    trigger: sticky,
    start: "top top",
    end: `+=${stickyHeight}px`,
    scrub: 1,
    pin: true,
    pinSpacing: true,
    onUpdate: (self) => {
      const initialProgress = Math.min(self.progress * 20, 1);
      logo.style.filter = `blur(${interpolate(0, 20, initialProgress)}px)`;

      const logoOpacityProgress = self.progress >= 0.2 ? Math.min((self.progress - 0.02) * 100, 1) : 0;
      logo.style.opacity = 1 - logoOpacityProgress;

      const cubesOpacityProgress = self.progress > 0.01 ? Math.min((self.progress - 0.01) * 100, 1) : 0;
      cubes.style.opacity = cubesOpacityProgress;

      const header1Progress = Math.min(self.progress * 2.5, 1);
      header1.style.transform = `translate(-50%, -50%) scale(${interpolate(1, 1.5, 1)})`;
      header1.style.filter = `blur(${interpolate(0, 20, header1Progress)}px)`;
      header1.style.opacity = 1 - header1Progress;

      const header2StartProgress = (self.progress - 0.4) * 10;
      const header2Progress = Math.max(0, Math.min(header2StartProgress, 1));
      const header2Scale = interpolate(0.75, 1, header2Progress);
      const header2Blur = interpolate(10, 0, header2Progress);

      header2.style.transform = `translate(-50%, -50%) scale(${header2Scale})`;
      header2.style.filter = `blur(${header2Blur}px)`;
      header2.style.opacity = header2Progress;

      const firstPhaseProgress = Math.min(self.progress * 2, 1);
      const secondPhaseProgress = self.progress >= 0.5 ? (self.progress - 0.5) * 2 : 0;

      Object.entries(cubeData).forEach(([cubeClass, data]) => {
        const cube = cubes.querySelector(`.${cubeClass}`);
        if (!cube) return;

        const { initial, final } = data;

        const currentTop = interpolate(initial.top, final.top, firstPhaseProgress);
        const currentLeft = interpolate(initial.left, final.left, firstPhaseProgress);
        const currentRotateX = interpolate(initial.rotateX, final.rotateX, firstPhaseProgress);
        const currentRotateY = interpolate(initial.rotateY, final.rotateY, firstPhaseProgress);
        const currentRotateZ = interpolate(initial.rotateZ, final.rotateZ, firstPhaseProgress);
        const currentZ = interpolate(initial.z, final.z, firstPhaseProgress);

        let additionalRotation = 0;
        if (cubeClass === "cube2") {
          additionalRotation = interpolate(0, 180, secondPhaseProgress);
        } else if (cubeClass === "cube4") {
          additionalRotation = interpolate(0, -180, secondPhaseProgress);
        }

        cube.style.top = `${currentTop}%`;
        cube.style.left = `${currentLeft}%`;
        cube.style.transform = `translate3d(-50%, -50%, ${currentZ}px)
          rotateX(${currentRotateX}deg)
          rotateY(${currentRotateY + additionalRotation}deg)
          rotateZ(${currentRotateZ}deg)`;
      });
    },
  });

  if (paragraph) {
    paragraph.style.opacity = 0;
    paragraph.style.position = 'absolute';
    paragraph.style.top = 'calc(100% + 20px)';

    ScrollTrigger.create({
      trigger: header2,
      start: "bottom bottom",
      onEnter: () => {
        gsap.to(paragraph, {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          y: 20,
          duration: 1,
          ease: "power1.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(paragraph, {
          opacity: 0,
          scale: 0.75,
          filter: "blur(10px)",
          y: 0,
          duration: 1,
          ease: "power1.out",
        });
      },
    });
  }
}, []);


  return (
  <section ref={stickyRef} className="sticky">
    {/* Logo */}
    <div ref={logoRef} className="logo">
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
    <div ref={cubesRef} className="cubes">
      <div className="cube cube1">
        <div className="front"></div>
        <div className="back"></div>
        <div className="left"></div>
        <div className="right"></div>
        <div className="top"></div>
        <div className="bottom"></div>
      </div>
      <div className="cube cube2">
        <div className="front"></div>
        <div className="back"></div>
        <div className="left"></div>
        <div className="right"></div>
        <div className="top"></div>
        <div className="bottom"></div>
      </div>
      <div className="cube cube3">
        <div className="front"></div>
        <div className="back"></div>
        <div className="left"></div>
        <div className="right"></div>
        <div className="top"></div>
        <div className="bottom"></div>
      </div>
      <div className="cube cube4">
        <div className="front"></div>
        <div className="back"></div>
        <div className="left"></div>
        <div className="right"></div>
        <div className="top"></div>
        <div className="bottom"></div>
      </div>
      <div className="cube cube5">
        <div className="front"></div>
        <div className="back"></div>
        <div className="left"></div>
        <div className="right"></div>
        <div className="top"></div>
        <div className="bottom"></div>
      </div>
      <div className="cube cube6">
        <div className="front"></div>
        <div className="back"></div>
        <div className="left"></div>
        <div className="right"></div>
        <div className="top"></div>
        <div className="bottom"></div>
      </div>
    </div>

    {/* Header-1 */}
    <div>
      <h1 ref={header1Ref} className="header-1">
        The first media company crafted for the digital first generation.
      </h1>
    </div>

    {/* Header-2 and Paragraph */}
    <div className="btm-section">
      <h2 ref={header2Ref} className="header-2">
        Where innovation meets precision.
      </h2>
      <p ref={paragraphRef} className="para">
        Symphonia unites visionary thinkers, creative architects, and analytical experts,
        collaborating seamlessly to transform challenges into opportunities. Together,
        we deliver tailored solutions that drive impact and inspire growth.
      </p>
    </div>
  </section>
);

};

export default Hero;
