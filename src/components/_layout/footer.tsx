import React from "react";
import Logo from "../common/logo";
import { MapPin } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { Separator } from "../ui/separator";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="container py-16 border-t border-white/10">
      <div className="flex flex-col md:flex-row items-start justify-center gap-4 pb-16 border-b border-white/10 gap-y-16">
        <div className="space-y-8 md:w-2/6 w-full ">
          <div className="md:block hidden">
            <Logo />
          </div>
          <p className="text-[#c5c5c5] text-sm md:text-base">
            Hyge is a Singapore based company that provides customisation and
            specialisation in website design, development, as well as mobile app
            development.
          </p>
          <div className="flex items-center gap-4 text-[#c5c5c5]">
            <MapPin />
            <p>North Point Bizhub, Singapore.</p>
          </div>
        </div>
        <div className="flex flex-col space-y-8 text-[#c5c5c5] text-sm md:text-base md:w-2/6 w-full">
          <div>
            <p>Email Us:</p>
            <p>michael@hygeworks.com</p>
          </div>
          <div>
            <p>Contact Us:</p>
            <p>+65 8533 3575</p>
          </div>
        </div>
        <div className="flex flex-col text-white md:w-2/6 w-full">
          <Social social="Linkedin" />
          <Separator className="my-6" />
          <Social social="Instagram" />
          <Separator className="my-6" />
          <Social social="Behance" />
        </div>
      </div>
      <div className="flex justify-between items-center py-4  text-[#c5c5c5]  text-sm md:text-base  gap-x-4">
        <p>Copyright © 2023 Hyge, Pte. Ltd.</p>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
};

const Social = ({ social }: { social: string }) => {
  return (
    <Link href="/">
      <div className="flex justify-between items-center text-[#c5c5c5] text-sm md:text-base ">
        <p className="leading-4">{social}</p>
        <ArrowUpRight />
      </div>
    </Link>
  );
};

export default Footer;
