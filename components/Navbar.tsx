"use client";
import { useState } from "react";
import { useTheme } from "next-themes";
import { RiSunLine, RiMoonClearFill } from "react-icons/ri";
import { IoMdMenu, IoMdClose, IoMdOpen } from "react-icons/io";

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
    label: "About Me",
    page: "about me",
  },
  {
    label: "Projects",
    page: "projects",
  },
  {
    label: "Blogs",
    page: "blogs",
  },
  {
    label: "Contact",
    page: "contact",
  },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);

  const renderNavItem = NavItem.map((item, id) => {
    return (
      <li key={id}>
        <a>{item.label}</a>
      </li>
    );
  });

  const renderTheme = () => {
    return (
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
    );
  };

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <header className="w-full mx-auto shadow-lg top-0 z-50 dark:shadow-cyan-600/10">
          <div className="navbar bg-base-100 ">
            <div className="flex-1">
              <a className="btn btn-ghost normal-case text-2xl font-bold my-1">
                Akmal Kamarudin
              </a>
            </div>

            <div className="md:hidden">
              <label
                htmlFor="my-drawer-4"
                className="drawer-button btn btn-ghost"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={25} /> : <IoMdMenu size={25} />}
              </label>
            </div>

            <div className={"hidden md:block"}>
              <div className="flex-none">
                <ul className="menu menu-horizontal px-1 text-base font-bold">
                  {renderNavItem}
                  {renderTheme()}
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          className="drawer-overlay"
          onClick={() => setNavbar(!navbar)}
        ></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content text-base font-bold">
          <li className="items-end">
            <label
              htmlFor="my-drawer-4"
              className="drawer-overlay"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? <IoMdClose size={25} /> : <IoMdMenu size={25} />}
            </label>
          </li>
          {renderNavItem}
          {renderTheme()}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
