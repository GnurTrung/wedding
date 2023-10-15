import IconClose from "@/assets/icon/IconClose";
import { useApplication } from "@/context/useApplication";
import Image from "next/image";
import React, { useEffect } from "react";

const ViewRarity = () => {
  const { openModalRarity, setOpenModalRarity } = useApplication();

  useEffect(() => {
    !!openModalRarity
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [openModalRarity]);

  const list = [
    {
      id: 1,
      img: "/assets/images/chew/rarity/chew1.png",
      name: "#1",
    },
    {
      id: 2,
      img: "/assets/images/chew/rarity/chew2.png",
      name: "#1111",
    },
    {
      id: 3,
      img: "/assets/images/chew/rarity/chew3.png",
      name: "#122",
    },
    {
      id: 4,
      img: "/assets/images/chew/rarity/chew4.png",
      name: "#555",
    },
    {
      id: 5,
      img: "/assets/images/chew/rarity/chew5.png",
      name: "#1333",
    },
    {
      id: 6,
      img: "/assets/images/chew/rarity/chew6.png",
      name: "#1444",
    },
  ];

  return (
    <div
      className={`opacity-0 z-[-1] ${
        openModalRarity && "!opacity-100 !z-50 "
      } transition-all duration-500 bg-[rgba(0,0,0,0.80)] !py-[32.5px]  fixed h-screen w-full flex justify-center items-center overflow-y-scroll`}
    >
      <div
        className={` mt-[15rem] sm:w-[70%] ${
          openModalRarity && "!mt-[100px]"
        } transition-all duration-500 bg-white p-[24px] rounded-[24px] relative `}
      >
        <IconClose
          className="right-[2rem] top-[2.5rem] absolute cursor-pointer"
          onClick={() => {
            setOpenModalRarity(false);
          }}
        />
        <p className="text-[#D30B0B] text-[32px] font-[600] text-center">
          View Rarity
        </p>
        <Image
          src={"/assets/images/chew/ChewChew-Trait-Rarity-Chart.png"}
          className="py-[32px]"
          alt="err"
          width={1460}
          height={516}
        />
        <p className="text-[32px] mb-[1rem] font-[600] text-[#2F2935a]">
          One of one Chew Chew
        </p>
        <ul className="flex justify-between">
          {list.map((item) => (
            <li key={item.id}>
              <Image
                src={item.img}
                className=""
                alt="err"
                width={200}
                height={200}
              />
              {/* <p className="text-[#2F2935] text-[20px] font-[600] text-center">
                {item.name}
              </p> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ViewRarity;
