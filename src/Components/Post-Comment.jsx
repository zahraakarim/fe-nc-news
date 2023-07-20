import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { PostCommentsById } from "../api";
import { UserContext } from "../Context/User";

const PostComments = ({ setComments }) => {
  const [newComment, setNewComment] = useState("");
  const { user } = useContext(UserContext);
  const { article_id } = useParams();
  const username = user;
  const [hasBeenClicked, sethasBeenClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    sethasBeenClicked(true);
    PostCommentsById(article_id, newComment, username).then((comment) => {
      setNewComment("");
      setComments((allComments) => {
        return [comment, ...allComments];
      });
    });
  };

  const handleClick = () => {
    const button = document.getElementById("post-btn");
    button.textContent = "Comment posted!";
  };

  return (
    <div>
      <section>
        <form method="post" onSubmit={handleSubmit}>
          <input
            placeholder="Add your comment here..."
            value={newComment}
            onChange={(e) => {
              setNewComment(e.target.value);
            }}
            type="text"
            id="commentbody"
            name="commentbody"
            minlengh="2"
            maxLength="5000"
            required
          />
          <br />
          <button id="post-btn" onClick={handleClick} disabled={hasBeenClicked}>
            Post comment
          </button>
        </form>
      </section>
    </div>
  );
};

export default PostComments;
