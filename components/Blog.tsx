import React, { useState, useEffect } from "react";
import BlogPost from "./BlogPost";
import { BlogObj } from "@/lib/BlogList";
// import blogs from "@/lib/BlogList";
import MotionItems from "./MotionItems";
import { fetchPosts } from "@/app/api/route";

const Blog = () => {
  const [posts, setPosts] = useState<BlogObj[]>([]);
  const [page, setPage] = useState<number>(0);
  const [postPerPage, setPostPerPage] = useState<number | null>(null);
  const [fetchedPages, setFetchedPages] = useState<number[]>([]);

  let renderBlogPost, renderOldPost;

  useEffect(() => {
    async function fetchData() {
      if (!fetchedPages.includes(page)) {
        const blogPost = await fetchPosts(page);
        setPosts([...posts, ...blogPost]);
        setPostPerPage(blogPost.length);
        setFetchedPages([...fetchedPages, page]);
      }
    }
    fetchData();
  }, [page, fetchedPages, posts]);

  if (posts !== null && Array.isArray(posts)) {
    renderBlogPost = posts.map((items, index) => {
      return (
        <MotionItems key={index} itemKey={index}>
          <div className="flex flex-col items-center w-full">
            <BlogPost posts={items} />
          </div>
        </MotionItems>
      );
    });
  } else {
    renderBlogPost = (
      <p className="font-normal text-base my-4 lg:text-lg">
        Loading... <span className="inline-flex animate-twirl">⏳</span>
      </p>
    );
  }

  const getOldPost = () => {
    let upCounter = page;
    upCounter++;
    console.log(upCounter);
    setPage(upCounter);
  };

  if (postPerPage !== null && postPerPage === 0) {
    renderOldPost = (
      <div className="flex flex-col items-center w-full my-4">
        <p className="font-normal text-lg my-4 lg:text-xl">
          There&#39;s no more post
        </p>
      </div>
    );
  } else if (postPerPage !== null && postPerPage % 6 === 0) {
    renderOldPost = (
      <div className="flex flex-col items-center w-full my-4">
        <button
          className="btn btn-primary btn-sm shadow-xl dark:shadow-slate-400/10"
          onClick={getOldPost}
        >
          See Older Posts
        </button>
      </div>
    );
  } else {
    renderOldPost = (
      <div className="flex flex-col items-center w-full my-4"></div>
    );
  }

  // const renderBlogPost = blogs.map((items, index) => {
  //   return (
  //     <MotionItems key={index} itemKey={index}>
  //       <div className="flex flex-col items-center w-full">
  //         <BlogPost posts={items} />
  //       </div>
  //     </MotionItems>
  //   );
  // });

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
        {renderOldPost}
      </div>
    </>
  );
};

export default Blog;
