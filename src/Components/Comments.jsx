import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../api";
import { dateFormatter } from "../util";
import PostComments from "./Post-Comment";

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

  return (
    <section>
      <h3 className="comments-header">Comments</h3>
      <PostComments article_id={article_id} setComments={setComments} />
      <ul>
        {isLoading ? <p>Loading comments...</p> : null}
        {comments.length === 0 ? (
          <p className="no-comments">No comments yet...</p>
        ) : null}
        {comments.map(({ comment_id, votes, created_at, author, body }) => {
          return (
            <li className="comments-list" key={comment_id}>
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
