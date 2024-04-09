import React from "react";
import ClientSection from "./client-section";

const HeroClients = () => {
  return (
    <section className="container pt-16 pb-8 space-y-8">
      <h1 className="text-white text-4xl md:text-5xl font-bold tracking-[2px]">
        Our <span className="text-[#0a6ce9]">Clients</span>
      </h1>
      <p className="text-white max-w-[709px] text-base md:text-[20px]">
        Here are just few of the clients we’ve had the privilege to serve:
      </p>
      <ClientSection />
    </section>
  );
};

export default HeroClients;
