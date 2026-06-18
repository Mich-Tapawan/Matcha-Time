import type { OfferImage } from "../types/gallery";

const imageModules = import.meta.glob(
  "/src/assets/offer/*.{png,jpg,jpeg,svg,webp}",
  {
    eager: true,
    import: "default",
  },
);

const imageURLs = Object.values(imageModules) as string[];

const textCaptions = [
  "Artfully curated flavors, whisked to perfection.",
  "An intentional space designed to let you pause.",
  "Exquisite artisanal desserts baked fresh daily.",
  "Stone-ground ceremonial grade Uji matcha.",
];

export const offerGalleryImages: OfferImage[] = textCaptions.map(
  (caption, index) => ({
    url: imageURLs[index] || "",
    text: caption,
  }),
);
