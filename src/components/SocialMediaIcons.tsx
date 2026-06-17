import InstagramIcon from "@iconify-react/mdi/instagram";
import FacebookIcon from "@iconify-react/mdi/facebook";
import TwitterIcon from "@iconify-react/mdi/twitter";
import YoutubeIcon from "@iconify-react/mdi/youtube";
import { Link } from "react-router-dom";

type SocialIconType = {
  component: React.ComponentType<any>;
  link: string;
};

const SocialIcons: SocialIconType[] = [
  { component: InstagramIcon, link: "https://www.instagram.com/" },
  { component: FacebookIcon, link: "https://www.facebook.com/" },
  { component: TwitterIcon, link: "https://www.twitter.com/" },
  { component: YoutubeIcon, link: "https://www.youtube.com/" },
];

export default function SocialMediaIcons() {
  return (
    <ul className="flex items-center gap-2">
      {SocialIcons.map(({ component: IconComponent, link }, index) => (
        <li key={index}>
          <Link to={link}>
            {
              <IconComponent
                height="3em"
                style={{ color: "#fffdee" }}
                className="cursor-pointer"
              />
            }
          </Link>
        </li>
      ))}
    </ul>
  );
}
