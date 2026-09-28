import { getCldImageUrl } from "next-cloudinary";
import React from "react";
import FlexContainer from "./FlexContainer";

type Props = {
  src: string;
  communicationMeans: string;
  hours: string;
  name: string;
};

const ImageCard = (props: Props) => {
    const bgUrl = getCldImageUrl({
        src: props.src, 
    })
  return (
    <FlexContainer
      className="w-full h-100 flex flex-col justify-end gap-1 rounded-xl p-3"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7), transparent), url(${bgUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <p className="text-green uppercase text-sm">{props.communicationMeans}</p>
      <p className="text-majorwhite uppercase text-sm">{props.name}</p>
      <p className="text-lightgray/50 uppercase text-sm">{props.hours}</p>
    </FlexContainer>
  );
};

export default ImageCard;
