import { useState } from "react";
import LeafIcon from "@iconify-react/mdi/leaf";
import originImg from "../../assets/about/origin-img.jpg";
import Reveal from "../motion/Reveal";

export default function OriginContainer() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="w-full bg-[#F2F1E6] px-4 py-10 lg:px-10 xl:px-20 2xl:px-32 2xl:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-8 xl:gap-10">
        <Reveal
          direction="left"
          className="w-full max-w-[25rem] flex flex-1 flex-col justify-between space-y-10 rounded-tl-[3.5rem] rounded-br-[3.5rem] bg-[#364524] px-8 py-10 text-white md:rounded-tl-[5rem] md:rounded-br-[5rem] md:px-10 md:py-12 lg:px-12 xl:space-y-14 xl:py-14"
        >
          <div className="space-y-5 xl:space-y-8">
            <div className="flex items-center gap-2">
              <svg
                className="h-2.5 w-2.5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M12 2L2 12l10 10 10-10L12 2z" />
              </svg>
              <span className="text-xs font-medium uppercase tracking-[0.25em] md:text-sm">
                The Origin
              </span>
            </div>

            <h2 className="brand-font text-3xl leading-tight md:text-4xl lg:text-5xl xl:text-6xl">
              Whispers from the Hills of Uji.
            </h2>

            <div className="space-y-5 text-sm leading-relaxed text-white/90 md:text-base xl:text-lg">
              <p>
                Our journey begins in the misty highlands of Kyoto, where tea
                cultivation is not merely agriculture, but a century-old
                dialogue with the elements.
              </p>
              <p>
                We partner exclusively with multi-generational family estates
                that practice shaded cultivation for 20 days prior to harvest,
                coaxing out the vibrant l-theanine and deep umami that defines
                our ceremonial grade.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="group flex w-fit cursor-pointer items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] underline underline-offset-4 transition duration-300 hover:text-[#E5E1C1] md:text-sm"
          >
            <LeafIcon className="h-4 w-4" aria-hidden />
            Our Sourcing Ethos
          </button>
        </Reveal>

        <Reveal
          direction="right"
          delay={0.1}
          className="min-h-[20rem] flex-1 lg:min-h-0"
        >
          <div className="relative h-full min-h-[20rem] overflow-hidden rounded-[1.5rem] bg-[#E5E1C1]/20 md:rounded-[2rem] lg:min-h-full">
            <img
              src={originImg}
              alt="Terraced tea fields in the hills of Uji"
              loading="lazy"
              onLoad={() => setIsLoaded(true)}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
