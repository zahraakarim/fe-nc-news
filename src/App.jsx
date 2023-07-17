import "./App.css";
import { Routes, Route } from "react-router-dom";
import ArticleList from "./Components/Article-List";
import Header from "./Components/Header";
import NavBar from "./Components/Nav-Bar";
import Home from "./Components/Home";

function App() {
  return (
    <div className="nc-news">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticleList />} />
      </Routes>
    </div>
  );
}

export default App;
