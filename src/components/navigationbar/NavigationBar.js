import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./NavigationBar.css";
export default function NavigationBar() {
  return (
    <nav className="nav-wrapper">
      <div className="nav-container">
        <div className="logo-container">
          <Icon icon="unjs:unstorage" width="25" height="25" />{" "}
          <Link to="/" className="site-title">
            Kervi Jay Javonillo
          </Link>
        </div>
        <ul>
          <CustomLink to="/Notes">Notes</CustomLink>
          <CustomLink to="/Projects">Projects</CustomLink>
          <CustomLink to="/About">About Me</CustomLink>
        </ul>
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
