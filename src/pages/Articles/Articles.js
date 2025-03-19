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

        <h2>2025</h2>
        <hr />
        <Link to="./cs415mp1" className="articles-page">
          <div className="articles-page-name">
            CS 415: Infinite Matrix using Unreal Engine 5
          </div>
          <div className="articles-page-date-new">March 15</div>
        </Link>
      </div>
    </div>
  );
}
