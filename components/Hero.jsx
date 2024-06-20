import React from "react";

import { RiArrowDownSLine } from "react-icons/ri";

// components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section
      className="py-12 xl:py-24 h-[84vh] xl: pt-28 bg-hero bg-no-repeat 
      bg-bottom dark:bg-none bg-cover"
    >
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div>
            <div>Web Developer</div>
            <h1>Hello, My name is Carl Mark Carambas</h1>
            <p>
              Brief description with insights to myself, my vocatonal journey
              and what I engage in professionally
            </p>
          </div>
          {/* image */}
          <div>image</div>
          {/* icon */}
          {/* will hide on medium size screens */}
          <div className="hidden md:flex absolute left-2/4 bottom-44 animate-bounce">
            <RiArrowDownSLine className="text-3xl text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
