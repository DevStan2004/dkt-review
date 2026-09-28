"use client";

import React, { useRef } from "react";

import GlobalContainer from "./GlobalContainer";
import LightBgComponent from "./LightBgComponent";
import FlexContainer from "./FlexContainer";

import { teamData } from "../lib/data";
import TeamCard from "./TeamCard";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {};

const Team = (props: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const track = trackRef.current;
      const firstSet = firstSetRef.current;

      if (!container || !track || !firstSet) return;

      // --------------------------------
      // SETTINGS
      // --------------------------------

      // Normal marquee speed.
      // Increase this to make the marquee faster.
      const BASE_SPEED = 60;

      // Maximum additional speed caused by scrolling.
      const MAX_SCROLL_BOOST = 160;

      // How strongly scroll velocity affects the marquee.
      const SCROLL_SENSITIVITY = 0.05;

      // How quickly the current speed catches
      // up with the target speed.
      const SPEED_LERP = 0.16;

      // How long after the last scroll event
      // before returning to normal speed.
      const IDLE_DELAY = 80;

      // --------------------------------
      // STATE
      // --------------------------------

      const state = {
        x: 0,

        // -1 = move left
        //  1 = move right
        direction: -1,

        // Current actual speed.
        speed: BASE_SPEED,

        // Speed we want to reach.
        targetSpeed: BASE_SPEED,

        // Width of one complete set.
        width: firstSet.offsetWidth,

        // Last time scrolling was detected.
        lastScrollTime: performance.now(),
      };

      // --------------------------------
      // GSAP SETUP
      // --------------------------------

      const setX = gsap.quickSetter(track, "x", "px");

      gsap.set(track, {
        x: 0,
        willChange: "transform",
      });

      // --------------------------------
      // UPDATE WIDTH
      // --------------------------------

      const updateWidth = () => {
        state.width = firstSet.offsetWidth;
      };

      const resizeObserver = new ResizeObserver(updateWidth);

      resizeObserver.observe(firstSet);

      // --------------------------------
      // CONTINUOUS MARQUEE
      // --------------------------------

      const ticker = (
        _time: number,
        deltaTime: number,
      ) => {
        if (!state.width) return;

        const delta = deltaTime / 1000;

        // --------------------------------
        // RETURN TO NORMAL SPEED
        // AFTER USER STOPS SCROLLING
        // --------------------------------

        if (
          performance.now() - state.lastScrollTime >
          IDLE_DELAY
        ) {
          state.targetSpeed = BASE_SPEED;
        }

        // --------------------------------
        // SMOOTH SPEED CHANGE
        // --------------------------------

        state.speed +=
          (state.targetSpeed - state.speed) *
          SPEED_LERP;

        // --------------------------------
        // MOVE MARQUEE
        // --------------------------------

        state.x +=
          state.direction *
          state.speed *
          delta;

        // --------------------------------
        // INFINITE LOOP
        // --------------------------------

        // Moving LEFT
        if (
          state.direction === -1 &&
          state.x <= -state.width
        ) {
          state.x += state.width;
        }

        // Moving RIGHT
        if (
          state.direction === 1 &&
          state.x >= 0
        ) {
          state.x -= state.width;
        }

        setX(state.x);
      };

      gsap.ticker.add(ticker);

      // --------------------------------
      // SCROLL INFLUENCE
      // --------------------------------

      const scrollTrigger = ScrollTrigger.create({
        trigger: container,

        start: "top bottom",
        end: "bottom top",

        onUpdate: (self) => {
          const velocity = self.getVelocity();

          state.lastScrollTime = performance.now();

          // --------------------------------
          // CHANGE DIRECTION
          // --------------------------------

          if (velocity > 0) {
            // Scrolling DOWN
            state.direction = -1;
          } else if (velocity < 0) {
            // Scrolling UP
            state.direction = 1;
          }

          // --------------------------------
          // SCROLL SPEED BOOST
          // --------------------------------

          const scrollBoost = Math.min(
            Math.abs(velocity) *
              SCROLL_SENSITIVITY,
            MAX_SCROLL_BOOST,
          );

          state.targetSpeed =
            BASE_SPEED + scrollBoost;
        },
      });

      // --------------------------------
      // CLEANUP
      // --------------------------------

      return () => {
        gsap.ticker.remove(ticker);

        scrollTrigger.kill();

        resizeObserver.disconnect();
      };
    },
    {
      scope: containerRef,
    },
  );

  return (
    <GlobalContainer
      id="medical-team"
      className=""
    >
      {/* -------------------------------- */}
      {/* HEADER */}
      {/* -------------------------------- */}

      <FlexContainer className="flex-col gap-5 lg:w-1/2">
        <LightBgComponent
          text="The Team"
          bgChange="bg-majorwhite text-majorblue text-sm me-auto"
          className="gap-1"
        />

        <h6 className="text-3xl lg:text-5xl text-majorblue tracking-tighter">
          <span className="font-font-family italic text-green">
            A World-Class Team
          </span>{" "}
          Dedicated to Your Medical Weight Management
        </h6>

        <p className="text-green text-sm">
          Individual results vary.{" "}
          <span className="text-majorblue">
            No specific weight-loss result is guaranteed.
          </span>
        </p>
      </FlexContainer>

      {/* -------------------------------- */}
      {/* MARQUEE */}
      {/* -------------------------------- */}

      <div
        ref={containerRef}
        className="relative my-10 w-full overflow-hidden"
      >
        <div
          ref={trackRef}
          className="flex w-max items-center"
        >
          {/* -------------------------------- */}
          {/* FIRST SET */}
          {/* -------------------------------- */}

          <div
            ref={firstSetRef}
            className="flex w-max shrink-0 items-center gap-5 pr-5"
          >
            {teamData.map((data, index) => (
              <div
                key={`first-${index}`}
                className="flex w-max shrink-0 items-center gap-5"
              >
                <h6 className="text-5xl font-bold shrink-0">
                  {data.rareStatus}
                </h6>

                <TeamCard {...data} />
              </div>
            ))}
          </div>

          {/* -------------------------------- */}
          {/* DUPLICATE SET */}
          {/* -------------------------------- */}

          <div className="flex w-max shrink-0 items-center gap-5 pr-5">
            {teamData.map((data, index) => (
              <div
                key={`second-${index}`}
                className="flex w-max shrink-0 items-center gap-5"
              >
                <h6 className="text-5xl font-bold shrink-0">
                  {data.rareStatus}
                </h6>

                <TeamCard {...data} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </GlobalContainer>
  );
};

export default Team;