"use client";

import React from "react";
import Card from "./card";
import GradientTopBtn from "../common/gradient-top-btn";
import { TracingBeam } from "../ui/tracing-beam";
import { motion } from "framer-motion";
const images = [
  "/images/z.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/z.png",
  "/images/z.png",
  "/images/z.png",
];

const CardSection = () => {
  return (
    <motion.div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 container">
        {images.map((item, i) => (
          <Card item={item} key={i} idx={i} />
        ))}
      </section>
      <div className="flex-[.20] container py-8">
        <GradientTopBtn text="Load More" />
      </div>
    </motion.div>
  );
};

export default CardSection;
