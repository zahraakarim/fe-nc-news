import { useState, useEffect } from "react";
import { getAllTopics } from "../api";
import { Link } from "react-router-dom";
import { capitalisedTopic } from "../util";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllTopics().then((data) => {
      setTopics(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p className="loading">Loading Topics...</p>;
  }

  return (
    <div className="topic-list">
      {topics.map((topic) => {
        return (
          <li className="topic-card" key={topic.slug}>
            <Link className="topic-container" to={`/topics/${topic.slug}`}>
              <h3 className="topic-topic"> {capitalisedTopic(topic.slug)}</h3>
              <p className="topic-description">{topic.description}</p>
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default Topics;
