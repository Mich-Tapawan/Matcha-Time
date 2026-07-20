import { motion, useReducedMotion } from "motion/react";
import { easeOut } from "./motion/variants";

export default function PageLoader() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#2F490C] text-[#E5E1C1]"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="flex flex-col items-center space-y-6 px-6 text-center">
        <motion.div
          className="flex h-14 w-14 items-center justify-center rounded-full border border-[#E5E1C1]/35"
          animate={
            reduceMotion
              ? undefined
              : {
                  rotate: 360,
                  transition: {
                    duration: 2.4,
                    ease: "linear",
                    repeat: Infinity,
                  },
                }
          }
        >
          <svg
            className="h-5 w-5 fill-current"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path d="M12 2L2 12l10 10 10-10L12 2z" />
          </svg>
        </motion.div>

        <div className="space-y-2">
          <p className="brand-font text-3xl tracking-[0.08em] md:text-4xl">
            Matcha Time
          </p>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#E5E1C1]/70">
            Preparing your ritual
          </p>
        </div>

        <div className="h-px w-24 overflow-hidden bg-[#E5E1C1]/20">
          <motion.div
            className="h-full w-1/2 bg-[#E5E1C1]"
            animate={
              reduceMotion
                ? undefined
                : {
                    x: ["-100%", "200%"],
                    transition: {
                      duration: 1.4,
                      ease: easeOut,
                      repeat: Infinity,
                    },
                  }
            }
          />
        </div>
      </div>
    </div>
  );
}
