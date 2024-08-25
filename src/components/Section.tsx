import React from "react";
import MaxDiv from "./MaxDiv";
import Image, { StaticImageData } from "next/image";
import { arrow } from "../../public/svg";

export type SectionProps = {
  image: StaticImageData;
  title: string;
  desc: string;
  href: string;
  index: number;
};

const Section: React.FC<SectionProps> = ({
  desc,
  href,
  image,
  title,
  index,
}) => {
  return (
    <div
      key={index}
      className={`h-screen lg:w-full ${
        index === 0 ? "bg-bg" : index % 2 === 0 ? "bg-white" : "bg-bg"
      } flex items-center justify-center`}
    >
      <MaxDiv className="">
        <div
          className={`flex flex-col-reverse lg:grid ${
            index % 2 === 0
              ? " grid-cols-[425px_1fr]"
              : " grid-cols-[1fr_425px]"
          } gap-0 lg:gap-16 justify-center items-center `}
        >
          <div
            className={`flex flex-col gap-8 ${
              index % 2 !== 0 ? " lg:order-1" : ""
            }`}
          >
            <h1 className="text-4xl font-bold">{title}</h1>
            <h3 className="text-sm">{desc}</h3>
            {index === 0 ? (
              <div className="flex flex-row gap-8 items-center bg-black text-white w-fit px-12 rounded-lg py-4">
                <h1>Daftar Sekarang</h1>
                <Image src={arrow} alt="arrow" className="scale-125" />
              </div>
            ) : (
              ""
            )}
          </div>

          <Image
            src={image}
            alt="img"
            width={1500}
            height={1500}
            className=" object-contain lg:scale-125 h-fit lg:h-[500px] w-auto "
          />
        </div>
      </MaxDiv>
    </div>
  );
};

export default Section;
