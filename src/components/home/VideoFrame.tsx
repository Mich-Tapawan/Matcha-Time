import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import aboutMatchaVideo from "../../assets/about/about_matcha.mp4";
import { fadeUp, staggerContainer } from "../motion/variants";

function HeroActions() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
      <Link
        to="/menu"
        className="inline-flex min-w-[10.5rem] items-center justify-center border border-white bg-transparent px-8 py-3 text-sm font-medium uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-white hover:text-[#2F490C]"
      >
        View Menu
      </Link>
      <Link
        to="/about"
        className="inline-flex min-w-[10.5rem] items-center justify-center border border-white bg-white px-8 py-3 text-sm font-medium uppercase tracking-[0.18em] text-[#2F490C] transition duration-300 hover:bg-transparent hover:text-white"
      >
        Our Story
      </Link>
    </div>
  );
}

export default function VideoFrame() {
  const reduceMotion = useReducedMotion();

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

      <motion.div variants={fadeUp} className="w-full pt-2">
        <HeroActions />
      </motion.div>
    </div>
  );

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 py-10 text-white lg:px-10 xl:px-20 2xl:px-32 2xl:py-20">
      <div className="absolute inset-0 overflow-hidden bg-[#2F490C]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={aboutMatchaVideo} type="video/mp4" />
        </video>

        <div
          className="pointer-events-none absolute inset-0 bg-black/70"
          aria-hidden
        />
      </div>

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
          <div className="w-full pt-2">
            <HeroActions />
          </div>
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
