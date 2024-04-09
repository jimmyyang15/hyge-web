import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  text: string;
  active: boolean;
  handleClick: () => void;
}
const CategoryBtn = ({ text, active, handleClick }: Props) => {
  return (
    <button
      onClick={handleClick}
      className={cn("bg-white whitespace-nowrap  text-black rounded-full px-4 py-2 text-sm", {
        "shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)]  bg-[#0070f3]  text-white font-light transition duration-200 ease-linear":
          active,
      })}
    >
      {text}
    </button>
  );
};

export default CategoryBtn;
