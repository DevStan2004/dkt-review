"use client";
import React, { useEffect, useState } from "react";
import GlobalContainer from "./GlobalContainer";
import FlexContainer from "./FlexContainer";
import LightBgComponent from "./LightBgComponent";
import { patienttProofData } from "../lib/data";
import PatientProofCard from "./PatientProofCard";
import GridContainer from "./GridContainer";
import { cn } from "../lib/utils";
type Props = {};

const PatientProof = (props: Props) => {
  const [tabNav, setTabNav] = useState<string>("posts");
  const [anonymous, setAnonymous] = useState<string>("");
  const handleTab = (tab: string) => {
    const findTab = patienttProofData.filter((data) => data.tab === tab);
    return findTab.map((data, index) => (
      <PatientProofCard key={index} {...data} />
    ));
  };
  return (
    <GlobalContainer className="mb-20">
      <FlexContainer className="lg:flex-row flex-col justify-between">
        <FlexContainer className="flex-col gap-5 md:w-1/2">
          <LightBgComponent
            text="Patient Proof"
            bgChange="bg-majorwhite text-majorblue text-sm me-auto"
            className="gap-1"
          />
          <h6 className="text-3xl lg:text-5xl text-majorblue tracking-tighter">
            What Dokitami Patients Say About{" "}
            <span className="font-font-family italic text-green">
              Their Experience
            </span>
          </h6>
          <p className="text-green text-sm">
            Individual results vary.{" "}
            <span className="text-majorblue">
              No specific weight-loss result is guaranteed.
            </span>
          </p>
        </FlexContainer>
        <FlexContainer className="flex-row gap-5 items-center">
          <p className="text-sm text-majorblack/80">View Anonymous</p>
          <div
            onClick={() =>
              setAnonymous((prev) => (prev === "audios" ? "" : "audios"))
            }
            className="w-15 lg:w-20 h-5 lg:h-8 bg-lightgray rounded-full cursor-pointer relative"
          >
            <div
              className={cn(
                "bg-majorwhite rounded-full lg:w-12 w-8 h-4 md:h-6.5 shadow absolute top-1/2 -translate-y-1/2",
                `${anonymous === "audios" ? "right-1" : "left-1"}`,
              )}
            />{" "}
          </div>
        </FlexContainer>
      </FlexContainer>
      <FlexContainer className="flex-row justify-around border-b border-lightgray">
        <p
          onClick={() => {
            if (anonymous === "audios") {
              return;
            } else {
              setTabNav("posts");
            }
          }}
          className={cn(
            "text-majorblack text-sm p-3",
            `${anonymous !== "audios" && tabNav === "posts" ? "text-majorblue border-b-2 border-majorblue" : ""}`,
          )}
        >
          Posts
        </p>
        <p
          onClick={() => {
            if (anonymous === "audios") {
              return;
            } else {
              setTabNav("videos");
            }
          }}
          className={cn(
            "text-majorblack text-sm p-3",
            `${anonymous !== "audios" && tabNav === "videos" ? "text-majorblue border-b-2 border-majorblue" : ""}`,
          )}
        >
          Videos
        </p>
        <p
          onClick={() => {
            if (anonymous === "audios") {
              return;
            } else {
              setTabNav("audios");
            }
          }}
          className={cn(
            "text-majorblack text-sm p-3",
            `${tabNav === "audios" ? "text-majorblue border-b-2 border-majorblue" : anonymous === "audios" ? "text-majorblue border-b-2 border-majorblue" : ""}`,
          )}
        >
          Audios
        </p>
      </FlexContainer>
      <GridContainer gridClass="lg:grid-cols-3 md:grid-cols-2 gap-3 lg:items-start md:mt-20 mt-10">
        {handleTab(anonymous || tabNav)}
      </GridContainer>
    </GlobalContainer>
  );
};

export default PatientProof;
