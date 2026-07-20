export type FooterLink = {
  text: string;
  href: string;
};

export const footerHours = [
  { label: "Mon — Fri", time: "08:00 — 19:00" },
  { label: "Sat — Sun", time: "09:00 — 20:00" },
] as const;

export const footerLegalLinks: FooterLink[] = [
  { text: "Privacy Policy", href: "/" },
  { text: "Terms of Service", href: "/" },
  { text: "Wholesale", href: "/" },
  { text: "Contact", href: "/contact" },
];
