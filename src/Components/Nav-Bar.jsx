import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/articles">Articles</Link>
      <Link to="/topics">Topics</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
};

export default NavBar;
