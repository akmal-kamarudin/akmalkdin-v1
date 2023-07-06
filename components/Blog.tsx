import React from "react";
import BlogPost from "./BlogPost";
import blogs from "@/lib/BlogList";
import MotionItems from "./MotionItems";

const Blog = () => {
  const renderBlogPost = blogs.map((items, index) => {
    return (
      <MotionItems key={index} itemKey={index}>
        <div className="flex flex-col items-center w-full">
          <BlogPost posts={items} />
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
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-row flex-wrap place-content-center sm:place-content-stretch gap-x-8">
            {renderBlogPost}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
