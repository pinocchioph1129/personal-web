import "./sidebar.css";

export default function SideBar({
  contenttype,
  publisheddate,
  topics,
  contents,
}) {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    const offset = 100;
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <h4>Published</h4>
        <p>{publisheddate}</p>
        <button
          onClick={() => handleScroll("utterances-comments")}
          style={{
            background: "none",
            border: "none",
            color: "var(--link-color)",
            cursor: "pointer",
          }}
        >
          View comments
        </button>
      </div>
      <hr />
      <div className="sidebar-section">
        <h4>Topics</h4>
        <div className="sidebar-topics">
          {topics.map((topic, index) => (
            <span key={index} className="sidebar-topic">
              {topic}
            </span>
          ))}
        </div>
      </div>
      <hr />
      <div className="sidebar-section">
        <h4>In This {contenttype}</h4>
        <ul>
          {contents.map((content, index) => (
            <li key={index}>
              <button
                onClick={() => handleScroll(content.link)}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--link-color)",
                  cursor: "pointer",
                }}
              >
                {content.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
