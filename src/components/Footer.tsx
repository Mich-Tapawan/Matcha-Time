import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { footerHours, footerLegalLinks } from "../data/footer";
import SocialMediaIcons from "./SocialMediaIcons";

type NewsletterInputs = {
  email: string;
};

export default function Footer() {
  const { register, handleSubmit } = useForm<NewsletterInputs>();

  const onSubmit = (data: NewsletterInputs) => {
    console.log("Newsletter signup:", data);
  };

  return (
    <footer className="w-full bg-[#364524] text-[#F2F1E6]">
      <div className="mx-auto w-full px-4 py-14 lg:px-10 xl:px-20 2xl:px-32 2xl:py-20">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <div className="space-y-8">
            <div className="space-y-4">
              <p style={{fontSize:'1.5rem'}} className="brand-font uppercase tracking-[0.12em]">
                Matcha Time
              </p>
              <p className="max-w-md text-sm leading-relaxed text-white/60 md:text-base">
                Crafting moments of shibui in the heart of the city since 2018.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/90">
                Hours
              </p>
              <ul className="space-y-1 text-sm text-white/75 md:text-base">
                {footerHours.map(({ label, time }) => (
                  <li key={label}>
                    {label}: {time}
                  </li>
                ))}
              </ul>
            </div>

            <SocialMediaIcons variant="footer" />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="brand-font text-2xl leading-tight md:text-3xl">
                Tune in to our newsletter
              </h2>
              <p className="max-w-lg text-sm leading-relaxed text-white/60 md:text-base">
                Join our circle for exclusive seasonal launches, brewing guides,
                and a touch of zen in your inbox.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex items-end gap-4 border-b border-white/30 pb-3"
            >
              <label className="sr-only" htmlFor="footer-email">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Email Address"
                {...register("email", { required: true })}
                className="w-full bg-transparent text-sm text-white placeholder:text-white/45 outline-none md:text-base"
              />
              <button
                type="submit"
                className="shrink-0 cursor-pointer text-xs font-semibold uppercase tracking-[0.2em] text-accent transition duration-300 hover:text-[#f3f8a0] md:text-sm"
              >
                Subscribe
              </button>
            </form>

            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {footerLegalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white/70 transition duration-300 hover:text-white md:text-xs"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6">
          <div className="flex flex-col gap-3 text-[0.65rem] uppercase tracking-[0.16em] text-white/55 md:flex-row md:items-center md:justify-between md:text-xs">
            <p style={{fontSize:"0.75rem"}}>© 2026 Matcha Time. Crafted for slow living.</p>
            <p style={{fontSize:"0.75rem"}}>Made with intention.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
