import "../articlespage.css";
// import CodeBlock from "../../../utilities/codeblock/codeblock";
import SideBar from "../../sidebar/sidebar";
import { useEffect } from "react";

export default function Page() {
  // TITLE
  const notetitle = "<Title>";
  const contenttype = "Note";
  // DATE
  const publisheddate = "December 10, 2024";
  const topics = ["life", "update"];
  // HOOKS
  const contents = [
    {
      text: "Title",
      link: "title-hook",
    },
    { text: "Coding & Projects", link: "coding-hook" },
    { text: "Life", link: "life-hook" },
    { text: "Gaming", link: "gaming-hook" },
    { text: "Fitness", link: "fitness-hook" },
    { text: "Digital Spaces", link: "digital-hook" },
    { text: "Looking Ahead", link: "looking-hook" },
  ];

  useEffect(() => {
    const COMMENTS_ID = "utterances-comments-script";
    if (!document.getElementById(COMMENTS_ID)) {
      const script = document.createElement("script");
      script.src = "https://utteranc.es/client.js";
      script.async = true;
      script.setAttribute("repo", "pinocchioph1129/personal-web");
      script.setAttribute("issue-term", notetitle);
      script.setAttribute("theme", "github-light");
      script.setAttribute("crossorigin", "anonymous");
      script.id = COMMENTS_ID;
      document.getElementById("utterances-comments").appendChild(script);
    }
  }, []);

  //   const sampleCode = `
  //   def greet():
  //       print("Hello, World!")
  //   `;

  return (
    <div className="page-layout">
      <div className="page-container">
        {/* TITLE */}
        <div className="page-title" id="title-hook">
          <h1>{notetitle}</h1>
        </div>
        {/* CONTENT */}
        <div className="page-content">
          {/* <CodeBlock filename="intro.js" code={sampleCode} language="css" />*/}
        </div>
        <div id="utterances-comments">
          <h2>Comments</h2>
          <hr />
        </div>
        <script
          src="https://utteranc.es/client.js"
          repo="pinocchioph1129/personal-web"
          issue-term="pathname"
          theme="github-light"
          crossorigin="anonymous"
          async
        ></script>
      </div>
      <SideBar
        contenttype={contenttype}
        publisheddate={publisheddate}
        topics={topics}
        contents={contents}
      />
    </div>
  );
}
