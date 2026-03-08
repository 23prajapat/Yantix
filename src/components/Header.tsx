import { useEffect, useRef, useState } from "react";
import logo from "../assets/react.svg";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import About from "./About";
import Careers from "./Careers";
import Highlights from "./Highlights";
import Industries from "./Industries";

const menuItems = [
  {
    name: "Industries",
    items: ["Manufacturing", "Telecom", "Energy", "Logistics"]
  },
  {
    name: "Solutions",
    items: ["Private 5G", "AI Native RAN", "Edge Intelligence"]
  },
  // {
  //   name: "Investors",
  //   items: ["Reports"]
  // },
  // {
  //   name: "Insights",
  //   items: ["Blogs", "Research"]
  // },
  {
    name: "Careers",
    items: ["Open Roles"]
  },
  {
    name: "About",
    items: ["Company", "Leadership"]
  }
];

export default function Header() {

  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeDrawer, setActiveDrawer] = useState<string | null>(null);
  const menuContainerRef = useRef<HTMLDivElement>(null);
  const toggleMenu = (name: string) => {
    setActiveMenu(activeMenu === name ? null : name);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuContainerRef.current && !menuContainerRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
        setActiveDrawer(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-black text-white" ref={menuContainerRef}>

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <img src={logo} alt="logo" className="h-8" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 relative">

            {menuItems.map((menu) => (

              <div key={menu.name} className="relative">

                <button
                  onClick={() => { toggleMenu(menu.name); setActiveDrawer(null); }}
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
                          onClick={() => setActiveDrawer(activeDrawer === item ? null : item)}
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
        {activeDrawer && (
          <div className="absolute top-full left-0 w-full bg-white text-black shadow-lg p-6 z-40">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setActiveDrawer(null)}
            >
              <FiX size={20} />
            </button>
            <div className="max-w-7xl mx-auto">
              {getDrawerContent(activeDrawer)}
            </div>
          </div>
        )}
      </header>
    </>
  );
}

const getDrawerContent = (item: string) => {
  switch (item) {
    case 'Company':
      return <About name={item} />
    case 'Leadership':
      return <About name={item} />
    case 'Open Roles':
      return <Careers name={item} />
    case 'Private 5G':
    case 'AI Native RAN':
    case 'Edge Intelligence':
      return <Highlights />
    case 'Manufacturing':
    case 'Telecom':
    case 'Energy':
    case 'Logistics':
      return <Industries />
  }
}