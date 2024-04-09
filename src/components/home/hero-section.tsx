"use client"

import React, { useState } from "react";
import CategoryBtn from "./category-btn";

const categories = ["All", "Web Development", "App Development", "UI Design"];

const HeroSection = () => {
    const [activeCategory,setActiveCategory] = useState("All");
  return (
    <section className="container pt-16 pb-8 space-y-8">
      <h1 className="text-white text-4xl md:text-5xl font-bold tracking-[2px]">
        Our <span className="text-[#0a6ce9]">Portfolio</span>
      </h1>
      <p className="text-white max-w-[709px] text-base md:text-[20px] ">
        As your digital partner, we collaborate with you to drive innovation,
        stay ahead of the curve, and deliver real impact for your business.
      </p>
      <div className="flex gap-4 overflow-x-scroll md:overflow-hidden">
        {categories.map((category, i) => (
          <CategoryBtn handleClick={()=>setActiveCategory(category)} text={category} active={activeCategory===category} key={i} />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
