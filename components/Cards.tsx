"use client";
import React from "react";
import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";
import { ProjectObj } from "@/lib/ProjectList";

type CardsProps = {
  projects: ProjectObj;
};

const Cards: React.FC<CardsProps> = ({ projects }) => {
  const { title, slide1, slide2, slide3, nav, desc, url, repo } = projects;

  return (
    <>
      <div className="card w-4/5 bg-base-100 shadow-xl my-8 dark:shadow-sky-700/30">
        <figure>
          <div className="carousel w-full">
            <div id={`${nav}1`} className="carousel-item relative w-full">
              <Image src={slide1} alt="me" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#${nav}3`} className="btn btn-circle">
                  &#10094;
                </a>
                <a href={`#${nav}2`} className="btn btn-circle">
                  &#10095;
                </a>
              </div>
            </div>
            <div id={`${nav}2`} className="carousel-item relative w-full">
              <Image src={slide2} alt="me" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#${nav}1`} className="btn btn-circle">
                  &#10094;
                </a>
                <a href={`#${nav}3`} className="btn btn-circle">
                  &#10095;
                </a>
              </div>
            </div>
            <div id={`${nav}3`} className="carousel-item relative w-full">
              <Image src={slide3} alt="me" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#${nav}2`} className="btn btn-circle">
                  &#10094;
                </a>
                <a href={`#${nav}1`} className="btn btn-circle">
                  &#10095;
                </a>
              </div>
            </div>
          </div>
        </figure>
        <div className="card-body items-center">
          <h2 className="card-title">{title}</h2>
          <p>{desc}</p>
          <div className="card-actions">
            <a href={repo} target="_blank" className="px-1">
              <FaGithub className="text-2xl lg:text-3xl transition-all ease-in-out duration-100 hover:scale-125 hover:rotate-12" />
            </a>
            <a href={url} target="_blank" className="px-1">
              <FaLink className="text-2xl lg:text-3xl transition-all ease-in-out duration-100 hover:scale-125 hover:rotate-12" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
