import React, { ReactNode } from "react";
import { cn } from "../lib/utils";

type Props = {
  gridClass?: string;
  className?: string;
  children: ReactNode;
};

const GridContainer = (props: Props) => {
  return (
    <div
      className={cn(`grid ${props.gridClass || "md:grid-cols-2"}`, props.className)}
    >
      {props.children}
    </div>
  );
};

export default GridContainer;
