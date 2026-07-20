import type { ComponentType } from "react";
import { aboutMeanings, type AboutMeaning } from "../../data/aboutMeanings";
import { Stagger, StaggerItem } from "../motion/Stagger";

type MeaningIconProps = {
  className?: string;
};

function PurityIcon({ className }: MeaningIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        fill="currentColor"
        d="M9.2 8.25L11.85 3h.3l2.65 5.25zm2.05 11.85L2.625 9.75h8.625zm1.5 0V9.75h8.625zm3.7-11.85L13.85 3H19l2.625 5.25zm-14.075 0L5 3h5.15l-2.6 5.25z"
      />
    </svg>
  );
}

function TranquilityIcon({ className }: MeaningIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <g fill="none">
        <g clipPath="url(#meaning-sun-clip)">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="1.5"
            d="M3 12H1m22 0h-2m-9 9v2m0-22v2M5.636 18.364l-1.414 1.414M19.778 4.222l-1.414 1.414m-12.728 0L4.222 4.222m15.556 15.556l-1.414-1.414M18 12a6 6 0 1 1-12 0a6 6 0 0 1 12 0Z"
          />
        </g>
        <defs>
          <clipPath id="meaning-sun-clip">
            <path fill="#fff" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </g>
    </svg>
  );
}

function CommunityIcon({ className }: MeaningIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        fill="currentColor"
        d="M12 11c1.71 0 3-1.29 3-3s-1.29-3-3-3s-3 1.29-3 3s1.29 3 3 3m0-4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m1 5h-2c-2.76 0-5 2.24-5 5v.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V17c0-2.76-2.24-5-5-5m-5 5c0-1.65 1.35-3 3-3h2c1.65 0 3 1.35 3 3zm-1.5-6c.47 0 .9-.12 1.27-.33a5.03 5.03 0 0 1-.42-4.52C7.09 6.06 6.8 6 6.5 6C5.06 6 4 7.06 4 8.5S5.06 11 6.5 11m-.39 1H5.5C3.57 12 2 13.57 2 15.5v1c0 .28.22.5.5.5H4c0-1.96.81-3.73 2.11-5m11.39-1c1.44 0 2.5-1.06 2.5-2.5S18.94 6 17.5 6c-.31 0-.59.06-.85.15a5.03 5.03 0 0 1-.42 4.52c.37.21.79.33 1.27.33m1 1h-.61A6.97 6.97 0 0 1 20 17h1.5c.28 0 .5-.22.5-.5v-1c0-1.93-1.57-3.5-3.5-3.5"
      />
    </svg>
  );
}

const meaningIcons: Record<
  AboutMeaning["id"],
  ComponentType<MeaningIconProps>
> = {
  purity: PurityIcon,
  tranquility: TranquilityIcon,
  community: CommunityIcon,
};

export default function MeaningContainer() {
  return (
    <section className="w-full bg-[#F2F1E6] px-4 py-10 text-[#2F490C] lg:px-10 xl:px-20 2xl:px-32 2xl:py-20">
      <Stagger className="mx-auto flex w-full max-w-6xl flex-col lg:grid lg:grid-cols-3 lg:gap-6 xl:gap-8">
        {aboutMeanings.map((item) => {
          const Icon = meaningIcons[item.id];

          return (
            <StaggerItem key={item.id} className="w-full">
              <article className="flex flex-col items-center space-y-5 py-10 text-center lg:hidden">
                <Icon className="h-10 w-10" />
                <h3 className="brand-font text-3xl leading-tight">{item.title}</h3>
                <p className="max-w-sm text-sm leading-relaxed text-[#2F490C]/80">
                  {item.description}
                </p>
                <div className="w-full border-b border-[#2F490C]/40 pt-5" aria-hidden />
              </article>

              <article
                className={`hidden aspect-square flex-col items-center justify-center space-y-5 border border-[#2F490C]/35 px-6 text-center lg:flex xl:px-8 ${
                  item.highlighted ? "bg-[#E5E1C1]/60" : "bg-transparent"
                }`}
              >
                <Icon className="h-10 w-10 xl:h-12 xl:w-12" />
                <h3 className="brand-font text-3xl leading-tight xl:text-4xl">
                  {item.title}
                </h3>
                <p className="max-w-xs text-sm leading-relaxed text-[#2F490C]/80 xl:text-base">
                  {item.description}
                </p>
              </article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}
