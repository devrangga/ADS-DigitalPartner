"use client";
import MaxDiv from "@/components/MaxDiv";
import Navbar from "@/components/Navbar";
import { faq, section } from "@/constant";
import Image from "next/image";
import React, { useState } from "react";
import Section from "@/components/Section";
import { imgFive } from "../../../public/img";
import { Button } from "@/components/ui/button";
import { monthly, yearly } from "@/constant";
import PricingCard from "@/components/PricingCard";
import { Input } from "@/components/ui/input";
import { search } from "../../../public/svg";
import Logo from "../../../public/svg/Logo";
import { useSession } from "next-auth/react";

const Page = () => {
  const [pricing, setPricing] = useState<"Monthly" | "Yearly">("Monthly");
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };
  const session = useSession();
  console.log(session.data?.user);

  return (
    <main className="relative">
      <Navbar />
      {section.map((item, index) => (
        <Section
          key={index}
          desc={item.desc}
          href={item.href}
          image={item.image}
          index={index}
          title={item.title}
        />
      ))}

      <section className="h-screen flex items-center justify-center">
        <MaxDiv>
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-blue text-4xl font-bold lg:w-[65%] text-center">
              "One Step Closer to More Effective and Connected Communication!"
            </h1>
            <div className="flex flex-col lg:grid grid-cols-[250px_1fr] items-center gap-8">
              <Image src={imgFive} alt="imgFive" className="lg:scale-125" />
              <div className="flex flex-col gap-4">
                <div className="flex flex-col lg:flex-row gap-4">
                  <Button className="bg-blue px-12 rounded-xl">
                    Bisnis dan Pemasaran
                  </Button>
                  <Button className="bg-white border-[1px] text-blue border-blue px-12 rounded-xl">
                    Komersial dan Penjualan
                  </Button>
                  <Button className="bg-white border-[1px] text-blue border-blue px-12 rounded-xl">
                    Organisasi Sosial
                  </Button>
                </div>

                <p className="text-sm">
                  Bidang ini dapat memanfaatkan fitur Broadcast untuk mengirim
                  promosi, pengumuman, dan informasi produk kepada pelanggan
                  dalam jumlah besar secara efisien. Selain itu, fitur Campaign
                  dapat membantu merencanakan dan menyampaikan pesan iklan
                  dengan waktu yang tepat kepada target audiens yang sesuai.
                </p>
              </div>
            </div>
          </div>
        </MaxDiv>
      </section>

      <section className="min-h-screen flex items-center justify-center mb-12">
        <MaxDiv className="flex flex-col gap-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-4xl font-bold">Our Pricing</h1>
            <div className="flex flex-row p-2 gap-2 rounded-full shadow-lg">
              <Button
                onClick={() => setPricing("Monthly")}
                className={`rounded-full px-8 py-6 ${
                  pricing === "Monthly"
                    ? "bg-blue text-white"
                    : "text-black bg-white"
                }`}
              >
                Monthly
              </Button>
              <Button
                onClick={() => setPricing("Yearly")}
                className={`rounded-full px-8 py-6 ${
                  pricing === "Yearly"
                    ? "bg-blue text-white"
                    : "text-black bg-white"
                }`}
              >
                Yearly
              </Button>
            </div>
          </div>
          <h3 className="px-4 py-2 bg-blue/10 text-blue text-sm w-fit rounded-lg   mx-auto">
            Hemat hingga 25% dengan paket tahunan
          </h3>

          <div
            className="flex flex-col justify-center items-center lg:flex-row gap-2
          "
          >
            {pricing === "Monthly"
              ? monthly.map((item, index) => (
                  <PricingCard
                    desc={item.desc}
                    key={index}
                    index={index}
                    type={item.type}
                    additionalPrice={item.additionalPrice}
                    free={item.free}
                    mainPrice={item.mainPrice}
                  />
                ))
              : yearly.map((item, index) => (
                  <PricingCard
                    desc={item.desc}
                    key={index}
                    index={index}
                    type={item.type}
                    additionalPrice={item.additionalPrice}
                    free={item.free}
                    mainPrice={item.mainPrice}
                  />
                ))}
          </div>
        </MaxDiv>
      </section>

      <section className="h-screen flex items-center justify-center bg-blue">
        <MaxDiv className="lg:w-[555px] w-[356px] flex flex-col gap-8">
          <h1 className="font-bold text-2xl text-center text-white mb-8">
            Frequently Asked Questions
          </h1>
          <div className="flex flex-row gap-4">
            <Input className="" />
            <Image src={search} alt="search" />
          </div>
          <div className="flex flex-col gap-4">
            {faq.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 bg-white px-6 py-3 rounded-lg"
              >
                <div
                  className="flex flex-row justify-between items-center cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <h1 className="text-lg font-bold">{item.title}</h1>
                  <h3 className="flex items-center justify-center w-[24px] h-[24px] bg-blue text-white">
                    {activeFaqIndex === index ? "-" : "+"}
                  </h3>
                </div>
                {activeFaqIndex === index && (
                  <p className="text-sm mt-2">{item.desc}</p>
                )}
              </div>
            ))}
          </div>
        </MaxDiv>
      </section>

      <section className="h-screen flex flex-col items-center justify-between bg-blue">
        <div></div>

        <MaxDiv className="flex-col flex lg:grid grid-cols-[2fr,1.5fr,0.5fr] gap-32 ">
          <div className="flex flex-col gap-8">
            <Logo blackWhite="white" />{" "}
            <p className="text-white text-sm">
              Fowardin is your ultimate communication management solution. We
              empower businesses of all sizes with efficient message forwarding,
              streamlined contact management, and powerful campaign scheduling.
              Our mission is to simplify your communication processes, helping
              you engage with your audience effectively and effortlessly. Join
              us in transforming your communication game today!
            </p>
          </div>

          <div className="text-sm text-white flex flex-col gap-6">
            <h1 className="text-lg font-bold">Contact Us</h1>
            <p>
              Join our mailing list to receive updates, exclusive content, and
              early access to upcoming events. By signing up, you become an
              integral part of our community, spreading the message of
              compassion and making a difference.
            </p>
            <div className="flex flex-col">
              <h2>Email: info@fowarin</h2>
              <h2>Phone: +1 (123) 456-7890</h2>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-white ">
            <h1 className="text-lg font-bold">Lets Talk</h1>
            <div className="flex flex-col ">
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Twitter</p>
            </div>
          </div>
        </MaxDiv>

        <div className="flex flex-row gap-4 items-center text-white font-light pb-16">
          <h1>Powered By</h1>
          <Logo blackWhite="white" />
        </div>
      </section>
    </main>
  );
};

export default Page;
