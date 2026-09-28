import React from "react";
import Marquee from "react-fast-marquee";
import { GoDotFill } from "react-icons/go";
import { TbMarquee } from "react-icons/tb";

type Props = {};

const MarqueeComponent = (props: Props) => {
  return (
    <div className="flex w-full gap-5">
      <Marquee className="flex items-center gap-5 text-majorblack mask-r-from-80% mask-l-from-80% py-5 shrink-0 flex-1">
        <div className="flex items-center gap-5 shrink-0 flex-1">
          <p className="text-sm uppercase">genuine medication</p>
          <GoDotFill className="text-[10px]" />
          <p className="text-sm uppercase">ndpr complaint</p>
          <GoDotFill className="text-[10px]" />
          <p className="text-sm uppercase">serving africa</p>
          <GoDotFill className="text-[10px]" />
          <p className="text-sm uppercase">free whatsapp support</p>
          <GoDotFill className="text-[10px]" />
          <p className="text-sm uppercase">full support protocol</p>
          <GoDotFill className="text-[10px]" />
          <p className="text-sm uppercase">ssl secured</p>
          <GoDotFill className="text-[10px]" />
        </div>
        <div className="flex items-center gap-5 shrink-0 flex-1">
          <p className="text-sm uppercase">genuine medication</p>
          <GoDotFill className="text-[10px]" />
          <p className="text-sm uppercase">ndpr complaint</p>
          <GoDotFill className="text-[10px]" />
          <p className="text-sm uppercase">serving africa</p>
          <GoDotFill className="text-[10px]" />
          <p className="text-sm uppercase">free whatsapp support</p>
          <GoDotFill className="text-[10px]" />
          <p className="text-sm uppercase">full support protocol</p>
          <GoDotFill className="text-[10px]" />
          <p className="text-sm uppercase">ssl secured</p>
          <GoDotFill className="text-[10px]" />
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
