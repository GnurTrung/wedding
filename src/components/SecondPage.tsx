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
    <section id="airdrop" >
      <div className="flex justify-center font-bold text-[40px] pt-10">Địa điểm</div>
      <div
        className="relative py-10 max-sm:px-[1rem] w-full flex flex-col sm:justify-around sm:flex-row gap-2"
        id="meme"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="500"
      >
        <div>
          <div className="flex justify-center font-bold text-[40px]">
            Nhà trai
          </div>
          <div className="flex justify-center text-font-base text-[25px] mt-5">
            Gia đình ông bà Tiến Nhung, Thôn Hồi Quan, Phường Tương Giang
          </div>
          <div className="flex justify-center text-font-base text-[25px] mb-5">
            Thành phố Từ Sơn, Tỉnh Bắc Ninh
          </div>
          <div className="flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.1976567360275!2d105.98812187596543!3d21.14453088053395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135095a0d448bc5%3A0x3107e3f3ed527e5d!2zQ8ahIHPhu58gc-G6o24geHXhuqV0IMSR4buTIHPGoSBzaW5oIFRp4bq_biBOaHVuZw!5e0!3m2!1sen!2s!4v1699584836013!5m2!1sen!2s"
              width="700"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mb-4 rounded-2xl"
            ></iframe>
          </div>
          <div className=" flex justify-center">
            <Link
              href="https://maps.app.goo.gl/NH3ak6gJVKTYWMGP9"
              rel="noopener noreferrer"
              target="_blank"
              className="btn-primary w-[200px] mt-5 text-white"
            >
              Google Maps
            </Link>
          </div>
          
        </div>
        <div>
          <div className="flex justify-center font-bold text-[40px]">
            Nhà gái
          </div>
          <div className="flex justify-center text-font-base text-[25px] mt-5">
            Gia đình ông bà Tiến Nhung, Thôn Hồi Quan, Phường Tương Giang
          </div>
          <div className="flex justify-center text-font-base text-[25px] mb-5">
            Thành phố Từ Sơn, Tỉnh Bắc Ninh
          </div>
          <div className="flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.1976567360275!2d105.98812187596543!3d21.14453088053395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135095a0d448bc5%3A0x3107e3f3ed527e5d!2zQ8ahIHPhu58gc-G6o24geHXhuqV0IMSR4buTIHPGoSBzaW5oIFRp4bq_biBOaHVuZw!5e0!3m2!1sen!2s!4v1699584836013!5m2!1sen!2s"
              width="700"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mb-4 rounded-2xl"
            ></iframe>
          </div>
          <div className=" flex justify-center">
            <Link
              href="https://maps.app.goo.gl/NH3ak6gJVKTYWMGP9"
              rel="noopener noreferrer"
              target="_blank"
              className="btn-primary w-[200px] mt-5 text-white"
            >
              Google Maps
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondPage;
