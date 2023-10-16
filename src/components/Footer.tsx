import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section
      className="px-[16px] py-[12px] sm:py-[30px] sm:px-[80px] bg-[#252841] flex sm:items-center justify-between"
    >
      <div className="flex flex-col sm:items-center">
        <a href="/" rel="noopener noreferrer">
          <Image
            src="/assets/images/chew/hl.png"
            alt="err"
            width={80}
            height={80}
            className="rounded-full"
          />
        </a>
        <p className="text-secondary font-normal text-[20px] 2xl:hidden mt-[20px]">
          © 2023 Wedding
        </p>
      </div>
      <p className="text-secondary font-normal text-[20px] max-2xl:hidden">
        © 2023 Wedding
      </p>
    </section>
  );
};

export default Footer;
