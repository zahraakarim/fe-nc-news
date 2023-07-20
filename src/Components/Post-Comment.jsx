import { useState } from "react";
import { useParams } from "react-router-dom";

const PostComment = () => {
  const [newComment, setNewComment] = useState("");
  const { article_id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <label htmlFor="new-comment">Write your comment here...</label>
      <textarea
        id="new-comment"
        value={newComment}
        onChange={(e) => {
          setNewComment(e.target.value);
        }}
      />
      <button>Add Comment</button>
    </form>
  );
};

export default PostComment;
