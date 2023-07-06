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
      <div className="card card-compact w-4/5 bg-base-100 shadow-xl my-8 dark:shadow-sky-700/30">
        <figure>
          <Image src={examplePic} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{date}</p>
          <p>{desc}</p>
          <div className="card-actions justify-end">
            <a href={url} target="_blank"></a>
            <button className="btn btn-primary btn-sm">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
