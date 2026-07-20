export type PageSeo = {
  path: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

export const SITE_NAME = "Matcha Time";
export const SITE_URL =
  import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") ||
  "https://matchatime.com";
export const DEFAULT_OG_IMAGE = "/og-image.jpg";

export const pageSeo: Record<string, PageSeo> = {
  home: {
    path: "/",
    title: "Matcha Time | Ceremonial Matcha Café",
    description:
      "Craft moments of shibui with ceremonial-grade Uji matcha. Matcha Time is a design-forward café devoted to slow living, artisanal whisking, and seasonal inspiration.",
    imageAlt: "Matcha Time café atmosphere with ceremonial matcha",
  },
  menu: {
    path: "/menu",
    title: "Menu | Matcha Time",
    description:
      "Explore our ceremonial craft menu — pure whisks, signature lattes, sparklers, and artisanal desserts made with stone-ground Uji matcha.",
    imageAlt: "Matcha Time ceremonial menu drinks and desserts",
  },
  about: {
    path: "/about",
    title: "About | Matcha Time",
    description:
      "Discover the story behind Matcha Time — from the hills of Uji to the ritual of the whisk, our sourcing ethos, and the artisans who craft every bowl.",
    imageAlt: "Tea fields and the Matcha Time ceremonial ritual",
  },
  contact: {
    path: "/contact",
    title: "Contact | Matcha Time",
    description:
      "Get in touch with Matcha Time. Ask about our ceremonial menu, Uji sourcing, wholesale, or share your teahouse experience with our team.",
    imageAlt: "Contact Matcha Time café",
  },
};
