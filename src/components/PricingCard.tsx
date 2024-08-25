import { Subscription, subscriptionFeatures } from "@/constant";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const PricingCard: React.FC<Subscription> = ({
  desc,
  type,
  additionalPrice,
  free,
  index,
  mainPrice,
}) => {
  return (
    <section
      className={`w-[250px] h-[500px] ${
        type === "Basic" ? "shadow-xl" : ""
      } grid grid-rows-[2.75fr_1fr_3fr] gap-4 p-4 rounded-xl `}
    >
      <div className="flex flex-col gap-1">
        <h1 className="text-black text-2xl font-extrabold ">{type}</h1>
        <p className="text-black text-xs ">{desc}</p>
      </div>

      {free ? (
        <div className="flex flex-col ">
          <h1 className="text-2xl font-extrabold text-black">Gratis</h1>
          <h3>-</h3>
        </div>
      ) : (
        <div className="flex flex-col ">
          <div className="flex flex-row gap-2 items-end text-black">
            <h2 className="text-2xl font-extrabold ">{mainPrice} </h2>
            <h3>/bulan</h3>
          </div>
          {additionalPrice && (
            <h4 className="text-gray-400">{additionalPrice} /tahun</h4>
          )}
        </div>
      )}

      <div className="flex flex-col gap-2">
        <Button
          className={`${
            type === "Basic" ? "bg-orange" : "bg-blue"
          } text-white px-8 py-4 w-full`}
        >
          {free ? "Start Now" : "Get Started"}
        </Button>
        <div className="flex flex-col gap-1">
          {subscriptionFeatures.map((item, index) => (
            <div key={index} className="flex flex-row gap-2">
              <Image src={item.icon} alt="icon" />
              <h1 className="text-black text-sm">{item.label}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCard;
