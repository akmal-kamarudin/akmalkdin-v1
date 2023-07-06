"use client";
import React from "react";
import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";
import { BlogObj } from "@/lib/BlogList";

// type CardsProps = {
//   projects: ProjectObj;
// };

const BlogPost = () => {
  // const { title, slide1, slide2, slide3, nav, desc, url, repo } = projects;

  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <Image
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
