import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://news-api-br7i.onrender.com/api",
});

export const getAllArticles = () => {
  return ncNews.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getArticle = (article_id) => {
  return ncNews.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getComments = (article_id) => {
  return ncNews.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const patchVotes = (article_id, vote) => {
  console.log(article_id);
  return ncNews
    .patch(`/articles/${article_id}`, { inc_votes: vote })
    .then(({ data }) => {
      return data.article;
    });
};
