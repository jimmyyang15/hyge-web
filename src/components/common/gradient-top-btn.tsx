import React from "react";

const GradientTopBtn = ({text}:{
  text:string
}) => {
  return (
    <button className="px-8 py-2 rounded-full relative bg-[#d1e1ff]/10 text-white text-sm hover:shadow-2xl  transition duration-200 border border-[#d1e1ff]/10">
      <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
      <span className="relative z-20 text-sm">{text}</span>
    </button>
  );
};

export default GradientTopBtn;
