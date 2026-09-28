"use client";
import React, { useState } from "react";
import GlobalContainer from "./GlobalContainer";
import GridContainer from "./GridContainer";
import FlexContainer from "./FlexContainer";
import LightBgComponent from "./LightBgComponent";
import ImageComponent from "./ImageComponent";
import Accordion from "./Accordion";
import { faqAccordionData } from "../lib/data";

type Props = {};

const FAQ = (props: Props) => {
  const [active, setActive] = useState<string>('Is the consultation really free?')
  return (
    <GlobalContainer id="faq" className="">
      <GridContainer>
        <FlexContainer>
          <LightBgComponent
            text="Frequently Asked Questions"
            bgChange="bg-majorwhite text-majorblue"
            className="me-auto gap-2 text-sm"
          />
          <h6 className="text-majorblue text-4xl lg:text-5xl">
            Still Have Questions?{" "}
            <span className="text-green font-font-family italic">
              Let's Answer Them{" "}
            </span>
          </h6>
          <ImageComponent
            source="ChatGPT_Image_Sep_18_2026_12_21_57_PM_1_iswrap"
            className="w-full"
            altText="faq image"
          />
        </FlexContainer>
        <FlexContainer className="py-5 flex-col">
          {faqAccordionData.map((data, index) => (
            <Accordion setActive={setActive} active={active} key={index} accordionProp={data} />
          ))}
        </FlexContainer>
      </GridContainer>
    </GlobalContainer>
  );
};

export default FAQ;
