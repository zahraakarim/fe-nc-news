import "./App.css";
import { Routes, Route } from "react-router-dom";
import ArticleList from "./Components/Article-List";
import Header from "./Components/Header";
import NavBar from "./Components/Nav-Bar";
import Home from "./Components/Home";
import ArticleCard from "./Components/Article-Card";
import Topics from "./Components/Topics";

function App() {
  return (
    <div className="nc-news">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<ArticleCard />} />
        <Route
          path="/articles/:article_id/comments"
          element={<ArticleCard />}
        />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:topic" element={<ArticleList />} />
      </Routes>
    </div>
  );
}

export default App;
