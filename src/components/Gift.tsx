import React, { lazy, useState } from "react";
import HongBao from "./HongBao";
import ViewRarity from "./Modal/ViewRarity";
import { useApplication } from "@/context/useApplication";
import useShowModal from "@/hooks/useShowModal";

const Gift = () => {
  const [type, setType] = useState("re");
  const { setOpenModalRarity } = useApplication();

  const {
    showModal: showModalSuccess,
    onHide: onHideModalSuccess,
    onShow: onShowModalSuccess,
  } = useShowModal();

  return (
    <section
      id="chucmung"
      className="px-5 sm:px-20 pt-20 sm:pb-40 pb-20 max-sm:flex-col relative"
    >
      <img
        className="absolute inset-0 mx-auto top-5"
        src="/assets/images/chew/divide.png"
        alt="err"
      />
      <img
        className="absolute mx-auto bottom-0 left-0 right-0 overflow-hidden"
        src="/assets/images/chew/divider2-top.png"
        alt="err"
      />
      <div className="flex justify-center">
        <p className="text-[64px] font-[500] text-black max-w-[1000px] py-5">
          Chúc mừng
        </p>
      </div>
      <div className="flex sm:justify-evenly max-sm:flex-col gap-2">
        <div
          className="lg:w-[400px]"
          onClick={() => {
            setType("re");
            onShowModalSuccess();
          }}
        >
          <HongBao title="Chú rể" subTitle="계좌번호 확인" />
        </div>
        <div
          className="lg:w-[400px]"
          onClick={() => {
            setType("dau");
            onShowModalSuccess();
          }}
        >
          <HongBao title="Cô dâu" subTitle="계좌번호 확인" />
        </div>
      </div>
      <ViewRarity
        open={showModalSuccess}
        onCancel={onHideModalSuccess}
        type={type}
      />
    </section>
  );
};

export default Gift;
