"use client";
import React, { useEffect, useRef } from "react";
import GlobalContainer from "./GlobalContainer";
import GridContainer from "./GridContainer";
import FlexContainer from "./FlexContainer";
import LightBgComponent from "./LightBgComponent";
import Button from "./Button";
import ImageComponent from "./ImageComponent";
import { bookingSteps } from "../lib/data";
import ScrollTriggerComponent from "./ScrollTriggerComponent";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type Props = {};

const DualAction = (props: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Replaces useEffect. It scopes all class names to just inside this component.
  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(
        ".scrollTriggerCard",
        containerRef.current,
      );

      if (!cards.length) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${cards.length * 1000}`,
          pin: true,
          scrub: 1,
        },
      });

      gsap.set(cards, {
        yPercent: 150,
        opacity: 1,
      });

      tl.to(
        cards,
        {
          yPercent: 0,
          duration: 1,
          ease: "none",
          stagger: 1.5
        },
      );
    },
    {
      scope: containerRef,
    },
  );

  return (
    <GlobalContainer className="">
      <FlexContainer>
        <GridContainer className="gap-3">
          <FlexContainer className="flex-col gap-5 md:p-10 p-5 bg-majorwhite rounded-2xl">
            <LightBgComponent
              text="The Dual-Action Treatment"
              dotBgChange="bg-majorwhite"
              bgChange="bg-green text-majorblue"
              className="gap-2 me-auto"
            />
            <FlexContainer className="flex-col gap-3">
              <h5 className="text-3xl lg:text-5xl text-majorblue tracking-tighter">
                Why is it called{" "}
                <span className="text-green italic font-font-family">
                  Dual Action?
                </span>
              </h5>
              <p className="text-sm text-green">
                Because it works in two ways to help manage appetite.
              </p>
            </FlexContainer>
            <FlexContainer className="flex-col lg:flex-row justify-between w-full py-3 border-t border-gray-100">
              <p className="uppercase text-sm text-majorblack">
                sq what can that mean for you
              </p>
              <p className="text-majorblue uppercase text-sm">read this</p>
            </FlexContainer>
            <p className="text-sm text-majorblack">
              Less hunger and feeling satisfied for longer may make it easier to
              manage how much you eat and stick with the changes needed for
              weight management over time.{" "}
              <span className="font-semibold">That's the Dual Action.</span> For
              eligible patients, a Dokitami doctor may recommend this treatment
              after assessing their health and deciding whether it may be
              suitable. But getting the treatment is only one part of the
              programme. What happens when you have a question after you start?
            </p>
            <p className="font-semibold">
              1. One action helps reduce hunger, which may make it easier to eat
              less without feeling like you're constantly fighting hunger.
            </p>
            <Button
              className="bg-majorblue text-white me-auto ps-3"
              iconClass="bg-green text-majorblue w-8 h-8"
              text="Helps Reduce Hunger"
            />
          </FlexContainer>
          <FlexContainer className="flex-col h-150 justify-end gap-10 md:p-10 p-5 relative rounded-2xl overflow-hidden">
            <ImageComponent
              altText="dual action"
              source="Close-up_of_a_solar_panel_module_jc00pk"
              className="w-full h-150 object-cover absolute top-0 left-0"
            />
            <FlexContainer className="flex-col gap-5 relative z-1">
              <p className="text-sm text-majorwhite">
                2. The other helps you fell full sooner and stay satisfied for
                longer, which may make it easier to manage how much you eat
                between meals.
              </p>
              <Button
                text="Helps You Feel Full Sooner"
                className="bg-majorblue text-white ps-3 me-auto"
                iconClass="bg-green text-majorblue w-8 h-8"
              />
            </FlexContainer>
          </FlexContainer>
        </GridContainer>
        <div className="relative">
          <div ref={containerRef} className="h-screen relative overflow-hidden">
            {bookingSteps.map((step, index) => (
              <ScrollTriggerComponent
                key={index}
                src={step.image}
                title={step.headText}
                description={step.desc}
                altText={step.desc}
                text={step.options}
              />
            ))}
          </div>
        </div>
      </FlexContainer>
    </GlobalContainer>
  );
};

export default DualAction;
