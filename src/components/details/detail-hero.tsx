import React from "react";
import GoBack from "./go-back";
import Image from "next/image";
import GradientBadge from "../home/gradient-badge";

const DetailHero = () => {
  return (
    <section className="container pt-8 md:pt-16 pb-8 space-y-8">
      <GoBack />
      <Image
        width={0}
        height={0}
        className="w-full"
        sizes="100vw"
        src="/images/tes.png"
        alt="hero-detail"
      />
      <Roles />
    </section>
  );
};

const Roles = () => {
  return (
    <div className="flex items-center gap-x-3 md:gap-x-6">
      <p className="font-bold md:text-2xl text-white mr-8 whitespace-nowrap">Our Role</p>
      <GradientBadge text="Web Development" />
      <GradientBadge text="UI Design" />
    </div>
  );
};

export default DetailHero;
