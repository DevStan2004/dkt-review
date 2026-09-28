import React from "react";
import FlexContainer from "./FlexContainer";
import ImageComponent from "./ImageComponent";

type Props = {
  imgSrc: string;
  status: string;
  name: string;
  position: string;
  rareStatus?: string;
};

const TeamCard = (props: Props) => {
  return (
    <FlexContainer className="flex-col scrollTriggerCard gap-3 p-1 bg-majorwhite rounded-2xl relative md:w-100">
      <div className="absolute top-5 right-5 rounded-full py-2 px-3 border border-majorwhite bg-majorblack/10 backdrop-blur-xl text-majorwhite text-sm">
        {props.status}
      </div>
      <ImageComponent
        source={props.imgSrc}
        altText={props.name}
        className="w-full rounded-2xl h-70 object-cover"
      />
      <FlexContainer className="flex-col gap-1 p-3">
        <p className="text-majorblue">{props.name}</p>
        <p className="text-sm text-majorblack">{props.position}</p>
      </FlexContainer>
    </FlexContainer>
  );
};

export default TeamCard;
