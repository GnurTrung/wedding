import CustomModal from ".";
import { Button } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
// import IconSuccess from "../../assets/icon/IconSuccess";

const ViewRarity = ({ open, onCancel, type }: any) => {
  const [img, setImg] = useState("/assets/images/chew/photo-1.png");
  useEffect(() => {
    switch (type) {
      case "re":
        setImg("/assets/images/chew/photo-1.png");
        break;
      case "dau":
        setImg("/assets/images/chew/photo-2.png");
        break;
      default:
        setImg("/assets/images/chew/photo-1.png");
        break;
    }
  }, [type]);
  return (
    <CustomModal
      title=""
      open={open}
      onCancel={onCancel}
      destroyOnClose={true}
      width={430}
      isProcessing={true}
    >
      <div className="flex flex-col items-center">
        <img
          src={img}
          alt="Picture of the author"
          loading="lazy"
          className="object-cover"
        />
        <Button
          className="btn-primary text-white w-[277px] mt-[12px]"
          onClick={() => {
            onCancel();
          }}
        >
          Xong
        </Button>
      </div>
    </CustomModal>
  );
};

export default ViewRarity;
