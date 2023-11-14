import Image from "next/image";
import Link from "next/link";
import React, { lazy } from "react";
/* const Marquee = lazy(() => import("react-fast-marquee")); */

const Gallery = () => {
  return (
    <div className="relative pt-20 pb-10 md:pt-0 lg:pt-32 lg:pb-20">
      <section
        id="anhcuoi"
        className="max-w-[1440px] mx-auto grid grid-flow-row gap-4 grid-rows-7 lg:grid-rows-5 grid-cols-2 lg:grid-cols-3 h-screen px-4 lg:px-8"
      >
        <h1 className="col-span-2 text-[64px] font-great-vibes my-auto mx-auto text-black lg:hidden">
          Ảnh cưới
        </h1>
        <div className="flex row-span-3 ">
          <Image
            src="/assets/images/chew/photo-1.png"
            alt="Picture of the author"
            width={500}
            height={500}
            quality={100}
            loading="lazy"
            className="object-cover"
          />
        </div>
        <div className="flex  row-start-3 col-start-2 row-span-3 lg:row-span-5">
          <Image
            src="/assets/images/chew/photo-2.png"
            alt="Picture of the author"
            width={500}
            height={500}
            quality={100}
            loading="lazy"
            className="object-cover"
          />
        </div>
        <div className="flex row-span-1 col-start-2 lg:col-start-3 row-start-2  lg:row-span-2">
          <Image
            src="/assets/images/chew/photo-3.png"
            alt="Picture of the author"
            width={500}
            height={500}
            quality={100}
            loading="lazy"
            className="object-cover"
          />
        </div>
        <div className="flex row-span-1 lg:row-span-3">
          <Image
            src="/assets/images/chew/photo-4.png"
            alt="Picture of the author"
            width={500}
            height={500}
            quality={100}
            loading="lazy"
            className="object-cover"
          />
        </div>
        <div className="flex row-span-4 lg:row-span-2 col-span-2 lg:col-span-1 w-full relative">
          <Image
            src="/assets/images/chew/photo-5.png"
            alt="Picture of the author"
            layout="fill"
            quality={100}
            loading="lazy"
            className="object-cover"
          />
        </div>
        <img
          className="absolute inset-0 mx-auto top-5"
          src="/assets/images/chew/divide.png"
          alt="err"
        />
        <img
          className="absolute mx-auto -bottom-16 left-0 right-0 overflow-hidden"
          src="/assets/images/chew/divide.png"
          alt="err"
        />
      </section>
      <Link
        href={"/"}
        rel="noopener noreferrer"
        target="_blank"
        className="btn-primary mx-auto w-[150px] !text-white mt-4"
      >
        Xem thêm
      </Link>
    </div>
  );
};

export default Gallery;
