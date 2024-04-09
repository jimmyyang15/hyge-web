import Image from "next/image";
import React from "react";

const clientImages = [
  "/images/LEVARE.png",
  "/images/sihlindo.png",

  "/images/aires.png",
  "/images/apix.png",

  "/images/airple.png",
  "/images/sinar-abadi.png",
  "/images/united.png",

  "/images/dymos.png",
  "/images/pelita.png",

  "/images/elektrika.png",
  "/images/hayum.png",
  "/images/pelita-jaya.png",

  "/images/panel.png",
];
const ClientSection = () => {
  return (
    <div className="flex items-center gap-4 flex-wrap justify-center">
      {clientImages.map((item, i) => (
        <Image
          alt="client-logo"
          width={125}
          height={50}
          className=" cover"
          sizes="100vw"
          key={i}
          src={item}
        />
      ))}
    </div>
  );
};

export default ClientSection;
