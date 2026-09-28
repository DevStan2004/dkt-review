import React, { CSSProperties, forwardRef, ReactNode } from "react";
import { cn } from "../lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  clickHandler?: () => void;
};

const FlexContainer = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <div
      ref={ref}
      onClick={props.clickHandler}
      style={props.style}
      className={cn("flex", `${props.className || "flex-col gap-5"}`)}
    >
      {props.children}
    </div>
  );
});

export default FlexContainer;
