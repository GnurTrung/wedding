"use client";
import React from "react";

const FirstPage = () => {
  return (
    <section id="home" className="bg-page1 flex justify-center relative">
      <div
        className="absolute h-full w-full flex justify-center items-center top-0 left-0 rounded-[8px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.4) 100%)",
        }}
      ></div>
      <div className="relative w-full">
        <div className="mt-[15rem] max-md:mt-[7rem] flex flex-col items-center max-sm:px-[1rem] text-base">
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
