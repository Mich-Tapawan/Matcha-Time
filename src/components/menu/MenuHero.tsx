import Reveal from "../motion/Reveal";

export default function MenuHero() {
  return (
    <Reveal className="mx-auto flex w-full max-w-3xl flex-col items-center space-y-5 text-center xl:max-w-4xl">
      <div className="flex items-center justify-center gap-2 text-[#2F490C]">
        <svg
          className="h-2.5 w-2.5 fill-current"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path d="M12 2L2 12l10 10 10-10L12 2z" />
        </svg>
        <span className="text-xs font-medium uppercase tracking-[0.25em] md:text-sm">
          Our Menu
        </span>
      </div>

      <h1 className="brand-font text-4xl leading-tight text-[#2F490C] md:text-5xl lg:text-6xl">
        The Ceremonial Craft
      </h1>

      <p className="max-w-2xl text-sm leading-relaxed text-[#2F490C]/70 md:text-base xl:text-lg">
        Discover the tranquility of our hand-picked, stone-ground Uji matcha.
        Each cup is a curated ritual of slow living, artisanal precision, and
        seasonal inspiration.
      </p>
    </Reveal>
  );
}
