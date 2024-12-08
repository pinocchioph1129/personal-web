import "../notespage.css";
import CodeBlock from "../../../utilities/codeblock/codeblock";

export default function Page() {
  const sampleCode = `
  def greet():
      print("Hello, World!")
  `;
  return (
    <div className="page-container">
      <div className="page-title">
        <h1>My Very First Note</h1>
      </div>
      <div className="page-content">
        <p>
          Hello! Welcome to my first note. My name is Kervi Jay Javonillo, I am
          studying Computer Science and Philosophy.{" "}
        </p>
        <CodeBlock filename="intro.js" code={sampleCode} language="css" />
      </div>
    </div>
  );
}
