"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "next-themes";
import { RiSunLine, RiMoonClearFill } from "react-icons/ri";
import { IoMdMenu, IoMdClose, IoMdOpen } from "react-icons/io";
import spaceRocket from "../public/icons/space-rocket-svgrepo-com.svg";

interface NavItemType {
  label: string;
  page: string;
  link: string;
}

const NavItem: Array<NavItemType> = [
  {
    label: "Home",
    page: "home",
    link: "/",
  },
  {
    label: "Projects",
    page: "projects",
    link: "/projects",
  },
  {
    label: "Blogs",
    page: "blogs",
    link: "/blogs",
  },
  {
    label: "Resume",
    page: "resume",
    link: "https://drive.google.com/file/d/1NgFZx2s5xn7rRhwBoXNZDkY029MT0Uvr/view?usp=sharing",
  },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);

  const renderNavItem = NavItem.map((item, id) => {
    return (
      <li key={id}>
        <Link
          href={item.link}
          target={item.page === "resume" ? "_blank" : "_self"}
        >
          {item.label}
        </Link>
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
        <header className="w-full mx-auto shadow-lg top-0 z-50 dark:shadow-sky-700/20">
          <div className="navbar bg-base-100 ">
            <div className="flex-1">
              <Link
                className="btn btn-ghost normal-case text-2xl font-semibold my-1 "
                href="/"
              >
                <Image
                  src={spaceRocket}
                  alt="space-rocket"
                  width={52}
                  height={52}
                  className="rotate-90"
                  priority={true}
                />
              </Link>
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
                <ul className="menu menu-horizontal px-1 text-base font-medium">
                  {renderNavItem}
                  {renderTheme()}
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div>

      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer-4"
          className="drawer-overlay"
          onClick={() => setNavbar(!navbar)}
        ></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content text-base font-medium">
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
