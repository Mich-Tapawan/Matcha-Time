export type AboutMeaning = {
  id: "purity" | "tranquility" | "community";
  title: string;
  description: string;
  highlighted?: boolean;
};

export const aboutMeanings: AboutMeaning[] = [
  {
    id: "purity",
    title: "Purity",
    description:
      "Single-origin leaves, stone-ground in micro-batches to preserve every volatile nutrient and flavor note.",
  },
  {
    id: "tranquility",
    title: "Tranquility",
    description:
      "Designing spaces that allow the mind to settle, transforming simple drinks into a meditative anchor.",
    highlighted: true,
  },
  {
    id: "community",
    title: "Community",
    description:
      "Fostering connection between artisans and enthusiasts through the shared experience of the bowl.",
  },
];
