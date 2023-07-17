import { useState, useEffect } from "react";
import { getAllArticles } from "../../../api";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then((data) => {
      setArticles(data);
    });
  }, []);

  return (
    <div className="article-list">
      {articles.map((article) => {
        const topic = article.topic;
        const capitalisedTopic = topic.charAt(0).toUpperCase() + topic.slice(1);
        return (
          <div className="article-card">
            <li key={article.article_id}>
              <h3 className="article-title"> {article.title}</h3>
              <h4>Topic: {capitalisedTopic}</h4>
              <img
                src={article.article_img_url}
                alt={`This is an image for ${article.title}`}
              ></img>
              <p>Author: {article.author}</p>
              <p>Posted: {article.created_at}</p>
              <p>Comments: {article.comment_count}</p>
              <p>Votes: {article.votes}</p>
            </li>
          </div>
        );
      })}
    </div>
  );
};

export default ArticleList;
