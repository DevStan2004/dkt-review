"use client";
import React from "react";
import FlexContainer from "./FlexContainer";
import ImageComponent from "./ImageComponent";
import { BiPlus } from "react-icons/bi";
import { cn } from "../lib/utils";
import Button from "./Button";

type Props = {
  src: string;
  num: number;
  title: string;
  description: string;
  isButton?: boolean;
  buttonFirstText?: string;
  buttonSecondText?: string;
  buttonClass?: string;
};

const Card = (props: Props) => {
  return (
    <FlexContainer
      className={cn(
        "flex-col gap-3 p-1 rounded-2xl",
        `${props.isButton ? "bg-majorblue" : "bg-majorwhite"}`,
      )}
    >
      <ImageComponent
        source={props.src}
        altText=""
        className="w-full rounded-2xl h-70 object-cover"
      />
      <FlexContainer className="flex-col gap-2 p-3">
        <p
          className={cn(
            "text-[10px]",
            `${props.isButton ? "text-green" : "text-majorblack"}`,
          )}
        >
          0{props.num}
        </p>
        <FlexContainer className="flex-row items-center gap-1">
          <BiPlus className="text-green text-sm" />
          {props.isButton ? (
          <p className="text-xl lg:text-3xl font-semibold text-white">
              {props.buttonFirstText}{" "}
              <span className="text-green">{props.buttonSecondText}</span>
            </p>
          ) : (
            <p className="text-xl text-majorblue font-semibold">
              {props.title}
            </p>
          )}
        </FlexContainer>
        {props.isButton ? (
          <Button
            iconClass="bg-majorblue text-green w-8 h-8"
            text="Find out what my options are"
            className={cn(
              "bg-green text-majorblue py-2 ps-3 text-sm mt-auto me-auto",
              props.buttonClass,
            )}
          />
        ) : (
          <p className="text-sm text-majorblack">{props.description}</p>
        )}
      </FlexContainer>
    </FlexContainer>
  );
};

export default Card;
