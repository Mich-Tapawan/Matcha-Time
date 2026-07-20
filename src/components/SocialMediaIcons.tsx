import InstagramIcon from "@iconify-react/mdi/instagram";
import FacebookIcon from "@iconify-react/mdi/facebook";
import TwitterIcon from "@iconify-react/mdi/twitter";
import YoutubeIcon from "@iconify-react/mdi/youtube";

type SocialIconType = {
  component: React.ComponentType<{ className?: string }>;
  link: string;
  label: string;
};

const socialIcons: SocialIconType[] = [
  {
    component: InstagramIcon,
    link: "https://www.instagram.com/",
    label: "Instagram",
  },
  {
    component: FacebookIcon,
    link: "https://www.facebook.com/",
    label: "Facebook",
  },
  {
    component: TwitterIcon,
    link: "https://www.twitter.com/",
    label: "Twitter",
  },
  {
    component: YoutubeIcon,
    link: "https://www.youtube.com/",
    label: "YouTube",
  },
];

type SocialMediaIconsProps = {
  variant?: "default" | "footer";
};

export default function SocialMediaIcons({
  variant = "default",
}: SocialMediaIconsProps) {
  const isFooter = variant === "footer";

  return (
    <ul className="flex items-center gap-3">
      {socialIcons.map(({ component: IconComponent, link, label }) => (
        <li key={label}>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className={
              isFooter
                ? "flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/80 transition duration-300 hover:border-white hover:text-white"
                : "cursor-pointer"
            }
          >
            <IconComponent
              className={
                isFooter ? "h-4 w-4" : "h-12 w-12 text-secondary"
              }
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
