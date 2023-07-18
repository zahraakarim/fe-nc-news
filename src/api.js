import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://news-api-br7i.onrender.com/api",
});

export const getAllArticles = () => {
  return ncNews.get("/articles").then(({ data }) => {
    return data.articles;
  });
};
