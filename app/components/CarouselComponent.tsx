"use client";
import React from "react";
import { cn } from "../lib/utils";
import LightBgComponent from "./LightBgComponent";
import { BsStarFill } from "react-icons/bs";
import ImageComponent from "./ImageComponent";
import Button from "./Button";
import FlexContainer from "./FlexContainer";
import { GoDotFill } from "react-icons/go";

interface carouselType {
  image?: string;
  options?: string;
  headText?: string;
  desc?: string;
  button?: string;
  how?: string;
  patientsCaredForNum?: number;
  patientsCaredForText?: string;
  medicalSupportNum?: string;
  medicalSupportText?: string;
  programsAmount?: number;
  programsText?: string;
  consultationSub?: string;
  consultationText?: string;
  isDifferent?: boolean;
  different?: boolean;
}

type Props = {
  trackIndexProp?: number;
  indexProp?: number;
  carouselProp: carouselType;
  transitionBlur?: string;
};

const CarouselComponent = (props: Props) => {
  const escapeRegExp = (string: string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };
  const highlightHeadText = (text: string) => {
    const targets = [
      "what works?",
      "Everyone Talks About.",
      "Staying Satisfied is Another.",
    ];

    const target = targets.find((t) => text.includes(t));
    if (!target) return text;

    // Escape the target phrase before passing it into RegExp
    const escapedTarget = escapeRegExp(target);
    const parts = text.split(new RegExp(`(${escapedTarget})`, "g"));

    return parts.map((part, index) =>
      part === target ? (
        <span
          key={index}
          className="text-green italic font-font-family tracking-tighter"
        >
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  const highlightText = (text: string) => {
    const targets = [
      "Medical Weight Management may be one of them.",
      "The treatment name you heart the most isn't the only one worth talking about.",
      "One action helps reduce hunger while the other helps you feel full and stay satisfied longer.",
      "Start with a FREE virtual consultation with a Dokitami doctor."
    ];
    const target = targets.find((t) => text.includes(t));
    if (!target) return text;
    const escapeTarget = escapeRegExp(target);
    const parts = text.split(new RegExp(`(${escapeTarget})`, "g"));
    return parts.map((part, index) =>
      part === target ? (
        <span key={index} className="text-green tracking-tighter">
          {part}
        </span>
      ) : (
        part
      ),
    );
  };
  return (
    <div
      className={cn(
        "flex flex-col justify-between w-full px-5 md:px-10 pb-3 pt-10 shrink-0 relative transition-blur duration-1000",
        `${props.trackIndexProp === props.indexProp ? `${props.transitionBlur}` : "blur-2xl"} ${props.carouselProp.different ? "rounded-3xl overflow-hidden" : ""}`,
      )}
    >
      <FlexContainer className="lg:flex-row flex-col lg:justify-between items-center lg:items-end ">
        <LightBgComponent
          text={props.carouselProp.options ?? ""}
          className="relative z-2 me-auto gap-3 mt-10"
        />
        <div className="flex flex-col items-center lg:items-end gap-1 relative z-1">
          <p className="uppercase text-majorwhite flex items-center text-sm">
            assessment <GoDotFill className="text-[10px]" /> recommendation
          </p>
          <p className="uppercase text-majorwhite flex items-center text-sm">
            delivery - support
          </p>
        </div>
      </FlexContainer>
      <div className="w-full h-full absolute left-0 top-0 bg-linear-to-t from-black to-transparent z-1 " />
      <ImageComponent
        source={props.carouselProp.image ?? ""}
        className="w-full h-full absolute top-0 left-0 object-cover"
        altText="first image"
      />
      <div className="flex justify-between items-center">
        <LightBgComponent text={props.carouselProp.options ?? ""} />
      </div>
      <div className="text-majorwhite flex flex-col gap-5 relative z-1">
        <h1 className="lg:text-6xl text-3xl font-extralight tracking-tighter lg:w-[70%]">
          {highlightHeadText(props.carouselProp.headText ?? "")}
        </h1>
        <p className="text-majorwhite text-sm  md:w-1/2">
          {highlightText(props.carouselProp.desc ?? "")}
        </p>
        {props.carouselProp.isDifferent ? null : (
          <>
            <div
              className={cn(
                "flex flex-wrap items-center gap-5 w-full border-b border-white/10 py-5",
                `${props.carouselProp.different ? "border-none" : ""}`,
              )}
            >
              <div className="flex items-center gap-2 flex-wrap">
                <Button
                  text={props.carouselProp.button ?? ""}
                  className="bg-green text-majorblue text-[10px] lg:text-sm ps-3"
                  iconClass="bg-majorblue text-majorwhite w-7 h-7"
                />
                <div className="py-2 px-3 rounded-full border border-white/50">
                  {props.carouselProp.how}
                </div>
              </div>
              {props.carouselProp.different ? null : (
                <div className="flex items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => {
                    const Icon = () => {
                      if (index === 4) {
                        return (
                          <div className="w-7 h-7 rounded-full bg-green/20 flex justify-center items-center">
                            <BsStarFill className="text-green" />
                          </div>
                        );
                      } else {
                        return <BsStarFill className="text-lightgreen" />;
                      }
                    };
                    return (
                      <React.Fragment key={index}>{Icon()}</React.Fragment>
                    );
                  })}
                </div>
              )}
            </div>
            {props.carouselProp.different ? null : (
              <div className="flex justify-between gap-2">
                <div className="flex flex-col flex-1">
                  <h2 className="text-majorwhite text-xl lg:text-3xl">
                    {props.carouselProp.patientsCaredForNum}+
                  </h2>
                  <p className="text-[10px] lg:text-sm text-majorwhite/50">
                    {props.carouselProp.patientsCaredForText}
                  </p>
                </div>
                <div className="flex flex-col flex-1">
                  <h2 className="text-majorwhite text-xl lg:text-3xl">
                    {props.carouselProp.medicalSupportNum}
                  </h2>
                  <p className="text-[10px] lg:text-sm text-majorwhite/50">
                    {props.carouselProp.medicalSupportText}
                  </p>
                </div>
                <div className="flex flex-col flex-1">
                  <h2 className="text-majorwhite text-xl lg:text-3xl">
                    ₦
                    {(props.carouselProp.programsAmount ?? "").toLocaleString()}
                  </h2>
                  <p className="text-[10px] lg:text-sm text-majorwhite/50">
                    {props.carouselProp.programsText}
                  </p>
                </div>
                <div className="flex flex-col flex-1">
                  <h2 className="text-majorwhite text-xl lg:text-3xl uppercase">
                    {props.carouselProp.consultationSub}
                  </h2>
                  <p className="text-[10px] lg:text-sm text-majorwhite/50">
                    {props.carouselProp.consultationText}
                  </p>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CarouselComponent;
