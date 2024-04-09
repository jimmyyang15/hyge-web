import React from "react";
import Logo from "../common/logo";
import Navbar from "../common/navbar";
import GradientTopBtn from "../common/gradient-top-btn";
const Header = () => {
  return (
    <header className="container py-4 border-b border-white/5 flex items-center justify-between">
      <Logo />
      <Navbar />
      <div className="hidden md:block">
        <GradientTopBtn text="Let's Talk" />
      </div>
    </header>
  );
};

export default Header;
