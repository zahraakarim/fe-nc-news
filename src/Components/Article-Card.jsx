import React, { useState, useEffect } from "react";
import { getArticle } from "../api";
import { capitalisedTopic, dateFormatter } from "../util";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import Votes from "./Votes";

const ArticleCard = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getArticle(article_id).then((data) => {
      setArticle(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p className="loading">Loading Article...</p>;
  }
  return (
    <section>
      <div className="article-card">
        <h3 className="article-title">{article.title}</h3>
        <h4>Topic: {capitalisedTopic(article.topic)}</h4>
        <img
          src={article.article_img_url}
          alt={`This is an image for ${article.title}`}
        ></img>
        <p>{article.body}</p>
        <p>Author: {article.author}</p>
        <p>Posted: {dateFormatter(article.created_at)}</p>
        <Votes startingVotes={article.votes} article_id={article_id} />
      </div>
      <Comments article_id={article_id} />
    </section>
  );
};

export default ArticleCard;
