import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className="px-[16px] py-[12px] sm:py-[30px] sm:px-[80px] bg-[#000000] flex items-center justify-between">
      <div className="flex flex-col sm:items-center">
        <a href="/">
          {/* <Image
            src="/assets/images/chew/logo.png"
            alt="err"
            width={80}
            height={80}
            className="rounded-full"
          /> */}
          <div className="text-white flex text-[24px]">
            T <div className="ml-2">❤︎</div> K
          </div>
        </a>
        {/* <p className="text-secondary font-normal text-[20px] 2xl:hidden mt-[20px]">
          © 2024 Wedding
        </p> */}
      </div>
      <p className="text-secondary font-normal text-[20px]">
        © 2024 Wedding
      </p>
    </section>
  );
};

export default Footer;
