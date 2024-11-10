/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";

const SecondPageFun = () => {
  return (
    <section id="diadiem" className="relative">
      <img
        className="absolute inset-0 mx-auto top-5"
        src="/assets/images/chew/divide.png"
        alt="err"
      />
      <div className="flex justify-center text-[64px] pt-20">
        Tiệc cưới trọn vẹn
      </div>
      <div className="flex justify-center text-[28px]">
        Lịch trình ăn chơi đậm sâu cùng cô dâu
      </div>
      <div className="flex justify-center text-[24px] text-font-base font-normal mt-2">
        Tại Tư gia nhà gái 
      </div>
      <div className="flex justify-center text-[20px] text-font-base font-light mt-2">
        SN 587 - Lý Thường Kiệt – KP. Đa Hội
      </div>
      <div className="flex justify-center text-[20px] mb-5 text-font-base font-light">
        P. Châu Khê – TP. Từ Sơn - Bắc Ninh
      </div>
      <div className=" flex justify-center">
        <Link
          href="https://maps.app.goo.gl/jhq51hbJryKzA1Hd6"
          rel="noopener noreferrer"
          target="_blank"
          className="btn-primary w-[200px] text-white"
        >
          Google Maps
        </Link>
      </div>
      <div className="max-sm:flex max-sm:flex-col max-sm:gap-4 px-5 mt-4">
        <div className="flex justify-center">
          <div className="sm:grid sm:grid-cols-2 sm:items-center max-sm:flex max-sm:flex-col">
            <Image
              src="/assets/images/chew/set1.jpg"
              alt="Picture of the author"
              quality={100}
              width={500}
              height={500}
              loading="lazy"
              className="object-cover h-[400px]"
            />
            <div>
              <div className="flex justify-center font-bold text-[40px] max-sm:mt-4">
                Đêm ca nhạc
              </div>
              <div className="flex justify-center text-[26px] mt-3 text-font-base">
                19h thứ Hai - 18/11/2024
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="sm:grid sm:grid-cols-2 sm:items-center max-sm:flex max-sm:flex-col-reverse">
            <div className="flex flex-col items-center">
              <div className="font-bold text-[40px] max-sm:mt-4">
                Lễ ăn hỏi & đón dâu
              </div>
              <div className="text-[26px] mt-3 text-font-base">
                8h15p thứ Ba - 19/11/2024
              </div>
            </div>
            <Image
              src="/assets/images/chew/set2.jpg"
              alt="Picture of the author"
              quality={100}
              width={500}
              height={500}
              loading="lazy"
              className="object-cover h-[400px]"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="sm:grid sm:grid-cols-2 sm:items-center max-sm:flex max-sm:flex-col">
            <Image
              src="/assets/images/chew/set3.jpg"
              alt="Picture of the author"
              quality={100}
              width={500}
              height={500}
              loading="lazy"
              className="object-cover h-[400px]"
            />
            <div className="flex flex-col items-center">
              <div className="font-bold text-[40px] max-sm:mt-4">
                Tiệc ăn hỏi
              </div>
              <div className="text-[26px] mt-3 text-font-base">
                17h thứ Ba - 19/11/2024
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="sm:grid sm:grid-cols-2 sm:items-center max-sm:flex max-sm:flex-col-reverse">
            <div>
              <div className="flex justify-center font-bold text-[40px] max-sm:mt-4">
                Tiệc trà
              </div>
              <div className="flex justify-center text-[26px] mt-3 text-font-base">
                19h thứ Ba - 19/11/2024
              </div>
            </div>
            <Image
              src="/assets/images/chew/set6.jpg"
              alt="Picture of the author"
              quality={100}
              width={500}
              height={500}
              loading="lazy"
              className="object-cover h-[400px]"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="sm:grid sm:grid-cols-2 sm:items-center max-sm:flex max-sm:flex-col">
            <Image
              src="/assets/images/chew/set4.jpg"
              alt="Picture of the author"
              quality={100}
              width={500}
              height={500}
              loading="lazy"
              className="object-cover h-[400px]"
            />
            <div className="flex flex-col items-center">
              <div className="font-bold text-[40px] max-sm:mt-4">Tiệc cưới</div>
              <div className="text-[26px] mt-3 text-font-base">
                11h thứ Tư - 20/11/2024
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="sm:grid sm:grid-cols-2 sm:items-center max-sm:flex max-sm:flex-col-reverse">
            <div className="flex flex-col items-center">
              <div className="font-bold text-[40px] max-sm:mt-4">Lễ vu quy</div>
              <div className="text-[26px] mt-3 text-font-base">
                15h15p thứ Tư - 20/11/2024
              </div>
            </div>
            <Image
              src="/assets/images/chew/set5.jpg"
              alt="Picture of the author"
              quality={100}
              width={500}
              height={500}
              loading="lazy"
              className="object-cover h-[400px]"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center text-[28px] mt-5">
        Sự hiện diện của bạn
      </div>
      <div className="flex justify-center text-[28px] mb-8">
        là niềm vinh hạnh cho gia đình chúng tôi
      </div>
    </section>
  );
};

export default SecondPageFun;
