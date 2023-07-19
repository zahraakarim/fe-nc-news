import { useState } from "react";
import { patchVotes } from "../api";

const Votes = ({ startingVotes, article_id }) => {
  const [votes, setVotes] = useState(startingVotes);
  const [error, setError] = useState(null);

  const handleClick = (voteCount) => {
    setVotes((currentVotes) => {
      return currentVotes + voteCount;
    });
    patchVotes(article_id, voteCount).catch((err) => {
      setError(err);
      setVotes(startingVotes);
    });
  };

  return (
    <section className="voting-container">
      <p>Votes: {votes}</p>
      <button className="vote-for-article" onClick={() => handleClick(1)}>
        👍
      </button>
      <button className="vote-for-article" onClick={() => handleClick(-1)}>
        👎
      </button>
      {error ? <h4 id="error-message">{error.message}</h4> : null}
    </section>
  );
};

export default Votes;
