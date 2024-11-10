"use client";
import { ApplicationProvider } from "@/context/useApplication";
import Loading from "@/app/loading";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";
import FirstPage from "@/components/FirstPage";
import RunningText from "@/components/RunningText";
import SecondPage from "@/components/SecondPage";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import Aos from "aos";
import { useEffect, useState } from "react";
import SecondPageFun from "@/components/SecondPageFun";
const FunContainer = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      once: true,
    });
  }, []);

  return (
    <div>
      {" "}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ApplicationProvider>
            <Toaster />
            <Header />
            <FirstPage />
            <RunningText />
            <SecondPageFun />
            <Gallery />
            <Footer />
          </ApplicationProvider>
        </>
      )}
    </div>
  );
};
export default FunContainer;
