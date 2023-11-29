import { Link, useLocation } from "react-router-dom";
import "./index.css";
function ProjectNav() {
  const { pathname } = useLocation();
  return (
    <div className="list-group">
      <Link
        to="/project/home"
        className={`list-group-item project ${
          pathname.includes("home") ? "active" : ""
        }`}
      >
        Home
      </Link>
      <Link
        to="/project/signup"
        className={`list-group-item project ${
          pathname.includes("signup") ? "active" : ""
        }`}
      >
        Sign Up
      </Link>
      <Link
        to="/project/signin"
        className={`list-group-item project ${
          pathname.includes("signin") ? "active" : ""
        }`}
      >
        Sign In
      </Link>
      <Link
        to="/project/account"
        className={`list-group-item project ${
          pathname.includes("account") ? "active" : ""
        }`}
      >
        Account
      </Link>
    </div>
  );
}
export default ProjectNav;
