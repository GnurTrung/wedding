"use client";
import Footer from "@/components/Footer";
import RunningText from "@/components/RunningText";
import SecondPage from "@/components/SecondPage";
import FirstPage from "@/components/FirstPage";
import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";
import AOS from "aos";
import "aos/dist/aos.css";
import Script from "next/script";
import Header from "@/components/Header";
import { ApplicationProvider, useApplication } from "@/context/useApplication";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      once: true,
    });
  }, []);
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-Y7PRFFJX9R"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-Y7PRFFJX9R', {
					page_path: window.location.pathname,
					});
					`,
        }}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ApplicationProvider>
            <Toaster />
            <Header />
            <FirstPage />
            <RunningText />
            <SecondPage />
            <Footer />
          </ApplicationProvider>
        </>
      )}
    </>
  );
}
