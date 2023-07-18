import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../api";
import { dateFormatter } from "../util";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getComments(article_id).then((data) => {
      setComments(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <section>
      <h3 className="comments-header">Comments</h3>
      <ul>
        {comments.map(({ comment_id, votes, created_at, author, body }) => {
          return (
            <li className="comments-list" key={article_id}>
              <p>Author: {author}</p>
              <p>Posted: {dateFormatter(created_at)}</p>
              <p>{body}</p>
              <p>Votes: {votes}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Comments;
