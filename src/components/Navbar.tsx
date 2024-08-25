"use client";
import React, { useState } from "react";
import MaxDiv from "./MaxDiv";
import Logo from "../../public/svg/Logo";
import DropDown from "../../public/svg/DropDown";
import Link from "next/link";
import Image from "next/image";
import { burger } from "../../public/svg";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isNav, setIsNav] = useState<boolean>(false);
  return (
    <MaxDiv className="w-full lg:w-[700px] fixed left-0 right-0 top-0 lg:top-8 z-10 shadow-sm">
      <nav className="flex justify-between py-6 px-12 lg:px-6 lg:py-3 bg-white lg:rounded-xl items-center text-sm">
        <Logo blackWhite="black" />

        <div className="hidden lg:flex flex-row gap-4 items-center">
          <h1 className="flex flex-row gap-2 items-center text-blue">
            Features <DropDown whiteBlue="#3366FF" />
          </h1>
          <h1>Pricing</h1>
          <h1>Demo</h1>
          <h1>Blog</h1>
        </div>

        <button className="hidden lg:flex px-12 py-3 bg-blue rounded-lg text-white">
          <Link href={"/"}>Sign In</Link>
        </button>

        <Image
          onClick={() => setIsNav((prev) => !prev)}
          src={burger}
          alt="burger"
          className="block lg:hidden hover:cursor-pointer"
        />
      </nav>

      <div
        className={`h-fit py-6 w-full bg-white ${
          isNav ? "flex" : "hidden"
        } flex-col justify-center items-center gap-6`}
      >
        <p className="flex flex-row gap-4 items-center text-black">
          Features <DropDown whiteBlue="#000000" />
        </p>
        <p className="text-black">Pricing</p>
        <p className="text-black">Demo</p>
        <Button
          onClick={() => setIsOpen((prev) => !prev)}
          className={`flex flex-row gap-4 items-center w-[75%] ${
            isOpen ? "bg-blue text-white" : "bg-transparent text-black"
          }`}
        >
          Sign In <DropDown whiteBlue={isOpen ? "white" : "#000000"} />
        </Button>
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col gap-4 text-gray-400 text-center`}
        >
          <p>Sign in As Admin</p>
          <p>Sign in As Customer Service</p>
        </div>
      </div>
    </MaxDiv>
  );
};

export default Navbar;
