import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState } from "react";
import "./NavigationBar.css";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(""); // Track active tab

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Set the clicked tab as active
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <nav className="nav-wrapper">
      <div className="nav-container">
        <div className="logo-container">
          <Icon icon="unjs:unstorage" width="25" height="25" />{" "}
          <Link
            to="/"
            className="site-title"
            onClick={() => handleTabClick("home")}
          >
            Kervi Jay Javonillo
          </Link>
        </div>
        <button
          className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          ☰
        </button>
        <ul className={isMenuOpen ? "open" : ""}>
          <CustomLink
            to="/Notes"
            tabName="notes"
            activeTab={activeTab}
            handleTabClick={handleTabClick}
          >
            Notes
          </CustomLink>
          <CustomLink
            to="/Articles"
            tabName="articles"
            activeTab={activeTab}
            handleTabClick={handleTabClick}
          >
            Articles
          </CustomLink>
          <CustomLink
            to="/Projects"
            tabName="projects"
            activeTab={activeTab}
            handleTabClick={handleTabClick}
          >
            Projects
          </CustomLink>
          <CustomLink
            to="/About"
            tabName="about"
            activeTab={activeTab}
            handleTabClick={handleTabClick}
          >
            About Me
          </CustomLink>
        </ul>
      </div>
    </nav>
  );
}

function CustomLink({
  to,
  tabName,
  children,
  activeTab,
  handleTabClick,
  ...props
}) {
  const resolvedPath = useResolvedPath(to);
  const isActive =
    useMatch({ path: resolvedPath.pathname, end: true }) ||
    activeTab === tabName;

  return (
    <li className={isActive ? "active" : ""}>
      <Link
        to={to}
        {...props}
        className={isActive ? "active-tab" : ""}
        onClick={() => handleTabClick(tabName)}
      >
        {children}
      </Link>
    </li>
  );
}
