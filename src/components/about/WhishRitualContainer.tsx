import Reveal from "../motion/Reveal";
import { Stagger, StaggerItem } from "../motion/Stagger";

const YOUTUBE_EMBED_URL = "https://www.youtube-nocookie.com/embed/13uVij4DsZk";

export default function WhiskRitualContainer() {
  return (
    <section className="w-full bg-[#F0EDD1] px-4 py-10 text-[#2F490C] lg:px-10 xl:px-20 2xl:px-32 2xl:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center space-y-10">
        <Stagger className="flex w-full max-w-2xl flex-col items-center space-y-5 text-center xl:max-w-3xl">
          <StaggerItem>
            <div className="flex items-center justify-center gap-2">
              <svg
                className="h-2.5 w-2.5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M12 2L2 12l10 10 10-10L12 2z" />
              </svg>
              <span className="text-xs font-medium uppercase tracking-[0.25em] md:text-sm">
                The Ceremony
              </span>
            </div>
          </StaggerItem>

          <StaggerItem>
            <h2 className="brand-font text-4xl leading-tight md:text-5xl lg:text-6xl xl:text-7xl">
              The Ritual of the Whisk
            </h2>
          </StaggerItem>

          <StaggerItem>
            <p className="max-w-md text-sm leading-relaxed text-[#2F490C]/75 md:text-base lg:hidden">
              A dance of bamboo, stone, and water. Witness the preparation of
              the perfect bowl.
            </p>
          </StaggerItem>
        </Stagger>

        <Reveal className="w-full space-y-5" delay={0.1}>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] bg-[#E5E1C1]/20 md:aspect-video md:rounded-[2rem] lg:rounded-[2.5rem]">
            <iframe
              src={YOUTUBE_EMBED_URL}
              title="The Ritual of the Whisk — matcha ceremony"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>

          <div
            className="flex w-full items-center gap-3 md:gap-5"
            aria-label="Ceremony parts"
          >
            <span className="shrink-0 text-[0.65rem] font-medium uppercase tracking-[0.18em] md:text-xs">
              Part I: The Sifting
            </span>

            <div className="relative h-px min-w-0 flex-1 bg-[#2F490C]/30 md:bg-[#2F490C]">
              <div
                className="absolute left-0 top-1/2 h-[2px] w-1/2 -translate-y-1/2 bg-[#2F490C] md:hidden"
                aria-hidden
              />
            </div>

            <span className="shrink-0 text-[0.65rem] font-medium uppercase tracking-[0.18em] md:text-xs">
              Part II: The Whisking
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
