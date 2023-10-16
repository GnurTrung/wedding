import IconArrow from "@/assets/icon/IconArrow";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    !!showMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [showMenu]);
  const linkList = [
    {
      id: 1,
      name: "Home",
      link: "#home",
    },
    {
      id: 2,
      name: "About",
      link: "#about",
    },
    {
      id: 3,
      name: "Airdrop",
      link: "#airdrop",
    },
    {
      id: 4,
      name: "Địa điểm",
      link: "#meme",
    },
  ];
  return (
    <footer className="absolute backdrop-blur-md flex justify-between sm:px-[7rem] py-[15px] w-full items-center z-[10] max-sm:px-[16px]">
      <div className="flex flex-col sm:items-center">
        <a href="/" rel="noopener noreferrer">
          <Image
            src="/assets/images/chew/hl.png"
            alt="err"
            width={60}
            height={61}
            className="rounded-full"
          />
        </a>
      </div>
      <ul
        className={`${
          !showMenu && "max-sm:hidden"
        } flex max-sm:flex-col gap-[13px] sm:gap-[1rem] 2xl:gap-[5rem] max-sm:absolute max-sm:top-0 max-sm:gap-[2rem] max-sm:mt-[4rem] max-sm:bg-[rgba(0,0,0,0.80)] max-sm:h-screen max-sm:w-full max-sm:left-0 max-sm:items-center max-sm:py-[1.5rem]`}
      >
        {linkList.map((item) => (
          <li
            key={item.id}
            className="flex gap-[20px] items-center"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            <a href={item.link}>
              <div className="hover:text-[#996E6D] font-bold hover:cursor-pointer transition-all text-[16px] sm:text-[24px] text-white">
                {item.name}
              </div>
            </a>
          </li>
        ))}
      </ul>
      <IconArrow
        className={`sm:hidden ${showMenu && "rotate-180"} transition-all`}
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      />
    </footer>
  );
};

export default Header;
