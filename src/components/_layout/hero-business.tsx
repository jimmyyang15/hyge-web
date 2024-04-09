import Image from "next/image";
import React from "react";

const HeroBusiness = () => {
  return (
    <div>
      <Image
        width={750}
        height={0}
        src={"/images/world.png"}
        alt="illus"
        className="md:hidden block px-4 mb-8 "
      />
      <section className="relative flex flex-col justify-center container  xs:pb-32 sm:pb-16 pt-16 md:py-0">
        <Image
          width={1000}
          height={0}
          src={"/images/artboard.png"}
          alt="illus"
        />
        <div className="absolute md:top-1/2  md:-translate-y-1/2 text-sm md:text-base flex flex-col items-center space-y-8">
          <h1 className="text-white text-3xl md:text-5xl text-center font-bold tracking-[2px]  ">
            We can help to improve your business{" "}
            <span className="text-[#0a6ce9]">
              by upgrading your technology!
            </span>
          </h1>
          <p className="text-white max-w-[709px] text-base  mx-auto text-center md:text-[20px]">
            Schedule a free 30 mins call with us
          </p>
          <button className="px-8 py-4 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
            Book an appointment
          </button>
        </div>
      </section>
    </div>
  );
};

export default HeroBusiness;
