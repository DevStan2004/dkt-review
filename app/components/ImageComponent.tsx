import { CldImage } from "next-cloudinary";
import React from "react";
import { cn } from "../lib/utils";

type Props = {
  source: string;
  altText: string;
  className: string;
};

const ImageComponent = (props: Props) => {
  return (
    <CldImage
      src={props.source}
      alt={props.altText}
      width={1000}
      height={1000}
      className={props.className}
    />
  );
};

export default ImageComponent;
