"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,

      // Controls the smoothness
      duration: 1.2,

      // Controls acceleration/deceleration
      easing: (t) =>
        Math.min(1, 1.001 - Math.pow(2, -10 * t)),

      smoothWheel: true,
      syncTouch: true,

      // Makes hash links work through Lenis
      anchors: true,
    });

    lenisRef.current = lenis;

    // Keep GSAP ScrollTrigger synchronized with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    // Let GSAP drive Lenis
    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);

    // Prevent GSAP's internal lag smoothing
    gsap.ticker.lagSmoothing(0);

    // Recalculate ScrollTrigger after everything mounts
    ScrollTrigger.refresh();

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(update);

      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;