/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const SecondPage = () => {
  return (
    <section id="diadiem" className="relative">
      <img
        className="absolute inset-0 mx-auto top-5"
        src="/assets/images/chew/divide.png"
        alt="err"
      />
      <div className="flex justify-center text-[64px] pt-20">Tiệc cưới</div>
      <div className="flex justify-center text-[28px] pt-5">
        Trân trọng kính mời bạn
      </div>
      <div className="flex justify-center text-[28px]">
        đến tham gia bữa tiệc
      </div>
      <div className="flex justify-center text-[28px]">
        chung vui cùng gia đình chúng tôi
      </div>
      <div
        className="relative pb-10 max-sm:px-[1rem] w-full flex flex-col sm:justify-around sm:flex-row gap-2"
        id="meme"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="500"
      >
        <div>
          <div className="flex justify-center font-bold text-[40px]">
            Nhà trai
          </div>

          <div className="flex justify-center text-[26px] mt-5 text-font-base">
            10h - 20/10/2023 (Âm lịch)
          </div>
          <div className="flex justify-center text-[24px] text-font-base">
            Tức - 02/12/2023 (Dương lịch)
          </div>
          <div className="flex justify-center text-[28px] mt-5 font-medium text-font-base">
            Gia đình ông bà Tiến Nhung
          </div>
          <div className="flex justify-center text-[20px] mt-5 text-font-base">
            KP. Hồi Quan, Tương Giang
          </div>
          <div className="flex justify-center text-[20px] mb-5 text-font-base">
            TP. Từ Sơn, T. Bắc Ninh
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
          <div className="flex justify-center text-[26px] mt-5 text-font-base">
            18h - 19/10/2023 (Âm lịch)
          </div>
          <div className="flex justify-center text-[24px] text-font-base">
            Tức - 01/12/2023 (Dương lịch)
          </div>
          <div className="flex justify-center text-[28px] mt-5 font-medium text-font-base">
            Gia đình ông bà Hiệp Mai
          </div>
          <div className="flex justify-center text-[20px] mt-5 text-font-base">
            Đồng Bèo - Phù Khê Đông.
          </div>
          <div className="flex justify-center text-[20px] mb-5 text-font-base">
            TP. Từ Sơn, T. Bắc Ninh
          </div>
          <div className="flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3721.306810338356!2d105.93872!3d21.140185!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135074c414e78e5%3A0xd56caf73f3fb62e9!2zxJDhu5MgR-G7lyBN4bu5IE5naOG7hyBIaeG7h3AgTWFp!5e0!3m2!1sen!2s!4v1699844247841!5m2!1sen!2s"
              width="700"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mb-4 rounded-2xl"
            ></iframe>
          </div>
          <div className=" flex justify-center">
            <Link
              href="https://www.google.com/maps/place/4WRQ%2B3FH+Đồ+Gỗ+Mỹ+Nghệ+Hiệp+Mai,+Phù+Khê+Đông,+Từ+Sơn,+Bắc+Ninh,+Vietnam/@21.140185,105.93872,17z/data=!4m6!3m5!1s0x3135074c414e78e5:0xd56caf73f3fb62e9!8m2!3d21.140185!4d105.93872!16s%2Fg%2F11t6yymvq0"
              rel="noopener noreferrer"
              target="_blank"
              className="btn-primary w-[200px] mt-5 text-white"
            >
              Google Maps
            </Link>
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

export default SecondPage;
