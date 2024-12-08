import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState } from "react";
import "./NavigationBar.css";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <nav className="nav-wrapper">
      <div className="nav-container">
        <div className="logo-container">
          <Icon icon="unjs:unstorage" width="25" height="25" />{" "}
          <Link to="/" className="site-title" onClick={closeMenu}>
            Kervi Jay Javonillo
          </Link>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={isMenuOpen ? "open" : ""}>
          <CustomLink to="/Notes" closeMenu={closeMenu}>
            Notes
          </CustomLink>
          <CustomLink to="/Articles" closeMenu={closeMenu}>
            Articles
          </CustomLink>
          <CustomLink to="/Projects" closeMenu={closeMenu}>
            Projects
          </CustomLink>
          <CustomLink to="/About" closeMenu={closeMenu}>
            About Me
          </CustomLink>
        </ul>
      </div>
    </nav>
  );
}

function CustomLink({ to, children, closeMenu, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link
        to={to}
        {...props}
        onClick={() => {
          if (closeMenu) closeMenu();
        }}
      >
        {children}
      </Link>
    </li>
  );
}
