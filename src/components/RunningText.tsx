import Image from "next/image";
import React, { lazy } from "react";
import Marquee from "react-fast-marquee";
/* const Marquee = lazy(() => import("react-fast-marquee")); */

const RunningText = () => {
  return (
    <section id="about" className="bgGradientMid px-10 sm:px-20 py-20 flex justify-evenly items-center max-sm:flex-col">
      <div className="sm:w-[40%] text-white flex flex-col gap-3 font-medium max-sm:order-2 text-[20px]">
        <div>
          {`Wake up from a blackout. Hey, you are safe, Baby Chew has got you home.
        Actually it's not just a home, it's a royal palace, king. Turns out you
        bought some $CHEW, you are now so rich that Baby Chew suggest you call
        your boss and quit, don't bother working anymore.`}
        </div>
        <div>
          {`Chillax, you made the right decision, it's the memecoin of memecoins. It's the last and only memecoin you will ever need to remember.`}
        </div>
      </div>
      <Image
        className="max-sm:order-1"
        src="/assets/images/chew/chew_token.gif"
        alt="err"
        width={300}
        height={300}
      />
    </section>
  );
};

export default RunningText;
