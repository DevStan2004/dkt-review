'use client'
import React from "react";
import GlobalContainer from "./GlobalContainer";
import FlexContainer from "./FlexContainer";
import GridContainer from "./GridContainer";
import ImageComponent from "./ImageComponent";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <GlobalContainer className="bg-majorblue py-10">
      <FlexContainer>
        <GridContainer className="md:grid-cols-4 lg:gap-0 gap-5">
          <FlexContainer>
            <ImageComponent
              source="Frame_40_azqtjm"
              className="w-60"
              altText="footer logo"
            />
            <p className="text-majorwhite/50 text-sm">
              <span className="text-majorwhite">
                Dokitami Medical Weight Management.
              </span>
              <br /> Transforming the health journey for Africans with premium
              GLP-1 weight management solutions, telemedicine, and a supportive
              community.
            </p>
          </FlexContainer>
          <FlexContainer className="text-sm flex-col gap-3">
            <p className="text-majorwhite/50">PAGES</p>
            <Link className="text-majorwhite/80" href={''}>Weight Management</Link>
            <Link className="text-majorwhite/80" href={''}>How it Works</Link>
            <Link className="text-majorwhite/80" href={''}>Medical Team</Link>
            <Link className="text-majorwhite/80" href={''}>FAQ</Link>
          </FlexContainer>
          <FlexContainer className="text-sm flex-col gap-3">
            <p className="text-majorwhite/50">RESOURCES</p>
            <Link className="text-majorwhite/80" href={''}>Privacy Policy</Link>
            <Link className="text-majorwhite/80" href={''}>Terms & Conditions</Link>
          </FlexContainer>
          <FlexContainer className="text-sm flex-col gap-3">
            <p className="text-majorwhite/50">+234 808 565 9720</p>
            <Link className="text-majorwhite/80" href={''}>care@dokitami.com</Link>
            <Link className="text-majorwhite/80" href={''}>Shipped Nationwide</Link>
          </FlexContainer>
        </GridContainer>
        <ImageComponent source="image_1_1_fkumih" className="w-full" altText="footer big logo" />
        <FlexContainer className="lg:flex-row flex-col justify-between text-majorwhite/50 text-sm lg:items-center">
            <p>©2026 Dokitami. All rights reserved.</p>
            <FlexContainer className="flex-row gap-3 items-center">
                <p className="text-green text-sm">Created By</p>
                <ImageComponent source="Smiling_woman_with_a_warm_expressive_face_rqsx2t" className="w-10 h-10 rounded-full" altText="creator photo" />
                <p className="text-majorwhite">Alpha</p>
            </FlexContainer>
            <FlexContainer className="flex-row gap-5 text-majorwhite/50 text-sm">
            <Link href={''}>Instagram</Link>
            <Link href={''}>Dokitami</Link>
            <Link href={''}>Say Hi</Link>
            </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </GlobalContainer>
  );
};

export default Footer;
