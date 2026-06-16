import { useEffect, useState } from "react";
import matchaBg from "../../assets/matcha-bg.png";
import DualText from "./DualText";
import { useIsMobile } from "../../hooks/useIsMobile";
import OrderNowBtn from "../OrderNowBtn";

function getHeroH1FontSize(width: number) {
  if (width >= 1536) return "7rem";
  if (width >= 1280) return "6rem";
  if (width >= 1024) return "4.5rem";
  if (width >= 768) return "3.5rem";
  return "2.7rem";
}

export default function Hero() {
  const isMobile = useIsMobile();
  const [heroH1FontSize, setHeroH1FontSize] = useState(() =>
    getHeroH1FontSize(typeof window !== "undefined" ? window.innerWidth : 1280),
  );

  useEffect(() => {
    const handleResize = () => {
      setHeroH1FontSize(getHeroH1FontSize(window.innerWidth));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className="w-full max-w-full min-h-192 bg-cover bg-center bg-no-repeat text-white place-content-center px-4 lg:px-10 xl:place-content-end xl:px-20 xl:pb-10 2xl:px-32 2xl:pb-16"
      style={{ backgroundImage: `url(${matchaBg})` }}
    >
      <div className="flex flex-col xl:grid xl:grid-cols-[1fr_auto_1fr] xl:items-center xl:gap-y-2">
        <p className="text-center xl:col-start-2 xl:row-start-1">
          Japanese aesthetics of taste and tranquility
        </p>

        <h1
          className="text-center my-2 lg:my-4 xl:col-span-3 xl:row-start-2 xl:my-0"
          style={{ fontSize: heroH1FontSize, lineHeight: 1.1 }}
        >
          WE ARE MATCHA TIME
        </h1>

        <div className="flex w-full justify-between xl:contents">
          <div className="xl:col-start-1 xl:row-start-1 xl:justify-self-start">
            <DualText text1="naturally" text2="healthy" />
          </div>
          <div className="xl:col-start-3 xl:row-start-1 xl:justify-self-end">
            <DualText text1="culture" text2="aesthetic" />
          </div>
        </div>
      </div>

      {isMobile ? (
        <div className="m-10">
          <OrderNowBtn />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
