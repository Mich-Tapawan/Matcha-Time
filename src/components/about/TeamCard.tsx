import { useState } from "react";
import { useReducedMotion } from "motion/react";
import type { TeamMember } from "../../data/aboutTeam";

type TeamCardProps = {
  member: TeamMember;
  variant: "stack" | "carousel";
};

export default function TeamCard({ member, variant }: TeamCardProps) {
  const reduceMotion = useReducedMotion();
  const [isLoaded, setIsLoaded] = useState(false);

  const isStack = variant === "stack";
  const useGrayscale = !isStack && !reduceMotion;

  return (
    <article
      className={`group ${isStack ? "w-full" : "h-full w-full min-w-0"}`}
    >
      <div
        className={`relative overflow-hidden bg-[#E5E1C1]/20 ring-1 ring-[#2F490C]/10 transition duration-500 ${
          isStack
            ? "aspect-[4/5] rounded-[1.5rem]"
            : "aspect-[4/5] rounded-[1.75rem] shadow-sm group-hover:-translate-y-1 group-hover:shadow-[0_20px_50px_-18px_rgba(47,73,12,0.25)]"
        }`}
      >
        <img
          src={member.image}
          alt={member.imageAlt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } ${
            useGrayscale
              ? "grayscale group-hover:grayscale-0 group-hover:scale-[1.03]"
              : "scale-100"
          }`}
        />
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2F490C]/20 via-transparent to-transparent transition duration-500 ${
            isStack ? "opacity-60" : "opacity-0 group-hover:opacity-100"
          }`}
          aria-hidden
        />
      </div>

      <div className={`space-y-1 ${isStack ? "px-1 pt-5" : "pt-4"}`}>
        <h3
          className={`brand-font text-[#2F490C] ${
            isStack ? "text-2xl md:text-3xl" : "text-xl xl:text-2xl"
          }`}
        >
          {member.name}
        </h3>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#2F490C]/70 md:text-sm">
          {member.role}
        </p>
      </div>
    </article>
  );
}
