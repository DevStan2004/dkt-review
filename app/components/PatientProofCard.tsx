"use client";
import React from "react";
import FlexContainer from "./FlexContainer";
import ImageComponent from "./ImageComponent";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { cn } from "../lib/utils";

type Props = {
  altText?: string;
  imageSrc?: string;
  text?: string;
  name?: string;
  locationStatus?: string;
  tab?: string;
  videoSrc?: string;
  duration?: string; // Expects static format "0:23 / 1:04"
  audioSrc?: string;
  profile?: string;
};

// Helper function to turn "MM:SS" into total seconds
const timeToSeconds = (timeStr: string): number => {
  if (!timeStr) return 0;
  const parts = timeStr.trim().split(":");
  const minutes = parseInt(parts[0], 10) || 0;
  const seconds = parseInt(parts[1], 10) || 0; // Fixed index here
  return minutes * 60 + seconds;
};

const PatientProofCard = (props: Props) => {
  let progressPercentage = 0;
  let isPlaying = false;

  if (props.duration) {
    // Split static string "0:23 / 1:04" into ["0:23", "1:04"]
    const [currentStr, totalStr] = props.duration.split("/");

    const currentSeconds = timeToSeconds(currentStr);
    const totalSeconds = timeToSeconds(totalStr);

    // Calculate progress ratio
    if (totalSeconds > 0) {
      progressPercentage = (currentSeconds / totalSeconds) * 100;
    }

    // Toggle icon state statically based on if progress has started
    isPlaying = currentSeconds > 0;
  }

  const durationValue = `${progressPercentage}%`;

  return (
    <FlexContainer
      className={cn(
        "bg-white rounded-2xl flex-col gap-10 p-5 relative overflow-hidden",
        props.tab === "videos" ? "h-80" : "",
      )}
    >
      <ImageComponent
        source="div.framer-1p04ndn_ozqhes"
        className="w-10 relative z-10"
        altText="quote"
      />

      {/* AUDIOS TAB */}
      {props.tab === "audios" && (
        <>
          <ImageComponent
            source={props.audioSrc || ""}
            className="w-full"
            altText="quote"
          />
          <FlexContainer className="flex-row gap-3 items-center text-white">
            {isPlaying ? (
              <BsPlayFill size={20} className="relative z-1 text-majorblue" />
            ) : (
              <BsPauseFill size={20} className="relative z-1 text-majorblue" />
            )}
            <div className="w-full rounded-full h-1 bg-majorblack/20 relative">
              <div
                className="h-full bg-green relative"
                style={{ width: durationValue }}
              >
                {isPlaying && (
                  <div
                    className="w-4 h-4 bg-majorblue rounded-full absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
                    style={{ left: "100%" }}
                  />
                )}
              </div>
            </div>
          </FlexContainer>
        </>
      )}

      {props.tab === "posts" && (
        <p className="text-majorblue text-sm">"{props.text}"</p>
      )}
      <FlexContainer className="flex-col gap-5 mt-auto">
        {props.tab === "videos" && (
          <>
            <ImageComponent
              source={props.videoSrc || ""}
              className="w-full h-full absolute top-0 left-0 object-cover object-top"
              altText="quote"
            />
            <div
              className="absolute left-0 top-0 w-full h-full"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.5), transparent, rgba(0,0,0,0.5))",
              }}
            ></div>
            <FlexContainer className="flex-row gap-3 items-center text-white mt-auto relative">
              <p className="text-majorwhite/80 absolute -top-5 text-sm">{props.duration}</p>
              {isPlaying ? <BsPlayFill size={20} /> : <BsPauseFill size={20} />}
              <div className="w-full rounded-full h-1 bg-majorwhite/20 relative">
                {/* Width applied via calculated percentage */}
                <div
                  className="h-full bg-green relative"
                  style={{ width: durationValue }}
                >
                  {isPlaying && (
                    /* Statically pins the nob precisely to the right edge (100%) of the active green track */
                    <div
                      className="w-4 h-4 bg-majorwhite rounded-full absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
                      style={{ left: "100%" }}
                    />
                  )}
                </div>
              </div>
            </FlexContainer>
          </>
        )}
        <FlexContainer className="flex-row justify-between items-center mt-auto relative">
            <FlexContainer className="flex-col gap-1">
            <p
                className={cn(
                "text-sm font-lighter",
                `${props.videoSrc ? "text-green" : "text-majorblue"}`,
                )}
            >
                {props.name}
            </p>
            <p
                className={cn(
                "text-majorblack/80",
                `${props.videoSrc ? "text-majorwhite/70" : ""}`,
                )}
            >
                {props.locationStatus}
            </p>
            </FlexContainer>
            <ImageComponent
            source={props.profile || ""}
            className="w-10 h-10 rounded-full"
            altText={props.altText || ""}
            />
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default PatientProofCard;
