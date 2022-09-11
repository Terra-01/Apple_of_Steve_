import Image from "next/image";
import React from "react";
import {
  ChevronDoubleDownIcon,
} from "@heroicons/react/outline";

function Landing() {
  return (
    <section className="sticky z-30 top-20 mx-auto flex max-w-[1350px] items-start justify-center">
      <div className="space-x-5 pt-1 text-center">
        <h1 className="space-y-3 text-3xl font-semibold tracking-wide lg:text-6xl xl:text-7xl sm:text-3xl md:text-5xl pb-8 pt-4">
          <span className="block bg-gradient-to-r from-[#3a8cff] to-[#060606] bg-clip-text text-transparent">Products From the</span>
          <span className="block bg-gradient-to-r from-[#a60dcd] to-[#181959] bg-clip-text text-transparent">Era of Steve Jobs</span>
        <div className="relative h-[40vh] w-full transition-all duration-500 items-center py-1 cursor-default scale-100 hover:drop-shadow-2xl hover:scale-105">
          <Image src="/Steve_Jobs_2.jpg" layout="fill" objectFit="contain" />
        </div>
        <a href="https://www.apple.com/stevejobs/" target="_blank" rel="noopener noreferrer" className="link">In memory of Steve Jobs</a>
        </h1>
        <div className="flex-1 items-center justify-center space-x-1 flex">
        <ChevronDoubleDownIcon className="animate-bounce text-black cursor-default w-10"/>
        </div>
        </div>
    </section>
  );
}

export default Landing;