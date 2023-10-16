/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import CustomProgressBar from "./CustomProgressBar";
import { useApplication } from "@/context/useApplication";
import { formatWallet } from "@/utils";
import { toast } from "react-hot-toast";
import Link from "next/link";

const SecondPage = () => {
  const { setOpenModalRarity, setOpenWallet, handleDisconnectSei } =
    useApplication();

  const list = [
    {
      id: 1,
      content: "SEI Airdrop Eligible Wallet (Optional)",
    },
    {
      id: 2,
      content: "Minted 1 Chew Chew (Sei Mainnet)",
    },
    {
      id: 3,
      content: "Minted Chew Chew",
    },
    {
      id: 4,
      content: "Minted Chew Chew",
    },
    {
      id: 5,
      content: "Invited  friends (holder $CHEW)",
    },
    {
      id: 6,
      content: "Invited 10+ friends (holder $CHEW)",
    },
    {
      id: 7,
      content: "$000 volume traded",
    },
    {
      id: 8,
      content: "$000 volume traded",
    },
    {
      id: 9,
      content: "$000 volume traded",
    },
    {
      id: 10,
      content: "$000 volume traded",
    },
  ];

  return (
    <section id="airdrop">
      {/* <div className="flex flex-col bgChewAirdrop py-20 relative">
        <Image
          className="mt-6 self-center"
          src="/assets/images/chew/chew_rainbow.gif"
          alt="err"
          width={150}
          height={150}
        />
        <div className="sm:text-[64px] text-[32px] uppercase font-extrabold flex flex-row gap-3 self-center">
          <div className="text-[#D30B0B]">AIRDROP</div>
          <div className="text-[#0B43D3]">Tier Check</div>
        </div>
        <Image
          className="absolute top-20 sm:left-40 left-10 max-sm:hidden"
          src="/assets/images/chew/chew_pink.gif"
          alt="err"
          width={100}
          height={100}
        />
        <Image
          className="absolute bottom-20 sm:right-40 right-10 max-sm:hidden"
          src="/assets/images/chew/chew_violet.gif"
          alt="err"
          width={100}
          height={100}
        />
        <Image
          className="absolute bottom-0 sm:left-60 left-10 max-sm:hidden"
          src="/assets/images/chew/chew_blue.gif"
          alt="err"
          width={80}
          height={80}
        />
      </div>
      <div className="relative">
        <img
          className="absolute inset-0 mx-auto"
          src="/assets/images/chew/divider1-darkest.png"
          alt="err"
        />
        <div className="flex max-sm:flex-col justify-between sm:py-20 max-w-[90rem] mx-auto">
          <div className="flex gap-[30px] max-sm:px-[1rem]">
            <Image
              className="max-sm:w-[60px] max-sm:h-[900px]"
              src="/assets/images/chew/lists.png"
              alt="err"
              width={72}
              height={1040}
            />
            <ul className="flex flex-col gap-[77px] mt-[1.5rem] max-sm:mt-[1rem] max-sm:gap-[74px]">
              {list.map((item) => (
                <li
                  className={`text-[#343C50] text-[20px] font-[600] max-sm:text-[14px] ${
                    item.id >= 3 && "blur-[7px]"
                  }`}
                  key={item.id}
                >
                  {item.content}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[white] flex flex-col py-20 px-10 rounded-[32px] text-center sm:w-[40%] relative justify-start self-start max-sm:mx-[1rem] max-sm:mt-[3rem]">
            <div className="text-[#D30B0B] text-[32px] font-semibold mb-8">
              Oh shit, you must be kidding me, what?? $CHEW AIRDROP?
            </div>
            <CustomProgressBar
              current={8000000000000}
              max={1000000000000000}
              title={"Received (0)"}
              unit=""
            />
            <input
              disabled
              defaultValue={0}
              // onChange={onChange}
              className="w-full h-[40px] bg-[#FFE3E9] px-[16px] py-[10px] rounded-[32px] border border-solid border-[#FF6262] text-[18px] font-semibold"
            />
            <Image
              className="absolute bottom-14 left-18 max-sm:hidden"
              src="/assets/images/chew/chew_hammer.gif"
              alt="err"
              width={200}
              height={200}
            />
          </div>
        </div>
        <img
          className="absolute mx-auto bottom-0 left-0 right-0 overflow-hidden"
          src="/assets/images/chew/flowers-and-leaves.png"
          alt="err"
        />
      </div> */}

      <div
        className="bg-[#FFE1E7] relative py-20 max-sm:px-[1rem] w-full"
        id="meme"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="500"
      >
        <div className="flex justify-center font-bold text-[40px]">
          Địa điểm
        </div>
        <div className="flex justify-center text-font-base text-[25px] mt-5">
          Sân vận động khu phố Hồi Quan, thị xã Tương Giang
        </div>
        <div className="flex justify-center text-font-base text-[25px] mb-5">
          Thành phố Từ Sơn, Tỉnh Bắc Ninh
        </div>
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930.2967299559931!2d105.99318347977983!3d21.144958317746937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313509b5232ed8f7%3A0x2644dd1605ee0cf5!2zU8OibiBW4bqtbiDEkOG7mW5nIEjhu5NpIFF1YW4!5e0!3m2!1sen!2s!4v1697385084839!5m2!1sen!2s"
            width="1300"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mb-4 rounded-2xl"
          ></iframe>
        </div>
        <div className=" flex justify-center">
          <Link
            href="https://maps.app.goo.gl/2Pqf3LDz6WMRRpJcA"
            rel="noopener noreferrer"
            target="_blank"
            className="btn-primary w-[200px] mb-24 max-md:mb-10 text-white"
          >
            Google Maps
          </Link>
        </div>
        <img
          className="absolute mx-auto bottom-0 left-0 right-0 overflow-hidden"
          src="/assets/images/chew/divider2-top.png"
          alt="err"
        />
      </div>
    </section>
  );
};

export default SecondPage;
