import React from "react";
import foodPic1 from "../public/images/food-app1.png";
import foodPic2 from "../public/images/food-app2.png";
import foodPic3 from "../public/images/food-app3.png";
import contactPic1 from "../public/images/contact-app1.png";
import contactPic2 from "../public/images/contact-app2.png";
import contactPic3 from "../public/images/contact-app3.png";

export type ProjectObj = {
  title: string;
  slide1: any;
  slide2: any;
  slide3: any;
  nav: string;
  desc: string;
  url: string;
  repo: string;
};

const projectList: ProjectObj[] = [
  {
    title: "Shine Dine Food App",
    slide1: foodPic1,
    slide2: foodPic2,
    slide3: foodPic3,
    nav: "food",
    desc: "React and Material UI",
    url: "https://food-order-app-swart-omega.vercel.app/",
    repo: "https://github.com/akmal-kamarudin/food-order-app",
  },
  {
    title: "Contact Manager App",
    slide1: contactPic1,
    slide2: contactPic2,
    slide3: contactPic3,
    nav: "contact",
    desc: "Fullstack app using PERN stack",
    url: "https://pern-contact-app-production.up.railway.app/",
    repo: "https://github.com/akmal-kamarudin/pern-contact-app",
  },
];

export default projectList;
