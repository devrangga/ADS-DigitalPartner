"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { signOut } from "next-auth/react";
import { sidebarItems } from "@/constant";
import Image from "next/image";
import Logo from "../../../public/svg/Logo";

const page = () => {
  const session = useSession();
  const router = useRouter();
  // if (!session.data?.user) return router.replace("/");
  //   const so = () => signOut();
  //   so();

  console.log(session.data?.user);

  return (
    <main className="grid grid-cols-[250px_1fr]">
      <div className="bg-sidebar text-contentText flex flex-col items-center">
        <Logo blackWhite="#3366FF" />
        {sidebarItems.map((item, index) => (
          <div key={index} className={`flex flex-row gap-2`}>
            <Image src={item.icon} alt="icon" />
            <h1>{item.label}</h1>
          </div>
        ))}
      </div>
      <div className=""></div>
    </main>
  );
};

export default page;
