"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Image from "next/image";
import { sideBlack, sideWhite } from "../../../public/svg/svg";

const page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (!session?.user) {
      router.replace("/");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return (
      <div className="h-screen flex items-center justify-center text-4xl">
        Loading...
      </div>
    );
  }

  if (!session?.user) {
    return null;
  }

  return (
    <main className="grid grid-cols-[250px_1fr] items-center justify-center">
      <div className="bg-sidebar text-contentText flex flex-col items-center justify-center"></div>
      <Image src={sideWhite} alt="side" className=" bg-content" />
    </main>
  );
};

export default page;
