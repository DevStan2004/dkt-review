import React from "react";
import GlobalContainer from "./GlobalContainer";
import FlexContainer from "./FlexContainer";
import GridContainer from "./GridContainer";
import LightBgComponent from "./LightBgComponent";
import Button from "./Button";
import { programsCardData } from "../lib/data";
import ProgrammesCard from "./ProgrammesCard";

type Props = {};

const Programmes = (props: Props) => {
  return (
    <GlobalContainer className="my-20">
      <FlexContainer className="flex flex-col gap-5 bg-majorblue md:p-10 p-5 rounded-3xl">
        <GridContainer>
          <FlexContainer>
            <LightBgComponent
              text="Affordability + Value"
              className="gap-2 me-auto text-sm"
            />
            <h6 className="text-2xl lg:text-5xl tracking-tighter text-majorwhite">
              Programmes{" "}
              <span className="text-green italic font-font-family">
                Start From ₦250,000.
              </span>{" "}
              So What Can That Include?
            </h6>
          </FlexContainer>
          <FlexContainer>
            <p className="text-majorwhite/80 lg:text-md text-sm">
              Some of the popular treatments people hear about online can make
              medical weight management feel out of reach. But the treatment
              name you hear most isn't the only option worth asking about.
              Dokitami medical weight management programs work better and cost
              less.
            </p>
            <Button
              text="Start from ₦250,000"
              iconClass="bg-majorblue text-green w-8 h-8"
              className="bg-green text-majorblue ps-3 me-auto mt-auto text-sm"
            />
          </FlexContainer>
        </GridContainer>
        <GridContainer gridClass="md:grid-cols-3 gap-5">
          {programsCardData.map((cardData, index) => (
            <ProgrammesCard key={index} {...cardData!} />
          ))}
        </GridContainer>
      </FlexContainer>
    </GlobalContainer>
  );
};

export default Programmes;
