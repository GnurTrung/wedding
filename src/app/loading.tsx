import { Player } from "@lottiefiles/react-lottie-player";
import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="fixed bg-[black] w-full h-screen text-white text-[10rem] z-50 flex justify-center items-center">
      <div className="max-sm:w-[7rem] flex flex-col justify-center items-center">
        {/* <Player
          autoplay
          loop
          src="https://lottie.host/313f030b-2196-4365-923a-0f515b0afad9/e014Q5XahE.json"
          // style={{ height: "300px", width: "300px" }}
          className="player"
        /> */}
        <p className="text-white text-[24px] font-[800] font-primary">
          LOADING...
        </p>
      </div>
    </div>
  );
};

export default Loading;
