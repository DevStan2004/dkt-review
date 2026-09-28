import React from "react";

import FlexContainer from "./FlexContainer";
import LightBgComponent from "./LightBgComponent";
import ImageComponent from "./ImageComponent";

type Props = {
  altText: string;
  src: string;
  text: string;
  title: string;
  description: string;
};

const ScrollTriggerComponent = (props: Props) => {
  return (
    <FlexContainer
      className="
        scrollTriggerCard
        absolute
        left-0
        flex
        flex-col
        justify-between
        rounded-3xl
        md:p-10
        p-5
        h-120
        w-full
        overflow-hidden
      "
    >
      {/* Overlay */}
      <div
        className="absolute w-full h-full left-0 top-0 z-1"
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5))",
        }}
      />

      {/* Image */}
      <ImageComponent
        source={props.src}
        altText={props.altText}
        className="top-0 left-0 w-full h-full object-cover absolute"
      />

      {/* Tag */}
      <LightBgComponent
        text={props.text}
        className="relative me-auto gap-2 text-sm z-1"
      />

      {/* Text */}
      <FlexContainer className="relative flex-col gap-5 lg:mb-0 mb-10 lg:w-1/2 z-1">
        <h6 className="text-majorwhite text-4xl lg:text-5xl">{props.title}</h6>

        <p className="text-sm text-majorwhite">{props.description}</p>
      </FlexContainer>

      {/* Bottom line */}
      <div className="w-1/2 h-0.5 bg-majorwhite absolute bottom-5 left-1/2 -translate-x-1/2 z-1">
        <div className="w-3 h-3 rounded-full bg-green absolute top-1/2 left-0 -translate-y-1/2" />
      </div>
    </FlexContainer>
  );
};

export default ScrollTriggerComponent;
