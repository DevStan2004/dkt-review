import React from "react";
import GlobalContainer from "./GlobalContainer";
import FlexContainer from "./FlexContainer";
import GridContainer from "./GridContainer";
import LightBgComponent from "./LightBgComponent";
import Button from "./Button";

type Props = {};

const DoctorSupport = (props: Props) => {
  return (
    <GlobalContainer className="">
      <FlexContainer className="bg-majorwhite flex-col gap-5 md:p-10 p-5 rounded-3xl mt-10">
        <GridContainer className="gap-10" gridClass="md:grid-cols-3">
          <FlexContainer className="flex-col gap-5 col-span-2">
            <LightBgComponent
              text="Ongoing Doctor Support"
              className="gap-2 me-auto"
              dotBgChange="bg-majorwhite"
              bgChange="bg-green text-majorblue"
            />
            <h6 className="text-2xl tracking-tighter lg:text-5xl text-majorblue">
              Your Treatment Arrives. What Happens When You Have A Question{" "}
              <span className="text-green font-font-family italic">
                Three Days Later?
              </span>
            </h6>
          </FlexContainer>
          <FlexContainer>
            <p className="text-sm text-majorblack">
              You shouldn't have to search TikTok, Google or someone else's experience and hope the answer applies to you. <br />{" "}
              <span className="font-semibold text-green">
                With Dokitami, your doctor stays involved
              </span>{" "}
              throughout your programme to check how you're doing, answer
              questions and review your treatment when needed. <br /> So how do
              you get started?
            </p>
            <Button
              text="FREE virtual doctor consultation"
              className="text-white bg-majorblue ps-3 me-auto text-sm"
              iconClass="bg-green text-blue w-8 h-8"
            />
          </FlexContainer>
        </GridContainer>
        <GridContainer gridClass="grid-cols-6 border-b border-lightgray py-2">
          <p className="uppercase text-majorblack lg:text-sm text-[10px]">Week 1</p>
          <p className="uppercase text-majorblack lg:text-sm text-[10px]">Week 2</p>
          <p className="uppercase text-majorblack lg:text-sm text-[10px]">Week 3</p>
          <p className="uppercase text-majorblack lg:text-sm text-[10px]">Week 4</p>
          <p className="uppercase text-majorblack lg:text-sm text-[10px]">Week 5</p>
          <p className="uppercase text-majorblack lg:text-sm text-[10px]">Week 6</p>
        </GridContainer>
        <FlexContainer>
          <FlexContainer className="flex-row justify-between rounded-xl bg-lightgreen items-center p-3 md:w-[calc((100%/4.6))] w-[calc(62.5%)]">
            <p className="text-majorblue text-[10px] lg:text-sm font-extralight">
              Doctor Assessment
            </p>
            <p className="text-majorblack text-[10px] lg:text-sm font-semibold">1-2 DAYS</p>
          </FlexContainer>
          <FlexContainer className="flex-row justify-between rounded-xl bg-lightgray items-center p-3 lg:w-[calc((100%/1.2))] w-[calc((100%/1.2))] ms-auto">
            <p className="text-majorblue text-[10px] lg:text-sm font-extralight">
              Ongoing Doctor Support
            </p>
            <p className="text-majorblack text-[10px] lg:text-sm ">THROUGHOUT</p>
          </FlexContainer>
          <FlexContainer className="flex-row justify-between rounded-xl bg-lightgray items-center p-3 md:w-[calc((100%/2.3))] w-[calc(62.6%)] mx-auto md:ms-95 ms-20">
            <p className="text-majorblue text-[10px] lg:text-sm font-extralight">
              Virtual Consultations
            </p>
            <p className="text-majorblack text-[10px] lg:text-sm ">2-3 WEEKS</p>
          </FlexContainer>
          <FlexContainer className="flex-row justify-between rounded-xl bg-green items-center p-3 md:w-[calc((100%/4.8))] w-[calc((100%/1.9))] lg:ms-200 ms-30">
            <p className="text-majorblue text-[10px] lg:text-sm font-extralight">
              Treatment Delivery
            </p>
            <p className="text-majorblack text-[10px] lg:text-sm font-semibold">1 DAY</p>
          </FlexContainer>
          <FlexContainer className="flex-row justify-between rounded-xl bg-lightgray items-center p-3 md:w-[calc((100%/4.6))] w-[calc((100%/1.7))] ms-auto lg:me-0">
            <p className="text-majorblue text-[10px] lg:text-sm font-extralight">
              Inspect & Follow-up
            </p>
            <p className="text-majorblack text-[10px] lg:text-sm font-semibold">5-8 DAYS</p>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </GlobalContainer>
  );
};

export default DoctorSupport;
