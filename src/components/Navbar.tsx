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
    <header className="sticky z-50 top-0 flex justify-between align-middle px-6 md:px-20">
      {/* Brand */}
      <div className="flex items-center space-x-2 py-2">
        <p className="font-bold text-white">Matcha Time</p>
      </div>

      {/* Navbar */}
      <nav className="hidden lg:flex justify-center py-2">
        <ul className="bg-muted flex space-x-4 px-4 py-2 justify-center flex-col lg:flex-row lg:max-w-2xl lg:px-10 lg:rounded-full">
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
      {isMobile ? "" : <OrderNowBtn />}

      <Burger isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
    </header>
  );
}
