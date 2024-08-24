import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};
const MaxDiv: React.FC<Props> = ({ className, children }) => {
  return (
    <section className={cn("lg:w-[1140px] w-[356px] mx-auto", className)}>
      {children}
    </section>
  );
};

export default MaxDiv;
