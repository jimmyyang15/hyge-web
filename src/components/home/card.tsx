"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import GradientBadge from "./gradient-badge";

const variants = {
  animate: {
    opacity: 1,
    translateX: 0,
    translateY: 0,
  },
};
const Card = ({ item, idx }: { item: string; idx: number }) => {
  const router = useRouter();
  return (
    <motion.div
      variants={variants}
      whileInView={"animate"}
      whileHover={{
        scale: 1.05,
        transition: { duration: .2 },
      }}
      whileTap={{
        scale:1,
        transition:{duration:.2}
      }}
      transition={{
        duration: 0.3,
        delay: idx * 0.1,
        ease:"easeInOut"
      }}
      initial={{
        opacity: 0,
        translateX: idx % 2 === 0 ? -50 : 50,
        translateY: -50,
      }}
      viewport={{
        once: true,
      }}
      className="p-2 border border-[#d1e1ff]/10 rounded-md space-y-4 card-gradient cursor-pointer"
      onClick={() => router.push("/details")}
    >
      <Image
        src={item}
        alt="portfolio-img"
        width={0}
        height={0}
        className="w-full h-56 rounded-md cover"
        sizes="100vw"
      />
      <div className="rounded-md border-[#d1e1ff]/10 text-white border p-4 space-y-4 ">
        <div className="flex items-center gap-2">
          <GradientBadge text={"Web Development"} />
          <GradientBadge text={"UI Design"} />
        </div>
        <p className="text-xl font-semibold">Levare Decanter</p>
        <p className="text-sm md:text-base">
          Through our website, we aim to share the joy of authentic wine
          enjoyment by offering innovative products that enhance the tasting
          experience, provide valuable resources and knowledge, and foster a
          vibrant community of wine lovers.
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
