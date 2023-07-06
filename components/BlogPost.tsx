"use client";
import React from "react";
import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";
import { BlogObj } from "@/lib/BlogList";
import examplePic from "@/public/images/food-app1.png";

type BlogsProps = {
  posts: BlogObj;
};

const BlogPost: React.FC<BlogsProps> = ({ posts }) => {
  const { title, date, pic, desc, url } = posts;

  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl my-8 dark:shadow-sky-700/30">
        <figure>
          <Image src={examplePic} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title h-12 lg:h-16 inline-block align-top font-semibold text-base lg:text-lg">
            {title}
          </h2>
          <p className="font-normal text-sm my-1 lg:text-base">🗓️{date}</p>
          <p className="font-normal text-base my-1 lg:text-lg">{desc}</p>
          <div className="card-actions justify-end">
            <a href={url} target="_blank">
              <button className="btn btn-primary btn-sm">Read More</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
