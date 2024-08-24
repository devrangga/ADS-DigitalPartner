import MaxDiv from "@/components/MaxDiv";
import Navbar from "@/components/Navbar";
import { section } from "@/constant";
import Image from "next/image";
import React from "react";
import { arrow } from "../../../public/svg";

const page = () => {
  return (
    <main className="relative">
      <Navbar />
      {section.map((item, index) => (
        <div
          key={index}
          className={`h-screen lg:w-full ${
            index === 0 ? "bg-bg" : index % 2 === 0 ? "bg-white" : "bg-bg"
          } flex items-center justify-center`}
        >
          <MaxDiv className="">
            <div
              className={`grid ${
                index % 2 === 0
                  ? " grid-cols-[425px_1fr]"
                  : " grid-cols-[1fr_425px]"
              } gap-16 justify-center items-center `}
            >
              <div
                className={`flex flex-col gap-8 ${
                  index % 2 !== 0 ? "order-1" : ""
                }`}
              >
                <h1 className="text-4xl font-bold">{item.title}</h1>
                <h3 className="text-lg">{item.desc}</h3>
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
                src={item.image}
                alt="img"
                width={1500}
                height={1500}
                className=" object-contain scale-125 h-[500px] w-auto "
              />
            </div>
          </MaxDiv>
        </div>
      ))}
    </main>
  );
};

export default page;
