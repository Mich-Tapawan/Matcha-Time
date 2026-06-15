import { Link } from "react-router-dom";
import Burger from "./Burger";
import { useState } from "react";
import OrderNowBtn from "./OrderNowBtn";
import { useIsMobile } from "../hooks/useIsMobile";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  type NavLink = {
    text: string;
    href: string;
  };

  const navLinks: NavLink[] = [
    { text: "Home", href: "/" },
    { text: "Menu", href: "/menu" },
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky z-50 top-0 flex justify-between align-middle px-4 lg:px-10 xl:px-20 2xl:px-32">
      {/* Brand */}
      <div className="flex items-center space-x-2 py-2">
        <p
          className="font-bold text-white text-center"
          style={{ fontSize: "1.2rem" }}
        >
          Matcha Time
        </p>
      </div>

      {/* Navbar */}
      <nav className="hidden xl:flex justify-center py-2">
        <ul className="bg-primary flex space-x-4 px-4 py-2 justify-center flex-col xl:flex-row xl:max-w-2xl xl:px-10 xl:rounded-full 2xl:px-14 2xl:max-w-3xl">
          {navLinks.map((link, i) => (
            <li
              key={i}
              className="hover:bg-white rounded-full transition duration-300"
            >
              <Link
                to={link.href}
                className=" text-white text-sm px-4 py-2 hover:text-primary"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* CTA-btn */}
      {isMobile ? (
        <Burger
          isOpen={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      ) : (
        <OrderNowBtn />
      )}
    </header>
  );
}
