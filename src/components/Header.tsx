import { useState } from "react";
import logo from "../assets/react.svg";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const menuItems = [
  {
    name: "Industries",
    items: ["Manufacturing", "Telecom", "Energy", "Transportation"]
  },
  {
    name: "Solutions",
    items: ["Private 5G", "AI Networks", "Cloud Infrastructure"]
  },
  {
    name: "Investors",
    items: ["Reports", "Shareholder Info"]
  },
  {
    name: "Insights",
    items: ["Blogs", "Research"]
  },
  {
    name: "Careers",
    items: ["Open Roles", "Internships"]
  },
  {
    name: "About",
    items: ["Company", "Leadership"]
  }
];

export default function Header() {

  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMenu = (name: string) => {
    setActiveMenu(activeMenu === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <img src={logo} alt="logo" className="h-8" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 relative">

          {menuItems.map((menu) => (

            <div key={menu.name} className="relative">

              <button
                onClick={() => toggleMenu(menu.name)}
                className="flex items-center gap-1 !bg-transparent text-gray-300"
              >
                {menu.name}
                <FiChevronDown className="text-sm opacity-70" />
              </button>

              {activeMenu === menu.name && (

                <div className="absolute left-0 mt-4 bg-white text-black rounded-lg shadow-lg p-6 min-w-[220px]">

                  <ul className="space-y-3">

                    {menu.items.map((item) => (
                      <li
                        key={item}
                        className="cursor-pointer hover:text-blue-600"
                      >
                        {item}
                      </li>
                    ))}

                  </ul>

                </div>

              )}

            </div>

          ))}

        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-300 !bg-transparent"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

      </div>

      {/* MOBILE MENU PANEL */}
      {mobileMenu && (

        <div className="md:hidden bg-black border-t border-gray-800">

          {menuItems.map((menu) => (

            <div key={menu.name} className="px-6 py-4 border-b border-gray-800">

              <button
                onClick={() => toggleMenu(menu.name)}
                className="flex justify-between items-center w-full text-left text-gray-300 !bg-transparent"
              >
                {menu.name}
                <FiChevronDown />
              </button>

              {activeMenu === menu.name && (

                <ul className="mt-3 pl-4 space-y-2 text-gray-400">

                  {menu.items.map((item) => (
                    <li key={item} className="hover:text-white cursor-pointer">
                      {item}
                    </li>
                  ))}

                </ul>

              )}

            </div>

          ))}

        </div>

      )}

    </header>
  );
}