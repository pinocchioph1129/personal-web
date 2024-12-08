import "./Articles.css";
import { Link } from "react-router-dom";

export default function Articles() {
  return (
    <div className="articles">
      <div className="articles-container">
        <h1>Articles</h1>
        <hr />
        <p>
          Guides, References, and tutorials on programming, web development, and
          design that I have read or wrote.
        </p>

        <div className="articles-topics">
          <p>
            <Link to="/Projects" className="articles-link">
              Explore Topics
            </Link>
          </p>
        </div>

        <h2>2024</h2>
        <hr />
      </div>
    </div>
  );
}
