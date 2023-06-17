"use client";
import { useState } from "react";
import { useTheme } from "next-themes";
import { RiSunLine, RiMoonClearLine } from "react-icons/ri";
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

  return <div>Navbar</div>;
};

export default Navbar;
