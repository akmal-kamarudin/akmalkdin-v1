"use client";
import { useState } from "react";
import { useTheme } from "next-themes";
import { RiSunLine, RiMoonClearFill } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

interface NavItemType {
  label: string;
  page: string;
}

const NavItem: Array<NavItemType> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
  {
    label: "Blog",
    page: "blog",
  },
  {
    label: "Resume",
    page: "resume",
  },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="w-full mx-auto shadow-lg fixed top-0 z-50 data-[dark]: shadow-slate-500/10">
      <div className="navbar bg-base-100">
        <div className="flex-1 ">
          <a className="btn btn-ghost normal-case text-2xl">Akmal Kamarudin</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {NavItem.map((item, id) => {
              return (
                <li key={id}>
                  <a>{item.label}</a>
                </li>
              );
            })}

            <li>
              <details>
                <summary>Theme</summary>
                <ul className="p-2 bg-base-100">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              {currentTheme === "dark" ? (
                <a onClick={() => setTheme("light")}>
                  <RiSunLine size={20} />
                </a>
              ) : (
                <a onClick={() => setTheme("dark")}>
                  <RiMoonClearFill size={20} />
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
