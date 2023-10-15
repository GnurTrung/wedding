"use client";
import Image from "next/image";
import React, { useState } from "react";
import ViewRarity from "./Modal/ViewRarity";
import { useApplication } from "@/context/useApplication";
import { toast } from "react-hot-toast";

const FirstPage = () => {
  const { setOpenModalRarity } = useApplication();
  return (
    <section id="home" className="bg-page1 flex justify-center">
      <ViewRarity />
      <div className="relative w-full">
        <Image
          src={"/assets/images/chew/chew_pink.gif"}
          alt="err"
          width={125}
          height={125}
          className="absolute top-[15rem] left-[25rem] max-sm:hidden"
        />
        <Image
          src={"/assets/images/chew/chew_violet.gif"}
          alt="err"
          width={83}
          height={83}
          className="absolute top-[10rem] right-[20rem] max-sm:hidden"
        />
        <Image
          src={"/assets/images/chew/chew_green.gif"}
          alt="err"
          width={61.6}
          height={61.6}
          className="absolute top-[40rem] right-[45rem] max-sm:hidden"
        />
        <Image
          src={"/assets/images/chew/chew_blue.gif"}
          alt="err"
          width={44.3}
          height={44.3}
          className="absolute right-[25rem] top-[50rem] max-sm:hidden"
        />
        <Image
          src={"/assets/images/chew/xe_chew.png"}
          alt="err"
          width={443.2}
          height={266.8}
          className="absolute left-[20rem] top-[55rem] z-[3] max-sm:hidden"
        />
        <Image
          src={"/assets/images/chew/chew_dap_chao.gif"}
          alt="err"
          width={231.2}
          height={226}
          className="absolute left-[5rem] top-[62rem] max-sm:hidden"
        />
        <Image
          src={"/assets/images/chew/free_fire.gif"}
          alt="err"
          width={135}
          height={135}
          className="absolute left-[18rem] top-[67.5rem] z-[5] max-sm:hidden"
        />
        <Image
          src={"/assets/images/chew/nen.png"}
          alt="err"
          width={136}
          height={26.3}
          className="absolute left-[18rem] top-[75rem] max-sm:hidden"
        />
        <Image
          src={"/assets/images/chew/chew_list_3.gif"}
          alt="err"
          width={436.4}
          height={107}
          className="absolute left-[43rem] top-[65rem] max-sm:hidden"
        />
        <div className="mt-[15rem] max-md:mt-[5rem] flex flex-col items-center max-sm:px-[1rem] text-base">
          <p className="text-[100px] font-[500] text-white max-w-[1000px] -rotate-12 py-20 max-md:hidden">
            Văn Huy & ... Loan
          </p>
          <p className="text-[100px] font-[500] text-white max-w-[1000px] -rotate-12 py-10 md:hidden">
            Văn Huy
          </p>
          <p className="text-[100px] font-[500] text-white max-w-[1000px] -rotate-12 py-10 md:hidden">
           &
          </p>
          <p className="text-[100px] font-[500] text-white max-w-[1000px] -rotate-12 py-10 md:hidden">
            ... Loan
          </p>
            <h2 className="text-[22px] text-font-base font-[600] text-white p-8 absolute m-auto bottom-32 uppercase">
              | We are getting married |
            </h2>
            <h2 className="text-[28px] text-white py-[24px] absolute m-auto bottom-20 uppercase">
              Thứ Sáu, 02/12/2023
            </h2>
            <h2 className="text-[16px] text-font-base text-white absolute m-auto bottom-16 uppercase">
              Tức 20/10/2023 (Âm Lịch)
            </h2>
        </div>
      </div>
    </section>
  );
};

export default FirstPage;
