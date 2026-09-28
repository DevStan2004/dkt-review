'use client'
import React from "react";
import GlobalContainer from "./GlobalContainer";
import GridContainer from "./GridContainer";
import FlexContainer from "./FlexContainer";
import ImageComponent from "./ImageComponent";
type Props = {};

const Diet = (props: Props) => {
  return (
    <GlobalContainer id="weight-management" className="py-20">
      <GridContainer className="lg:gap-0 gap-10">
        <FlexContainer className="md:pe-40 flex-col gap-3 lg:gap-5">
          <h3 className="text-2xl lg:text-4xl text-majorblue tracking-tighter">
            If another diet could solve it... <br />
            <span className="text-green">how many more</span> would you need to
            try?
          </h3>
          <p className="text-majorblack text-sm">
            For a lot of people, that cycle can continue for years. But weight
            can also be affected by things like appetite, hormones, sleep,
            medicines and other health conditions
          </p>
          <hr className="border-majorblack/20" />
          <p className="text-sm text-majorblack/80 uppercase">
            {" "}
            things you need to know
          </p>
          <p className="text-sm text-majorblack">
            Your sleep and stress patterns matter more than you think
          </p>
          <p className="text-sm text-majorblack">
            What works for others may not work for you.
          </p>
          <p className="text-sm text-majorblack">
            Your doctor should definitely know your family history
          </p>
        </FlexContainer>
        <FlexContainer className="w-full flex-col gap-5">
          <FlexContainer className="w-full flex-col">
            <FlexContainer className="flex-row justify-between w-full">
              <p className="text-majorblack text-sm">Eating less</p>
              <p className="text-majorblue">80% Fails</p>
            </FlexContainer>
            <div className="w-full h-15 rounded-xl overflow-hidden bg-lightgray">
              <div className="w-40 lg:w-50 h-full bg-linear-to-r from-green to-majorblue rounded-xl" />
            </div>
          </FlexContainer>
          <FlexContainer className="w-full flex-col">
            <FlexContainer className="flex-row justify-between w-full">
              <p className="text-majorblack text-sm">Cut out other food</p>
              <p className="text-majorblue">60% Fails</p>
            </FlexContainer>
            <div className="w-full h-15 rounded-xl overflow-hidden bg-lightgray">
              <div className="md:w-90  w-60 h-full bg-linear-to-r from-green to-majorblue rounded-xl" />
            </div>
          </FlexContainer>
          <FlexContainer className="w-full flex-col">
            <FlexContainer className="flex-row justify-between w-full">
              <p className="text-majorblack text-sm">Exercise more</p>
              <p className="text-majorblue">40% Fails</p>
            </FlexContainer>
            <div className="w-full h-15 rounded-xl overflow-hidden bg-lightgray">
              <div className="w-50 md:w-60 h-full bg-linear-to-r from-green to-majorblue rounded-xl" />
            </div>
          </FlexContainer>
          <FlexContainer className="w-full flex-col">
            <FlexContainer className="flex-row justify-between w-full">
              <p className="text-majorblack text-sm">Repeat next week</p>
              <p className="text-majorblue">Even Consistency Fails</p>
            </FlexContainer>
            <div className="w-full h-15 rounded-xl overflow-hidden bg-lightgray">
              <div className="md:w-120 w-70  h-full bg-linear-to-r from-green to-majorblue rounded-xl" />
            </div>
          </FlexContainer>
        </FlexContainer>
      </GridContainer>
      <ImageComponent source="Rectangle_40_magkaz" className="w-full my-10" altText="diet" />
    </GlobalContainer>
  );
};

export default Diet;
