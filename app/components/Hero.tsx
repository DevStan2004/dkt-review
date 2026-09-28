"use client";
import React, { useEffect, useRef, useState } from "react";
import { heroCarouselData } from "../lib/data";
import LightBgComponent from "./LightBgComponent";
import Button from "./Button";
import ImageComponent from "./ImageComponent";
import { BsArrowLeft, BsArrowRight, BsStarFill } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { cn } from "../lib/utils";
import CarouselComponent from "./CarouselComponent";

type Props = {};

const Hero = (props: Props) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);
  const [trackIndex, setTrackIndex] = useState<number>(0);
  const [transitionBlur, setTransitionBlur] = useState<string>(
    "transition-blur duration-1000",
  );
  const [transitionTransform, setTransitionTransform] = useState<string>(
    "transition-transform duration-1000",
  );
  useEffect(() => {
    if (!carouselRef.current) return;
    const carouselWidth = carouselRef.current?.getBoundingClientRect().width;
    setWidth(carouselWidth);
  }, []);
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (trackIndex >= heroCarouselData.length - 1) {
      timeout = setTimeout(() => {
        setTransitionBlur("transition-none");
        setTransitionTransform("transition-none");
        setTrackIndex(1);
      }, 1000);
    } else if (trackIndex <= 0) {
      timeout = setTimeout(() => {
        setTransitionBlur("transition-none");
        setTransitionTransform("transition-none");
        setTrackIndex(heroCarouselData.length - 2);
      }, 1000);
    } else {
      setTransitionBlur("transition-blur duration-1000");
      setTransitionTransform("transition-transform duration-1000");
    }

    let interval = setInterval(() => {
        setTrackIndex(trackIndex + 1);
    }, 5000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [trackIndex]);

  useEffect(() => {
    if (!carouselRef.current) return;
    const currentRef = carouselRef.current;
    currentRef.style = `translateX(-${width}px)`;
  }, []);

  const right = trackIndex < heroCarouselData.length - 1;
  const left = trackIndex > 0;

  const handleNext = () => {
    if (trackIndex < heroCarouselData.length - 1) {
      setTrackIndex(trackIndex + 1);
    }
  };

  const handlePrev = () => {
    if (trackIndex > 0) {
      setTrackIndex(trackIndex - 1);
    }
  };

  return (
    <div id="home" className="flex w-full  relative">
      <div className="flex gap-3 absolute lg:bottom-25 bottom-40 right-10">
        <div
          onClick={handlePrev}
          className={cn(
            "w-10 h-10 rounded-full flex justify-center items-center text-white z-2 border-lightgreen border cursor-pointer",
            `${left ? "bg-green" : "bg-transparent"}`,
          )}
        >
          <BsArrowLeft />
        </div>
        <div
          onClick={handleNext}
          className={cn(
            "w-10 h-10 rounded-full flex justify-center items-center text-white z-2 border-lightgreen border cursor-pointer",
            `${right ? "bg-green" : "bg-transparent"}`,
          )}
        >
          <BsArrowRight />
        </div>
      </div>
      <div
        style={{
          transform: `translateX(-${trackIndex * width}px)`,
        }}
        ref={carouselRef}
        className={cn("flex w-full h-full relative", `${transitionTransform}`)}
      >
        {heroCarouselData.map((carousel, index) => {
          return (
            <CarouselComponent
              transitionBlur={transitionBlur}
              trackIndexProp={trackIndex}
              indexProp={index}
              key={index}
              carouselProp={carousel}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
