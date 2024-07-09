import React from "react";

import {
  RiArrowDownSLine,
  RiBriefcase4Fill,
  RiBriefcaseFill,
  RiTeamFill,
  RiTodoFill,
} from 'react-icons/ri'

// components
import DevImg from './DevImg'
import Badge from './Badge'
import Socials from './Socials'
import { Button } from './ui/button'
import Link from 'next/link'
import { Download, Send } from 'lucide-react'

const Hero = () => {
  return (
    <section
      className="py-12 xl:py-24 h-[84vh] xl: pt-28 bg-hero bg-no-repeat 
      bg-bottom dark:bg-none bg-cover"
    >
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1 mb-4">Hello, My name is Carl Mark Carambas</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Brief description with insights to myself, my vocatonal journey,
              and what I engage in professionally
            </p>
            {/* Buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row md:gap-x-2 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={16} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2 transition">
                Download CV <Download size={16} />
              </Button>
            </div>
            {/* Socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">
            <Badge icon={<RiBriefcaseFill />} />
            <div
              className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px]
             bg-no-repeat absolute -right-2 -top-1"
            ></div>
            <DevImg
              containerStyles="bg-hero_shape dark:bg-hero_shape_dark w-[510px] h-[462px] 
              bg-no-repeat relative bg-bottom bg-contain"
              imgSrc="/hero/developer.png"
            />
          </div>
          {/* icon */}
          {/* will hide on medium size screens */}
          <div className="hidden md:flex absolute left-2/4 bottom-44 animate-bounce">
            <RiArrowDownSLine className="text-3xl text-primary" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
