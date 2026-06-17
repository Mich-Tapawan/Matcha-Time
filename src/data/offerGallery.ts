import type { OfferImage } from "../types/gallery";

const imageModules = import.meta.glob(
  "/src/assets/offer/*.{png,jpg,jpeg,svg,webp}",
  {
    eager: true,
    import: "default",
  },
);

const imageURLs = Object.values(imageModules) as string[];

const textCaptions = ["Hewwo", "wazzuppp", "Third Caption", "yeah"];

export const offerGalleryImages: OfferImage[] = textCaptions.map(
  (caption, index) => ({
    url: imageURLs[index] || "",
    text: caption,
  }),
);
