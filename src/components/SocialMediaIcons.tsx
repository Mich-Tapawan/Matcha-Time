import InstagramIcon from "@iconify-react/mdi/instagram";
import FacebookIcon from "@iconify-react/mdi/facebook";
import TwitterIcon from "@iconify-react/mdi/twitter";

export default function SocialMediaIcons() {
  return (
    <div className="flex items-center gap-2">
      <InstagramIcon height="1em" style={{ color: "#fffdee" }} />
      <FacebookIcon height="1em" style={{ color: "#fffdee" }} />
      <TwitterIcon height="1em" style={{ color: "#fffdee" }} />
    </div>
  );
}
