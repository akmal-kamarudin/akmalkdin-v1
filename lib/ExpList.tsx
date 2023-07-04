import React from "react";

export type ExpObj = {
  job: string;
  location: string;
  period: string;
};

const ExpList: ExpObj[] = [
  {
    job: "Junior Programmer @ Saf Pilihan",
    location: "Bandar Baru Bangi, Malaysia",
    period: "Jan 2023 - Present",
  },
  {
    job: "Biomedical Engineer @ Altica",
    location: "Puchong, Malaysia",
    period: "Jul 2021 - Feb 2023",
  },
  {
    job: "Intern Junior Biomedical Engineer @ Advance Pact",
    location: "Johor Bahru, Malaysia",
    period: "Jan 2018 — May 2018",
  },
];

export default ExpList;
