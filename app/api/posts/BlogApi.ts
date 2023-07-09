import axios from "axios";

const endpoint = "https://api.hashnode.com/";
const ARTICLE_QUERY = `
  {
    user(username: "captain-eo") {
      publication {
        posts(page: 0) {
          title
          coverImage
          dateUpdated
          brief
          slug
        }
      }
    }
  }
`;

const uploadImage = async () => {
  try {
    const response = await axios.post(`${endpoint}`, {
      params: {
        // key: apiKey,
        // expiration: 2592000,
      },
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data.data.url;
  } catch (error) {
    console.error(error);
  }
};
