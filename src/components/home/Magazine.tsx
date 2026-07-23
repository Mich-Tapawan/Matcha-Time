import { Stagger, StaggerItem } from "../motion/Stagger";

const MAGAZINE_TICKER =
  "WHISKED FRESH DAILY • CEREMONIAL GRADE UJI MATCHA • SLOW DOWN, IT'S MATCHA TIME • ARTISANAL DESSERTS • FIND YOUR CALM • ICED BLENDS & SPARKLERS • ";

const headlineClass =
  "brand-font text-primary uppercase text-center leading-[0.92] tracking-tight text-[4rem] md:text-6xl lg:text-7xl xl:text-[7rem] 2xl:text-[8rem] [text-shadow:0_2px_12px_rgba(83,89,51,0.14)]";

function MagazineTicker() {
  const tickerContent = MAGAZINE_TICKER.repeat(4);

  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-1/2 z-0 w-full -translate-y-1/2 overflow-hidden"
      aria-hidden
    >
      <div className="magazine-marquee flex w-max whitespace-nowrap">
        <span className="px-6 text-[0.625rem] font-medium uppercase tracking-[0.2em] text-primary/75 md:text-sm">
          {tickerContent}
        </span>
        <span className="px-6 text-[0.625rem] font-medium uppercase tracking-[0.2em] text-primary/75 md:text-sm">
          {tickerContent}
        </span>
      </div>
    </div>
  );
}

export default function Magazine() {
  return (
    <section className="relative w-full overflow-hidden bg-secondary px-4 py-16 lg:px-10 xl:px-20 xl:py-24 2xl:px-32 2xl:py-32">
      <Stagger
        className="relative mx-auto flex w-full max-w-full min-h-100 flex-col items-center justify-center xl:min-h-120 2xl:min-h-140"
        stagger={0.08}
        amount={0.25}
      >
        <StaggerItem className={headlineClass}>Tea Ceremony</StaggerItem>

        <StaggerItem className="relative flex w-full items-center justify-center py-1 md:py-2">
          <MagazineTicker />
          <div
            className={`${headlineClass} relative z-10 blur-[1.5px] md:blur-[2px]`}
          >
            Art Matches
          </div>
        </StaggerItem>

        <StaggerItem className={headlineClass}>
          <span className="md:hidden">
            Secrets of
            <br />
            Matcha
          </span>
          <span className="hidden md:inline">Secrets of Matcha</span>
        </StaggerItem>

        <StaggerItem className={headlineClass}>Traditions</StaggerItem>

        <StaggerItem className={headlineClass}>
          <span className="md:hidden">
            Journey to
            <br />
            Matcha
          </span>
          <span className="hidden md:inline">Journey to Matcha</span>
        </StaggerItem>
      </Stagger>
    </section>
  );
}
