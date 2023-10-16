import Image from "next/image";
import React, { lazy } from "react";
/* const Marquee = lazy(() => import("react-fast-marquee")); */

const RunningText = () => {
  return (
    <section
      id="about"
      className="px-10 sm:px-20 py-20 max-sm:flex-col relative"
    >
      <img
        className="absolute inset-0 mx-auto top-5"
        src="/assets/images/chew/sec-title-flower.png"
        alt="err"
      />
      <div className="flex justify-center">
        <p className="text-[50px] font-[500] text-black max-w-[1000px] py-5 max-md:hidden">
          Chú rể & Cô dâu
        </p>
      </div>
      <div className="flex sm:justify-evenly max-sm:flex-col gap-2">
        <div className="flex flex-col gap-3">
          <img className="max-lg:max-w-[300px] max-w-[500px]" src="/assets/images/chew/re.jpeg" alt="err" />
          <div className="flex flex-col justify-center items-center text-[20px]">
            <div className="text-[50px]">Vũ Văn Huy</div>
            <div className="flex flex-row gap-2 text-font-base">Con ông: <div className="font-medium">Vũ Văn Tiến</div></div>
            <div className="flex flex-row gap-2 text-font-base">Con bà: <div className="font-medium">Ngô Thị Nhung</div></div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <img className="max-lg:max-w-[300px] max-w-[500px]" src="/assets/images/chew/dau.jpeg" alt="err"/>
          <div className="flex flex-col justify-center items-center text-[20px]">
            <div className="text-[50px]">... Loan</div>
            <div className="flex flex-row gap-2 text-font-base">Con ông: <div className="font-medium">...</div></div>
            <div className="flex flex-row gap-2 text-font-base">Con bà: <div className="font-medium">...</div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RunningText;
