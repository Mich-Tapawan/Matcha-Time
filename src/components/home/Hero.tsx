import { useEffect, useState } from "react";
import matchaBg from "../../assets/matcha-bg.png";
import DualText from "./DualText";
import { useIsMobile } from "../../hooks/useIsMobile";
import OrderNowBtn from "../OrderNowBtn";

function getHeroH1FontSize(width: number) {
  if (width >= 1024) return "6rem";
  if (width >= 768) return "3.5rem";
  return "2.7rem";
}

export default function Hero() {
  const isMobile = useIsMobile();
  const [heroH1FontSize, setHeroH1FontSize] = useState(() =>
    getHeroH1FontSize(typeof window !== "undefined" ? window.innerWidth : 1024),
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
      className="w-full min-h-192 bg-cover bg-center bg-no-repeat text-white place-content-center px-4 lg:place-content-end lg:px-20 lg:pb-10"
      style={{ backgroundImage: `url(${matchaBg})` }}
    >
      <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-y-2">
        <p className="text-center lg:col-start-2 lg:row-start-1">
          Japanese aesthetics of taste and tranquility
        </p>

        <h1
          className="text-center my-2 lg:col-span-3 lg:row-start-2 lg:my-0"
          style={{ fontSize: heroH1FontSize, lineHeight: 1.1 }}
        >
          WE ARE MATCHA TIME
        </h1>

        <div className="flex w-full justify-between lg:contents">
          <div className="lg:col-start-1 lg:row-start-1 lg:justify-self-start">
            <DualText text1="naturally" text2="healthy" />
          </div>
          <div className="lg:col-start-3 lg:row-start-1 lg:justify-self-end">
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
