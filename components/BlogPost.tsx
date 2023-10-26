"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import {
  MdOutlineEditCalendar,
  MdOutlineViewKanban,
  MdOutlineMenuBook,
} from "react-icons/md";
import { BlogObj } from "@/lib/BlogList";

type BlogsProps = {
  posts: BlogObj;
};

const BlogPost: React.FC<BlogsProps> = ({ posts }) => {
  const { coverImage, brief, dateAdded, readTime, slug, title, views } = posts;
  const { theme } = useTheme();

  const formatedDate = new Date(dateAdded).toLocaleDateString("en-UK", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <>
      <div
        className="card card-compact w-96 bg-base-100 shadow-xl my-8 dark:shadow-slate-400/20"
        data-theme="emerald"
      >
        <figure>
          <div className="relative w-full h-52">
            <Image src={coverImage} alt="Shoes" fill={true} />
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title h-12 lg:h-14 inline-block align-top font-semibold text-base lg:text-lg">
            {title.length >= 74 ? title.slice(0, 74) + "..." : title}
          </h2>
          <p className="font-normal text-sm my-1 lg:text-base">
            <span className="inline-flex items-start">
              <MdOutlineEditCalendar className="text-lg lg:text-xl" />
              &nbsp;{formatedDate} &nbsp;&nbsp;
            </span>

            <span className="inline-flex items-start">
              <MdOutlineMenuBook className="text-lg lg:text-xl" />
              &nbsp;{readTime} min read &nbsp;&nbsp;
            </span>

            <span className="inline-flex items-start">
              <MdOutlineViewKanban className="text-lg lg:text-xl" />
              &nbsp;{views} views
            </span>
          </p>
          <p className="font-normal h-36 lg:h-52 text-base my-2 lg:text-lg">
            {/* {brief.length >= 240 ? brief.slice(0, 240) + "..." : brief} */}
            {brief}
          </p>
          <div className="card-actions justify-end">
            <a href={`https://akmalkdin.hashnode.dev/${slug}`} target="_blank">
              <button
                className="btn btn-secondary btn-sm"
                data-theme={theme === "emerald" ? "emerald" : "halloween"}
              >
                Read More
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
