import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  const handleLogin = () => {
    let path = `/articles`;
    navigate(path);
  };
  return (
    <div id="login">
      <form action="#!" id="main">
        <h2>Login to your account</h2>

        <div className="input-parent">
          <label htmlFor="username">Username or Email</label>
          <input type="text" id="username" />
        </div>

        <div className="input-parent">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>

        <button id="login" type="submit" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Home;
