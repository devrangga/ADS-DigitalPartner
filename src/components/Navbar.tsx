import React from "react";
import MaxDiv from "./MaxDiv";
import Logo from "../../public/svg/Logo";
import DropDown from "../../public/svg/DropDown";

const Navbar = () => {
  return (
    <MaxDiv className="lg:w-[700px] fixed left-0 right-0 top-8 z-10">
      <nav className="flex justify-between px-6 py-3 bg-white rounded-xl items-center text-sm">
        <Logo blackWhite="black" />

        <div className="flex flex-row gap-4 items-center">
          <h1 className="flex flex-row gap-2 items-center text-blue">
            Features <DropDown whiteBlue="#3366FF" />
          </h1>
          <h1>Pricing</h1>
          <h1>Demo</h1>
          <h1>Blog</h1>
        </div>

        <button className="px-12 py-3 bg-blue rounded-lg text-white">
          Sign In
        </button>
      </nav>
    </MaxDiv>
  );
};

export default Navbar;
