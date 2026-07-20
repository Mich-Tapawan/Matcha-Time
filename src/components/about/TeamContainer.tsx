import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { aboutTeamMembers } from "../../data/aboutTeam";
import ArrowButtons from "../home/ArrowButtons";
import Reveal from "../motion/Reveal";
import { carouselSlide } from "../motion/variants";
import TeamCard from "./TeamCard";

const STACK_TOP_OFFSET_REM = 1.75;
const STACK_BASE_TOP_REM = 5;

export default function TeamContainer() {
  const reduceMotion = useReducedMotion();
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 3;
  const maxStartIndex = Math.max(0, aboutTeamMembers.length - visibleCount);
  const visibleMembers = aboutTeamMembers.slice(
    startIndex,
    startIndex + visibleCount,
  );

  const handleNext = (): void => {
    if (startIndex >= maxStartIndex) return;
    setStartIndex((current) => current + 1);
  };

  const handlePrev = (): void => {
    if (startIndex <= 0) return;
    setStartIndex((current) => current - 1);
  };

  return (
    <section className="w-full bg-[#F2F1E6] px-4 py-10 text-[#2F490C] lg:px-10 xl:px-20 2xl:px-32 2xl:py-20">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <svg
                className="h-2.5 w-2.5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M12 2L2 12l10 10 10-10L12 2z" />
              </svg>
              <span className="text-xs font-medium uppercase tracking-[0.25em] md:text-sm">
                Our Team
              </span>
            </div>
            <h2 className="brand-font text-4xl leading-tight md:text-5xl xl:text-6xl">
              Crafted by Hand.
            </h2>
          </div>

          <div className="hidden xl:block">
            <ArrowButtons
              onPrev={handlePrev}
              onNext={handleNext}
              isLeftDisabled={startIndex === 0}
              isRightDisabled={startIndex >= maxStartIndex}
            />
          </div>
        </Reveal>

        <div className="xl:hidden">
          <div className="relative pb-[30vh]">
            {aboutTeamMembers.map((member, index) => (
              <div
                key={member.id}
                className="sticky mb-20 last:mb-0 md:mb-24"
                style={{
                  top: `calc(${STACK_BASE_TOP_REM}rem + ${index * STACK_TOP_OFFSET_REM}rem)`,
                  zIndex: index + 1,
                }}
              >
                <div className="rounded-[2.25rem] bg-[#FFFDF7] p-4 shadow-[0_28px_70px_-24px_rgba(47,73,12,0.28)] ring-1 ring-[#2F490C]/10 md:p-5">
                  <TeamCard member={member} variant="stack" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden overflow-hidden xl:block">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={startIndex}
              initial={reduceMotion ? false : "initial"}
              animate={reduceMotion ? undefined : "animate"}
              exit={reduceMotion ? undefined : "exit"}
              variants={carouselSlide}
              className="grid grid-cols-3 gap-6 xl:gap-8"
            >
              {visibleMembers.map((member) => (
                <TeamCard key={member.id} member={member} variant="carousel" />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
