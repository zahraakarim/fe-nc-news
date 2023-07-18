import { useState, useEffect } from "react";
import { getAllArticles } from "../api";
import { dateFormatter } from "../util";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllArticles().then((data) => {
      setArticles(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <div className="article-list">
      {articles.map((article) => {
        const topic = article.topic;
        const capitalisedTopic = topic.charAt(0).toUpperCase() + topic.slice(1);

        return (
          <li className="article-card" key={article.article_id}>
            <h3 className="article-title"> {article.title}</h3>
            <h4>Topic: {capitalisedTopic}</h4>
            <img
              src={article.article_img_url}
              alt={`This is an image for ${article.title}`}
            ></img>
            <p>Author: {article.author}</p>
            <p>Posted: {dateFormatter(article.created_at)}</p>
            <p>Comments: {article.comment_count}</p>
            <p>Votes: {article.votes}</p>
          </li>
        );
      })}
    </div>
  );
};

export default ArticleList;
