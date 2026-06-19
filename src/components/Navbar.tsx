import { Link } from "react-router-dom";
import Burger from "./Burger";
import { useEffect, useState } from "react";
import OrderNowBtn from "./OrderNowBtn";
import { navLinks } from "../data/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 grid grid-cols-[1fr_1fr] items-center px-4 transition-[background-color,box-shadow] duration-300 ease-in-out lg:px-10 xl:grid-cols-[1fr_auto_1fr] xl:px-20 2xl:px-32 ${
        isScrolled
          ? "bg-primary shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]"
          : "bg-transparent shadow-none"
      }`}
    >
      <div className="flex items-center py-2">
        <p className="font-bold text-white" style={{ fontSize: "1.2rem" }}>
          Matcha Time
        </p>
      </div>

      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } xl:flex absolute top-full left-0 right-0 z-40 flex-col items-center gap-4 bg-primary p-6 xl:static xl:flex-row xl:justify-center xl:bg-transparent xl:p-0 xl:py-2`}
      >
        <ul className="flex w-full flex-col items-center gap-2 xl:w-auto xl:flex-row xl:gap-0 xl:space-x-4 xl:bg-primary xl:px-10 xl:py-2 xl:rounded-full xl:max-w-2xl 2xl:px-14 2xl:max-w-3xl">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="w-full text-center hover:bg-white rounded-full transition duration-300 xl:w-auto"
            >
              <Link
                to={link.href}
                onClick={closeMenu}
                className="block text-white text-sm px-4 py-2 hover:text-primary"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <OrderNowBtn variant="nav" className="xl:hidden" />
      </nav>

      <div className="flex justify-end items-center py-2">
        <Burger
          isOpen={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        />
        <OrderNowBtn variant="nav" className="hidden xl:flex" />
      </div>
    </header>
  );
}
