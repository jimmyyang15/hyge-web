import React from "react";

const GradientBadge = ({ text }: { text: string }) => {
  return (
    <div className="relative text-xs md:text-sm whitespace-nowrap  inline-flex h-10 overflow-hidden rounded-full p-[1px]  ">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6fbeff_0%,#394dff_50%,#37a5ff_100%)]" />
      <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-gradient-to-b from-[#2c333f] to-[#0d1625] px-3 py-1 text-xs md:text-sm font-medium text-blue-500 backdrop-blur-3xl">
        {text}
      </span>
    </div>
  );
};

export default GradientBadge;
