import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <main className="flex max-w-screen-xl">
      <Image
        src="/assets/heroImg.png"
        alt="movie posters"
        fill
        objectFit="cover"
        className="md:w-screen left-0 right-0 object-cover md:object-none"
      />
      {/* Overlay with fading effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-Black04 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-Black04 via-transparent to-transparent"></div>
      </div>
      {/* Logo and Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center ">
        {/* Logo */}
        <Image
          src="/assets/heroLogo.png"
          alt="Logo"
          width={300}
          height={300}
          className="opacity-80 md:mt-32 mt-44 md:mb-0 sm:mb-28"
        />
        {/* Text */}
        <div className="bottom-40">
          <h1 className="text-5xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#fff] to-[#363636] tracking-normal uppercase text-center mt-40 md:mt-16 cinzel-font">
            Movies Rated,
            <br className="md:hidden" />{" "}
            <span className="text-5xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#fff] to-[#363636] tracking-normal uppercase text-center mt-40 md:mt-16 cinzel-font">
              {" "}
              Just for You!
            </span>
          </h1>

          <p className="mt-4 md:mt-3 text-lg opacity-70 mx-4">
            Easily explore movie ratings, discover what&apos;s trending, and
            decide your next watch with confidence.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Hero;
