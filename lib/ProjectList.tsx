import React from "react";
import portflioPic1 from "../public/images/portfolio-app1.png";
import portflioPic2 from "../public/images/portfolio-app2.png";
import portflioPic3 from "../public/images/portfolio-app3.png";
import foodPic1 from "../public/images/food-app1.png";
import foodPic2 from "../public/images/food-app2.png";
import foodPic3 from "../public/images/food-app3.png";
import contactPic1 from "../public/images/contact-app1.png";
import contactPic2 from "../public/images/contact-app2.png";
import contactPic3 from "../public/images/contact-app3.png";
import newsPic1 from "../public/images/news-app1.png";
import newsPic2 from "../public/images/news-app2.png";
import newsPic3 from "../public/images/news-app3.png";

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

const ProjectList: ProjectObj[] = [
  {
    title: "Personal Website",
    slide1: portflioPic1,
    slide2: portflioPic2,
    slide3: portflioPic3,
    nav: "porfolio",
    desc: "A personal portfolio landing page built using Next.js",
    url: "/",
    repo: "https://github.com/akmal-kamarudin/akmalkdin-v1",
  },
  {
    title: "Shine Dine Food App",
    slide1: foodPic1,
    slide2: foodPic2,
    slide3: foodPic3,
    nav: "food",
    desc: "A food ordering app with a cart system and admin functions to add and delete items in the menu.",
    url: "https://food-order-app-swart-omega.vercel.app",
    repo: "https://github.com/akmal-kamarudin/food-order-app",
  },
  {
    title: "Contact Manager App",
    slide1: contactPic1,
    slide2: contactPic2,
    slide3: contactPic3,
    nav: "contact",
    desc: "A fullstack contact management system using the PERN(PostgreSQL, Express, React, Node.js) stack.",
    url: "https://pern-contact-app-production.up.railway.app",
    repo: "https://github.com/akmal-kamarudin/pern-contact-app",
  },
  {
    title: "Today's News App",
    slide1: newsPic1,
    slide2: newsPic2,
    slide3: newsPic3,
    nav: "news",
    desc: "A news search app that utilize the News API for users to search and read articles.",
    url: "https://news-search-app-delta.vercel.app",
    repo: "https://github.com/akmal-kamarudin/news-search-app",
  },
];

export default ProjectList;
