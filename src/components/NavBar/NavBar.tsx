import Logo from "@/assets/Logo.png";
import { Instagram, type LucideIcon } from "lucide-react";
import { useState } from "react";

interface NavBarLinks {
  id: number;
  title: string;
  link: string;
  icon?: LucideIcon;
}

const navBarLinks: NavBarLinks[] = [
  { id: 1, title: "Inicio", link: "#home" },
  { id: 2, title: "Nosotros", link: "#about" },
  { id: 3, title: "Soporte", link: "#support" },
  { id: 4, title: "Contacto", link: "#contact" },
];

const navBarRedes: NavBarLinks[] = [
  {
    id: 1,
    title: "Instagram",
    link: "https://www.instagram.com/dylanaraica6/",
    icon: Instagram,
  },
];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-purple-900/10 backdrop-blur-md z-50">
      <div className="flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3">
        <div>
          <img src={Logo} alt="Logo del sitio" className="w-[100px]" />
        </div>

        {/* Boton de Hamburguesa */}
        <button className=" md:hidden text-white" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        {/* Navegacion */}
        <div className="hidden md:block">
          <ul className="flex sm:space-8 space-x-4">
            {navBarLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.link}
                  className="text-white sm:text-lg text-sm hover:text-sky-200 transition-transform hover:scale-110
                    transform inline-block duration-300"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:block">
          <ul className="flex space-x-4">
            {navBarRedes.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.id}>
                  <a
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform duration-300 transform hover:scale-125"
                  >
                    {Icon && (
                      <Icon className="sm:text-2xl text-lg text-white hover:text-sky-200 transition-all duration-300" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* Menu Mobile */}
      <div
        className={`md:hidden absolute w-full bg-purple-950 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col px-4 py-2">
          {navBarLinks.map((link) => (
            <li key={link.id} className="py-2 text-center">
              <a
                href={link.link}
                className="text-white hover:text-sky-200"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex space-x-4 px-4 py-2 border-t border-purple-700 justify-center">
          {navBarRedes.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.id}>
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                  onClick={() => setIsOpen(false)}
                >
                  {Icon && (
                    <Icon className="text-lg text-white hover:text-sky-200" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
