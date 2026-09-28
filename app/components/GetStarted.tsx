import React from "react";
import GlobalContainer from "./GlobalContainer";
import FlexContainer from "./FlexContainer";
import LightBgComponent from "./LightBgComponent";
import Button from "./Button";

type Props = {};

const GetStarted = (props: Props) => {
  return (
    <GlobalContainer className="">
      <FlexContainer className="flex-col gap-5 items-center bg-lightgreen md:p-10 p-5 rounded-3xl my-20">
        <LightBgComponent
          text="Get Started"
          className="text-sm gap-2"
          bgChange="bg-majorwhite text-majorblue"
        />
        <h6 className="text-majorblue text-3xl lg:text-4xl tracking-tighter">
          What Happens{" "}
          <span className="text-green italic font-font-family">Next?</span>
        </h6>
        <p className="text-center text-sm text-majorblack/80 md:w-1/2">
          Submit the form, choose a convenient consultation time and speak
          privately with a Dokitami doctor. Programmes start from{" "}
          <span className="text-majorblack font-semibold">₦250,000</span> if
          you’re eligible and decide to continue.
        </p>
        <Button
          text="I'm Ready"
          className="bg-green ps-3 text-majorwhite"
          iconClass="w-8 h-8 rounded-full bg-majorblue text-majorwhite"
        />
        <p className="text-majorblue">+234 703 730 5112</p>
        <FlexContainer className="flex-col gap-5 rounded-3xl bg-majorwhite border p-5 border-majorblue items-center lg:w-1/2">
          <h6 className="text-majorblue text-2xl lg:text-4xl tracking-tighter">
            Medical{" "}
            <span className="italic text-green font-font-family">
              Disclaimer
            </span>
          </h6>
          <p className="text-majorblue text-sm text-center">
            The information on this page is for general informational purposes
            and is not a substitute for personalised medical advice. Treatment
            eligibility, medication selection and dosing must be determined by a
            qualified healthcare professional. Individual weight-loss results
            vary, and no specific outcome is guaranteed.
          </p>
        </FlexContainer>
      </FlexContainer>
    </GlobalContainer>
  );
};

export default GetStarted;
