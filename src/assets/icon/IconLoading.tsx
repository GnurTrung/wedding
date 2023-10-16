"use client"
import * as React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const IconLoading = () => (
  <Player
    src="https://lottie.host/9d21ed15-a3fa-4251-9796-e3cb3251d254/58P6Cmhb8O.json"
    className="player"
    loop
    autoplay
    style={{ height: 200, width: 200 }}
  />
);
export default IconLoading;
