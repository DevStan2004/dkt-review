"use client";
import React, { useEffect, useRef, useState } from "react";
import ImageComponent from "./ImageComponent";
import { navLinks } from "../lib/data";
import Link from "next/link";
import { cn } from "../lib/utils";
import Button from "./Button";
import { BiCaretRight } from "react-icons/bi";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

type Props = {};

const Navbar = (props: Props) => {
  const [url, setUrl] = useState("#home");
  const [isThere, setIsThere] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (this.scrollY > 350) {
        setIsThere(true);
      } else {
        setIsThere(false);
      }
    });
  }, []);
  useEffect(() => {
    const currentNavRef = navRef.current;
    if (!currentNavRef) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (currentNavRef && !currentNavRef.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <nav
      className={cn(
        "flex justify-between items-center p-5 fixed top-0 left-0 w-full z-5 transition-bg duration-500 ease-in-out",
        `${isThere ? "bg-majorwhite" : ""}`,
      )}
    >
      <ImageComponent source="image_1_stizam" altText="logo" className="w-20" />
      <ul
        ref={navRef}
        style={{
          height: open ? `${navRef.current?.scrollHeight}px` : "0px",
        }}
        className="flex lg:!h-auto flex-col px-2 lg:flex-row lg:gap-10 lg:relative absolute lg:bg-transparent bg-majorwhite/80 rounded-b-2xl lg:backdrop-blur-none backdrop-blur-xl lg:right-0 lg:top-0 right-5 top-18 lg:w-auto w-80 overflow-hidden lg:overflow-hidden transition-height duration-500 ease-in-out"
      >
        {navLinks.map((nav, index) => (
          <li
            onClick={() => setUrl(nav.href)}
            className={cn(
              "lg:block flex lg:py-0 py-5 lg:px-0 px-8 hover:bg-majorwhite/40 lg:hover:bg-transparent items-center justify-between lg:w-auto md:w-full",
              url === nav.href ? "text-green" : "text-majorblue",
            )}
            key={index}
          >
            <a href={nav.href}>{nav.label}</a>
            <BsFillCaretRightFill className="lg:hidden md:block" />
          </li>
        ))}
      </ul>
      <FaBars
        onClick={(e) => {
          (e.stopPropagation(), setOpen(!open));
        }}
        className="lg:hidden md:block absolute right-40 text-majorblue text-2xl cursor-pointer"
      />
      <Button
        text="Login Now"
        className="bg-majorblue text-majorwhite text-sm ps-3"
        iconClass="bg-green w-6 h-6 p-1.5 text-darkgreen"
      />
    </nav>
  );
};

export default Navbar;
