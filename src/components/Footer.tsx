import { Link } from "react-router-dom";
import SocialMediaIcons from "./SocialMediaIcons";
import { contactInfo } from "../data/contact";
import { navLinks } from "../data/navigation";

export default function Footer() {
  return (
    <footer className="bg-primary text-white text-sm w-full min-h-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] px-4 py-12 lg:px-12 xl:px-20 2xl:px-32">
      <div className="grid place-content-center text-center gap-10 xl:grid-cols-4 xl:text-start">
        <div className="space-y-8 xl:space-y-15">
          <p className="text-white font-bold" style={{ fontSize: "1.5rem" }}>
            Matcha Time
          </p>
          <SocialMediaIcons />
        </div>

        <div className="flex flex-col gap-10">
          <ul className="space-y-2">
            <li className="font-medium">Get in touch</li>
            <li className="font-extralight">{contactInfo.email}</li>
            {contactInfo.phones.map((phone) => (
              <li key={phone} className="font-extralight">
                {phone}
              </li>
            ))}
          </ul>

          <ul className="space-y-2">
            <li className="font-medium">Company</li>
            <li className="font-extralight">Terms & Conditions</li>
            <li className="font-extralight">Privacy Policy</li>
          </ul>
        </div>

        <ul className="space-y-2">
          <li className="font-medium">Pages</li>
          {navLinks.map((link) => (
            <li key={link.href} className="font-extralight">
              <Link to={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-col space-y-3 items-center xl:items-start">
          <h4 className="font-semibold text-2xl">
            Tune in to our <br /> NEWSLETTER
          </h4>
          <input
            type="email"
            className="bg-white text-primary text-xs py-3 px-4 rounded-full w-full"
            placeholder="Email"
          />
          <button
            type="submit"
            className="bg-accent text-primary w-30 text-xs font-semibold py-3 px-4 rounded-full cursor-pointer hover:bg-[#d5db65]"
          >
            Subscribe
          </button>
        </div>
      </div>

      <div className="mt-10">
        <span className="block h-0.5 w-full bg-white mb-6"></span>
        <p
          style={{ fontSize: "0.8rem" }}
          className=" text-center text-[#acb9ab]"
        >
          @ 2026 Matcha Time. All rights reserved
        </p>
      </div>
    </footer>
  );
}
