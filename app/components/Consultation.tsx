import React from "react";
import GlobalContainer from "./GlobalContainer";
import CarouselComponent from "./CarouselComponent";
import { consultantData } from "../lib/data";

type Props = {};

const Consultation = (props: Props) => {
  return (
    <GlobalContainer className="my-10">
      <CarouselComponent carouselProp={consultantData} />
    </GlobalContainer>
  );
};

export default Consultation;
