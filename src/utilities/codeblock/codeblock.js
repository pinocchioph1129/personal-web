import React, { useEffect } from "react";
import hljs from "highlight.js";
import "./codeblock.css";
import "highlight.js/styles/default.css";

const CodeBlock = ({ filename, code, language }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className="code-container">
      <div className="code-filename">
        <p>{filename}</p>
      </div>
      <div className="code-code">
        <pre>
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
