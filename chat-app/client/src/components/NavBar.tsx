import { Link } from "react-router-dom";
import { path } from "../constants/path.constant";
import { useAuth } from "../providers/auth.provider";

function NavBar() {
  const { user, logout } = useAuth();

  return (
    <div className="flex justify-between">
      <Link to={path.home}>
        <h1> Chat app</h1>
      </Link>

      {user && <span>Logged in as {user?.name}</span>}

      <nav>
        {user && (
          <Link onClick={logout} to={path.login}>
            Logout
          </Link>
        )}

        {!user && (
          <ul className="flex space-x-2">
            <li>
              <Link to={path.login}>Login</Link>
            </li>
            <li>
              <Link to={path.register}>Register</Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
