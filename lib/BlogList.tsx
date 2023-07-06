import React from "react";

export type BlogObj = {
  title: string;
  date: string;
  pic: string;
  desc: string;
  url: string;
};

const BlogList: BlogObj[] = [
  {
    title: "Junior Programmer @ Saf Pilihan",
    date: "19/12/2022",
    pic: "Jan 2023 - Present",
    desc: "blablabla",
    url: "https://akmalkdin-v1.vercel.app/",
  },
  {
    title: "Biomedical Engineer @ Altica",
    date: "19/12/2022",
    pic: "Jul 2021 - Feb 2023",
    desc: "blablabla",
    url: "https://akmalkdin-v1.vercel.app/",
  },
  {
    title: "Intern Junior Biomedical Engineer @ Advance Pact",
    date: "19/12/2022",
    pic: "Jan 2018 — May 2018",
    desc: "blablabla",
    url: "https://akmalkdin-v1.vercel.app/",
  },
];

export default BlogList;
