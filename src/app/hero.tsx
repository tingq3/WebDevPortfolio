"use client";

import Image from "next/image";
import { Typography } from "@/lib/mt";
import { withBasePath } from "../lib/base-path";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            src={withBasePath("/image/image-7.jpg")}
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Welcome to my Web <br /> Development Portofolio!
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            I&apos;m Jack Hui, a passionate web developer based in Sydney. Here,
            you&apos;ll get a glimpse of my journey in the world of web
            development, where creativity meets functionality.
          </Typography>
        </div>
        <Image
          src={withBasePath("/image/image-7.jpg")}
          alt="Jack Hui"
          width={800}
          height={672}
          className="h-[42rem] w-full rounded-xl object-scale-down"
        />
      </div>
    </header>
  );
}

export default Hero;
