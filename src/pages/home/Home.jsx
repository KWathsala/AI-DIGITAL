import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full top-image h-[600px] opacity-80 -z-10 bg-center relative">
      {/* Heading */}
      <h1 className="absolute mt-[560px] text-3xl font-extrabold text-white md:mt-[545px] md:ml-20 md:text-5xl left-10 sm:left-10 sm:pt-1 main departments lg:top-[-50px] lg:absolute lg:text-8xl lg:font-extrabold">
        ged BEES
      </h1>

      {/* Inline style for background image */}
      <style>
        {`
          .top-image {
            background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/project/workspace/src/assets/Hero Section.png');
          }
        `}
      </style>
    </div>
  );
};

export default HeroSection;
