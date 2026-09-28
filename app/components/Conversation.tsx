import React from "react";
import FlexContainer from "./FlexContainer";
import GlobalContainer from "./GlobalContainer";
import LightBgComponent from "./LightBgComponent";
import { imageCardData } from "../lib/data";
import ImageCard from "./ImageCard";
import GridContainer from "./GridContainer";

type Props = {};

const Conversation = (props: Props) => {
  return (
    <GlobalContainer className=" my-20">
      <FlexContainer>
        <LightBgComponent
          text="Start with the conversation."
          bgChange="bg-majorwhite text-majorblue"
          className="gap-2 text-sm me-auto"
        />
        <div className="md:w-200">
          <h6 className="text-3xl lg:text-5xl tracking-tighter">
            You Don't Have To{" "}
            <span className="font-font-family italic text-green">
              Choose A Treatment
            </span>{" "}
            Before Speaking To Us
          </h6>
        </div>
        <GridContainer gridClass="md:grid-cols-4 grid-cols-2 gap-5">
          {imageCardData.map((data, index) => (
            <ImageCard key={index} {...data} />
          ))}
        </GridContainer>
      </FlexContainer>
    </GlobalContainer>
  );
};

export default Conversation;
