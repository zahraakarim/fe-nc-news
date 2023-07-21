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
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    sethasBeenClicked(true);
    PostCommentsById(article_id, newComment, username)
      .then((comment) => {
        setNewComment("");
        setError(null);
        setComments((allComments) => {
          return [comment, ...allComments];
        });
      })
      .catch((err) => {
        sethasBeenClicked(false);
        setError(err);
        const button = document.getElementById("post-btn");
        button.textContent = "Try again!";
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
          {error ? <h4 id="error-message">{error.message}</h4> : null}
        </form>
      </section>
    </div>
  );
};

export default PostComments;

/*<button>{ hasClicked? (isError? <p>Something went wrong!<p> : <p>Comment posted!<p>) : <p>Post your comment! <p>}<button></button>

<button id="post-btn" onClick={handleClick} disabled={hasBeenClicked}>

</button> */
