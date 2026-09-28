"use client";
import React, { useState } from "react";
import GlobalContainer from "./GlobalContainer";
import GridContainer from "./GridContainer";
import FlexContainer from "./FlexContainer";
import { cn } from "../lib/utils";
import LightBgComponent from "./LightBgComponent";
import ImageComponent from "./ImageComponent";

type Props = {};

const BookConsultation = (props: Props) => {
  const [create, setCreate] = useState<boolean>(true);
  return (
    <GlobalContainer id="shop" className="my-20">
      <GridContainer gridClass="gap-5 md:grid-cols-2">
        <FlexContainer className="p-5 rounded-2xl bg-majorwhite flex-col gap-5">
          <h6 className="text-majorblue text-3xl lg:text-5xl tracking-tighter">
            Book Your Free{" "}
            <span className="text-green italic font-font-family">
              Virtual Doctor Consultation.
            </span>
          </h6>
          <FlexContainer className="flex-row gap-2">
            <div
              onClick={() => setCreate(true)}
              className={cn(
                "py-2 px-3 rounded-full text-sm text-majorblue",
                `${create ? "bg-green" : "border border-lightgray"}`,
              )}
            >
              Signup
            </div>
            <div
              onClick={() => setCreate(!true)}
              className={cn(
                "py-2 px-3 rounded-full text-sm text-majorblue",
                `${!create ? "bg-green" : "border border-lightgray"}`,
              )}
            >
              Login
            </div>
          </FlexContainer>
          <form action="">
            <FlexContainer>
              <GridContainer className="gap-3" gridClass="md:grid-cols-2">
                <label
                  htmlFor="name"
                  className="w-full text-sm text-majorblack"
                >
                  NAME
                  <input
                    type="text"
                    className="bg-lightgray/30 border border-majorblack/10 outline-none rounded-2xl p-3 mt-2 w-full"
                    placeholder="Your First Name"
                  />
                </label>
                <label
                  htmlFor="name"
                  className="w-full text-sm text-majorblack"
                >
                  SURNAME
                  <input
                    type="text"
                    className="bg-lightgray/30 border border-majorblack/10 outline-none rounded-2xl p-3 mt-2 w-full"
                    placeholder="Your Last Name"
                  />
                </label>
                <label
                  htmlFor="name"
                  className="w-full text-sm text-majorblack"
                >
                  WHATSAPP NUMBER
                  <input
                    type="tel"
                    className="bg-lightgray/30 border border-majorblack/10 outline-none rounded-2xl p-3 mt-2 w-full"
                    placeholder="(+234) 000-0000-000"
                  />
                </label>
                <label
                  htmlFor="name"
                  className="w-full text-sm text-majorblack"
                >
                  EMAIL ADDRESS
                  <input
                    type="email"
                    className="bg-lightgray/30 border border-majorblack/10 outline-none rounded-2xl p-3 mt-2 w-full"
                    placeholder="you@email.com"
                  />
                </label>
                <label
                  htmlFor="name"
                  className="w-full text-sm text-majorblack col-span-2"
                >
                  HOW DO YOU FEEL?
                  <select className="bg-lightgray/30 border border-majorblack/10 outline-none rounded-2xl p-3 mt-2 w-full text-majorblue">
                    <option value="">Gnawing stomach hunger</option>
                  </select>
                </label>
              </GridContainer>
              <button className="rounded-full bg-majorblue text-majorwhite py-3 px-5 me-auto">
                Book My FREE Consultation
              </button>
              <p className="text-majorblack text-sm">
                No payment is required to book your consultation.
              </p>
            </FlexContainer>
          </form>
        </FlexContainer>
        <FlexContainer className="p-5 rounded-2xl bg-majorblue flex-col gap-5">
          <LightBgComponent
            text="Direct Contact"
            bgChange="bg-white text-majorblue text-sm gap-2 me-auto"
          />
          <FlexContainer className="flex-row justify-between items-center py-3 border-t border-lightgray/20">
            <p className="text-sm text-majorwhite/30">Sales</p>
            <p className="text-majorwhite/50">+44 7493 273723</p>
          </FlexContainer>
          <FlexContainer className="flex-row justify-between items-center py-3 border-t border-lightgray/20">
            <p className="text-sm text-majorwhite/30">Service</p>
            <p className="text-majorwhite/50">+234 703 730 5112</p>
          </FlexContainer>
          <FlexContainer className="flex-row justify-between items-center py-3 border-t border-lightgray/20">
            <p className="text-sm text-majorwhite/30">Email</p>
            <p className="text-majorwhite/50">care@dokitami.com</p>
          </FlexContainer>
          <FlexContainer className="flex-row justify-between items-center py-3 border-t border-lightgray/20">
            <p className="text-sm text-majorwhite/30">Office</p>
            <p className="text-majorwhite text-end">
              House 18, Angle View Estate, Chevron Alternative Road <br />{" "}
              <span className="text-white/30">Lekki, Lagos</span>
            </p>
          </FlexContainer>
          <FlexContainer className="flex-row justify-between items-center py-3 border-t border-lightgray/20">
            <p className="text-sm text-majorwhite/30">Hours</p>
            <p className="text-majorwhite text-end">
              Mon-Sun 7:30am-8:30pm
              <br /> <span className="text-white/30">Virtual Appointments</span>
            </p>
          </FlexContainer>
          <ImageComponent source="image_1_1_fkumih" altText="consultation logo" className="w-50 mt-auto ms-auto" />
        </FlexContainer>
      </GridContainer>
    </GlobalContainer>
  );
};

export default BookConsultation;
