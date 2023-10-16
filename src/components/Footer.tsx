import Image from "next/image";
import React from "react";
import IconBall from "../assets/icon/IconBall";

const Footer = () => {
  const linkList = [
    // {
    //   id: 1,
    //   name: "website",
    //   href: "https://venomape.club",
    // },
    {
      id: 1,
      name: "Documentory",
      href: "https://docs.chewchew.wtf/",
    },
    {
      id: 3,
      name: "Twitter",
      href: "https://twitter.com/chewjpeg",
    },
  ];
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
          © 2023 CHEW CHEW
        </p>
      </div>
      <p className="text-secondary font-normal text-[20px] max-2xl:hidden">
        © 2023 CHEW CHEW
      </p>
      <ul className="flex max-2xl:flex-col gap-[13px] sm:gap-[1rem] 2xl:gap-[5rem] max-sm:mt-[2rem]">
        {linkList.map((item) => (
          <li key={item.id} className="flex gap-[20px] items-center">
            <IconBall />
            <a
              className="hover:text-[#996E6D] transition-all font-semibold text-[16px] sm:text-[32px] text-white "
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Footer;
