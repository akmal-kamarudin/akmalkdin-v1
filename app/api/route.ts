export const revalidate = 60;

export const fetchPosts = async (page: number) => {
  try {
    const query: string = `
      {
        user(username: "akmalkdin") {
          publication {      
            posts (page: ${page}) {
              slug
              title
              coverImage
              totalReactions
              dateAdded
              brief
              readTime
              views
            } 
          }
        }
      }
    `;

    const res = await fetch("https://api.hashnode.com", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.status}`);
    }

    const blogPost = await res.json();
    return blogPost.data.user.publication.posts;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// export const fetchPosts = async function GET() {
//   const res: Response = await fetch("https://api.hashnode.com", {
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({ query }),
//     next: { revalidate: 60 },
//   });
//   const data = await res.json();
//   const blogPost = data.user.publication.posts;
//   return Response.json({ blogPost });
// };

// export const fetchPosts = async () => {
//   const resp: Response = await fetch("https://api.hashnode.com", {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({ query }),
//     next: { revalidate: 60 },
//   });
//   const blogPost = await resp.json();
//   return blogPost.data.user.publication.posts;
// };
