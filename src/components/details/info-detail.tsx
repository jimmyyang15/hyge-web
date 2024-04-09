import Image from "next/image";
import React from "react";

const techStack = [
  {
    name: "HTML",
    imgPath: "/images/html.png",
  },
  {
    name: "Javascript",
    imgPath: "/images/js.png",
  },
  {
    name: "Wordpress",
    imgPath: "/images/wordpres.png",
  },
  {
    name: "WooCommerce",
    imgPath: "/images/woocommerce.png",
  },
];

const InfoDetail = () => {
  return (
    <section className="container py-8 space-y-8 ">
      <h1 className="text-white md:text-5xl text-3xl font-bold tracking-[2px]">
        Levare Decanter
      </h1>
      <p className="text-[#c5c5c5] text-sm md:text-base">
        Through Levare website, we aim to share the joy of authentic wine
        enjoyment by offering innovative products that enhance the tasting
        experience, provide valuable resources and knowledge, and foster a
        vibrant community of wine lovers.
      </p>
      <div className="border-b border-[#353535] space-y-8 pb-8">
        <TechStacks />
        <button className="px-4 py-2 text-sm rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
          Visit Site
        </button>
      </div>

      <AdditionalInfo />
    </section>
  );
};

const TechStacks = () => {
  return (
    <div className="space-y-8 ">
      <h1 className="text-base md:text-2xl text-white font-bold ">Tech stack</h1>
      <div className="rounded-md border border-white/20 tech-stack-gradient p-2 grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-4 gap-4 ">
        {techStack.map((item, i) => (
          <div 
            className="rounded-md flex-1 flex-wrap border border-white/20 grid place-items-center p-4 gap-y-4"
            key={i}
          >
            <Image src={item.imgPath} alt="html" width={50} height={50} />
            <p className="text-white">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const AdditionalInfo = () => {
  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <h1 className="text-base md:text-2xl text-white font-bold">Description</h1>
        <p className="text-[#C5C5C5] text-sm md:text-base">
          Levare Decanter is a revolutionary wine accessory designed to enhance
          your wine tasting experience by providing optimal aeration for your
          favorite wines. Crafted with precision and innovation, the Levare
          Decanter is the result of unwavering commitment to bringing out the
          true flavors, aromas, and bouquets of wines.
        </p>
      </div>
      <div className="space-y-4">
        <h1 className="text-base md:text-2xl text-white font-bold">A sneak peek</h1>
        <p className="text-[#C5C5C5] text-sm md:text-base">
          Here’s a sneak peek of what we do with Levare:
        </p>
        <Image
          src={"/images/testt.png"}
          alt="wine"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full "
        />
      </div>
      <div className="space-y-4">
        <h1 className="text-base md:text-2xl text-white font-bold">Problem Statement</h1>
        <p className="text-[#C5C5C5] text-sm md:text-base">
          The wine industry lacks an accessible platform that enables wine
          drinkers, regardless of expertise, to fully appreciate and enjoy the
          authentic taste, aroma, and bouquet of their wines as intended.
          Currently, wine enthusiasts face challenges such as long waiting
          periods and resorting to artificial methods to aerate their wines,
          compromising the true tasting experience. There is a need for a
          solution that eliminates these barriers and provides a convenient way
          for wine lovers to enhance their enjoyment of wines without
          compromising quality.
        </p>
      </div>
      <div className="space-y-4">
        <h1 className="text-base md:text-2xl text-white font-bold">What We Did</h1>
        <p className="text-[#C5C5C5] text-sm md:text-base">
          By developing a website for Levare Decanter, we aim to address these
          challenges and provide a platform that offers innovative products and
          resources to revolutionize the wine drinking experience. Our goal is
          to create an online destination where wine enthusiasts can access
          reliable information, discover products that enhance wine aeration,
          and connect with a community of like-minded individuals passionate
          about true taste.
        </p>
      </div>
    </div>
  );
};

export default InfoDetail;
