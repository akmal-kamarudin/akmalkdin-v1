import React from "react";
import Cards from "./Cards";
import projects from "@/lib/ProjectList";
import MotionItems from "./MotionItems";

const Blog = () => {
  const renderBlogPost = projects.map((items, index) => {
    return (
      <MotionItems key={index} itemKey={index}>
        <div className="flex flex-col items-center w-full">
          <Cards projects={items} />
        </div>
      </MotionItems>
    );
  });

  return (
    <>
      <div className="flex flex-col items-start text-justify justify-start pt-16 w-full">
        <h1 className="font-semibold text-xl lg:text-2xl">Blog Posts</h1>
        <p className="font-normal text-lg my-4 lg:text-xl">
          Have a look on my latest entries.
        </p>
        <div>{renderBlogPost}</div>
      </div>
    </>
  );
};

export default Blog;
