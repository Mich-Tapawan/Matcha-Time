import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import matchaBg from "../../assets/matcha-bg.png";
import DualText from "../home/DualText";
import OrderNowBtn from "../OrderNowBtn";
import { fadeUp, staggerContainer } from "../motion/variants";

function getHeroH1FontSize(width: number) {
  if (width >= 1536) return "7rem";
  if (width >= 1280) return "6rem";
  if (width >= 1024) return "4.5rem";
  if (width >= 768) return "3.5rem";
  return "2.7rem";
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
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

  const content = (
    <>
      <div className="flex flex-col xl:grid xl:grid-cols-[1fr_auto_1fr] xl:items-center xl:gap-y-2">
        <motion.p
          className="text-center xl:col-start-2 xl:row-start-1"
          variants={fadeUp}
        >
          Japanese aesthetics of taste and tranquility
        </motion.p>

        <motion.h1
          className="text-center my-2 lg:my-4 xl:col-span-3 xl:row-start-2 xl:my-0"
          style={{ fontSize: heroH1FontSize, lineHeight: 1.1 }}
          variants={fadeUp}
        >
          WE ARE MATCHA TIME
        </motion.h1>

        <div className="flex w-full justify-between xl:contents">
          <motion.div
            className="xl:col-start-1 xl:row-start-1 xl:justify-self-start"
            variants={fadeUp}
          >
            <DualText text1="naturally" text2="healthy" />
          </motion.div>
          <motion.div
            className="xl:col-start-3 xl:row-start-1 xl:justify-self-end"
            variants={fadeUp}
          >
            <DualText text1="culture" text2="aesthetic" />
          </motion.div>
        </div>
      </div>

      <motion.div className="mt-10 flex justify-center xl:hidden" variants={fadeUp}>
        <OrderNowBtn variant="hero" />
      </motion.div>
    </>
  );

  return (
    <section
      className="w-full max-w-full min-h-200 bg-cover bg-center bg-no-repeat text-white place-content-center px-4 lg:px-10 xl:place-content-end xl:px-20 xl:pb-10 2xl:px-32 2xl:pb-16"
      style={{ backgroundImage: `url(${matchaBg})` }}
    >
      {reduceMotion ? (
        content
      ) : (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.14, 0.2)}
        >
          {content}
        </motion.div>
      )}
    </section>
  );
}
