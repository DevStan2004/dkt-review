import React from "react";
import FlexContainer from "./FlexContainer";
import { cn } from "../lib/utils";
import Button from "./Button";

type Props = {
  title?: string;
  description?: string;
  isWhite?: boolean;
  button?: string;
  linkTitle?: string;
};

const ProgrammesCard = (props: Props) => {
  return (
    <FlexContainer
      className={cn(
        "p-5 rounded-2xl flex-col gap-5",
        `${props.isWhite ? "bg-majorwhite" : "bg-majorwhite/20"}`,
      )}
    >
      <h6
        className={cn(
          "text-xl lg:text-3xl lg:text-4xl tracking-tighter",
          `${props.isWhite ? "text-majorblue" : "text-green"}`,
        )}
      >
        <span className={cn("", `${props.isWhite ? "" : "text-majorwhite"}`)}>
          +
        </span>{" "}
        {props.title}
        {props.isWhite && (
          <span className="text-green italic font-font-family">
            {" "}
            {props.linkTitle}
          </span>
        )}
      </h6>
      <p
        className={cn(
          "text-sm",
          `${props.isWhite ? "text-majorblue" : "text-majorwhite"}`,
        )}
      >
        {props.description}
      </p>
      {props.button && (
        <Button
          text={props.button}
          className="text-majorblue bg-green ps-3 mt-auto me-auto"
          iconClass="w-8 h-8 bg-majorblue text-green"
        />
      )}
    </FlexContainer>
  );
};

export default ProgrammesCard;
