import "./Notes.css";
import { Link } from "react-router-dom";

export default function Notes() {
  return (
    <div className="notes">
      <div className="notes-container">
        <h1>Notes</h1>
        <hr />
        <p>Personal notes about life, music, project, and everything else.</p>
      </div>

      <h2>2024</h2>
      <hr />
      <Link to="./classes" className="notes-page">
        <div className="notes-page-name">2024-2025 Class Schedule</div>
        <div className="notes-page-date-new">December 26</div>
      </Link>
      <Link to="./firstnote" className="notes-page">
        <div className="notes-page-name">My Very First Note</div>
        <div className="notes-page-date">December 10</div>
      </Link>
    </div>
  );
}
