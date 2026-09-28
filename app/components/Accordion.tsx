import React, { SetStateAction, useRef } from "react";
import FlexContainer from "./FlexContainer";
import { PiMinus, PiPlus } from "react-icons/pi";
interface accordionPropTypes {
  title: string;
  desc: string;
}
type Props = {
  accordionProp: accordionPropTypes;
  active: string;
  setActive: React.Dispatch<SetStateAction<string>>
};

const Accordion = (props: Props) => {
    const accordionRef = useRef<HTMLDivElement>(null)
  return (
    <FlexContainer clickHandler={() => props.setActive(prev => prev === props.accordionProp.title ? '' : props.accordionProp.title)} className="flex-col border-t border-majorblack/20 py-5">
      <FlexContainer className="flex-row justify-between items-center">
        <p className="text-majorblue font-semibold">
          {props.accordionProp.title}
        </p>
        {props.active === props.accordionProp.title ? <PiMinus /> : <PiPlus />}
      </FlexContainer>
      <div className="overflow-hidden transition-height duration-500 ease-in-out" ref={accordionRef} style={{
        height: props.active === props.accordionProp.title ? `${accordionRef.current?.scrollHeight}px` : '0px'
      }}>
        <p className="text-majorblack text-sm font-light py-3">
          {props.accordionProp.desc}
        </p>
      </div>
    </FlexContainer>
  );
};

export default Accordion;
