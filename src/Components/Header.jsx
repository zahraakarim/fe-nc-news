import { useContext } from "react";
import { UserContext } from "../Context/User";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1 id="main-header">Welcome to NC news!</h1>
      {user ? <h4 id="current-user-title">Signed in as {user}</h4> : null}
    </div>
  );
};

export default Header;
