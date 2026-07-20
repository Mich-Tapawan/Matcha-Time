import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import matchaCafe from "../../assets/offer/matcha-cafe.jpg";
import { fadeUp, staggerContainer } from "../motion/variants";

export default function VideoFrame() {
  const reduceMotion = useReducedMotion();
  const [isMediaLoaded, setIsMediaLoaded] = useState(false);

  const content = (
    <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center space-y-5 text-center xl:max-w-4xl xl:space-y-8">
      <motion.span
        className="text-xs font-medium uppercase tracking-[0.25em] md:text-sm"
        variants={fadeUp}
      >
        Established in Uji
      </motion.span>

      <motion.h1
        className="brand-font text-4xl leading-tight md:text-5xl lg:text-6xl xl:text-7xl"
        variants={fadeUp}
      >
        Honoring the Slow Rhythm.
      </motion.h1>

      <motion.p
        className="brand-font max-w-xl text-base italic leading-relaxed md:text-lg xl:max-w-2xl xl:text-xl"
        variants={fadeUp}
      >
        In a world that demands speed, we choose to whisk slowly, honoring the
        ancient dance between earth, water, and spirit.
      </motion.p>
    </div>
  );

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 py-10 text-white lg:px-10 xl:px-20 2xl:px-32 2xl:py-20">
      <div className="absolute inset-0 bg-[#E5E1C1]/20">
        <video
          poster={matchaCafe}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsMediaLoaded(true)}
          className={`h-full w-full object-cover transition-opacity duration-700 ${
            isMediaLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/videos/matcha-about.mp4" type="video/mp4" />
        </video>

        <img
          src={matchaCafe}
          alt=""
          aria-hidden
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            isMediaLoaded ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>

      <div className="absolute inset-0 bg-black/45" aria-hidden />

      {reduceMotion ? (
        <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center space-y-5 text-center xl:max-w-4xl xl:space-y-8">
          <span className="text-xs font-medium uppercase tracking-[0.25em] md:text-sm">
            Established in Uji
          </span>
          <h1 className="brand-font text-4xl leading-tight md:text-5xl lg:text-6xl xl:text-7xl">
            Honoring the Slow Rhythm.
          </h1>
          <p className="brand-font max-w-xl text-base italic leading-relaxed md:text-lg xl:max-w-2xl xl:text-xl">
            In a world that demands speed, we choose to whisk slowly, honoring
            the ancient dance between earth, water, and spirit.
          </p>
        </div>
      ) : (
        <motion.div
          className="relative z-10 w-full"
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
