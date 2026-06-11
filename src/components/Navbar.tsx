import { Link } from "react-router-dom";

export default function Navbar() {
  type Link = {
    text: string;
    href: string;
  };
  const navLinks: Link[] = [
    { text: "Home", href: "/" },
    { text: "Menu", href: "/menu" },
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky z-50 top-0 flex justify-between align-middle">
      {/* Brand */}
      <div className="flex items-center space-x-2 px-4 py-2">
        <p className="font-bold text-white">Matcha Time</p>
      </div>

      {/* Navbar */}
      <nav className="flex justify-center py-2">
        <ul className=" bg-[#535933] flex space-x-4 rounded-full px-4 py-2 justify-center flex-col lg:flex-row lg:max-w-2xl lg:px-10">
          {navLinks.map((link, i) => (
            <li key={i}>
              <Link to={link.href} className=" text-white text-sm px-4 py-2">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* CTA-btn */}
      <div className="bg-[#E6EC66] text-black font-bold text-sm py-1 px-8 text-center place-content-center">
        <p>Order</p>
      </div>
    </header>
  );
}
