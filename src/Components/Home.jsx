import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/User";

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const [usernameInput, setUsernameInput] = useState("");
  let navigate = useNavigate();
  const handleLogin = (e) => {
    let path = `/articles`;
    navigate(path);
    e.preventDefault();
    setUser(usernameInput);
  };

  return (
    <div id="login">
      <form action="#!" id="main">
        <h2>Login to your account</h2>

        <div className="input-parent">
          <label htmlFor="username">Username or Email</label>
          <input
            type="text"
            id="username"
            value={usernameInput}
            onChange={(e) => {
              setUsernameInput(e.target.value);
            }}
          />
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
