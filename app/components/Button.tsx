"use client";

import React, { useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

import { cn } from "../lib/utils";

gsap.registerPlugin(SplitText);

type Props = {
  text: string;
  iconClass?: string;
  className?: string;
};

const Button = (props: Props) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstTextRef = useRef<HTMLParagraphElement>(null);
  const secondTextRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      if (!firstTextRef.current || !secondTextRef.current) return;

      const firstSplit = SplitText.create(firstTextRef.current, {
        type: "chars",
      });

      const secondSplit = SplitText.create(secondTextRef.current, {
        type: "chars",
      });

      // Initial state
      gsap.set(secondSplit.chars, {
        yPercent: 100,
      });

      const enter = () => {
        gsap.killTweensOf([
          firstSplit.chars,
          secondSplit.chars,
        ]);

        gsap.to(firstSplit.chars, {
          yPercent: -100,
          duration: 0.6,
          stagger: 0.025,
          ease: "power3.out",
        });

        gsap.to(secondSplit.chars, {
          yPercent: 0,
          duration: 0.6,
          stagger: 0.025,
          ease: "power3.out",
        });
      };

      const leave = () => {
        gsap.killTweensOf([
          firstSplit.chars,
          secondSplit.chars,
        ]);

        gsap.to(firstSplit.chars, {
          yPercent: 0,
          duration: 0.6,
          stagger: 0.025,
          ease: "power3.out",
        });

        gsap.to(secondSplit.chars, {
          yPercent: 100,
          duration: 0.05,
          stagger: 0.025,
          ease: "power3.out",
        });
      };

      const button = buttonRef.current;

      button?.addEventListener("mouseenter", enter);
      button?.addEventListener("mouseleave", leave);

      return () => {
        button?.removeEventListener("mouseenter", enter);
        button?.removeEventListener("mouseleave", leave);

        firstSplit.revert();
        secondSplit.revert();
      };
    },
    {
      scope: buttonRef,
    }
  );

  return (
    <button
      ref={buttonRef}
      type="button"
      className={cn(
        "rounded-full p-1 flex items-center gap-3 cursor-pointer group",
        props.className
      )}
    >
      {/* TEXT */}
      <div className="relative h-[1.25rem] overflow-hidden">
        <p
          ref={firstTextRef}
          className="whitespace-nowrap leading-[1.25rem]"
        >
          {props.text}
        </p>

        <p
          ref={secondTextRef}
          className="absolute left-0 top-0 whitespace-nowrap leading-[1.25rem]"
        >
          {props.text}
        </p>
      </div>

      {/* ICON */}
      <div
        className={cn(
          "flex items-center justify-center rounded-full",
          props.iconClass
        )}
      >
        <BsArrowRight className="-rotate-45 transition-transform duration-500 ease-in-out group-hover:-translate-x-1 group-hover:translate-y-1" />
      </div>
    </button>
  );
};

export default Button;