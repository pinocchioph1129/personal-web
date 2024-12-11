import "../notespage.css";
import CodeBlock from "../../../utilities/codeblock/codeblock";
import Crochet from "../../../assets/notes/2024/crochet.png";
import SideBar from "../../sidebar/sidebar";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const COMMENTS_ID = "utterances-comments-script";

    if (!document.getElementById(COMMENTS_ID)) {
      console.log("Utterances script is loading...");
      const script = document.createElement("script");
      script.src = "https://utteranc.es/client.js";
      script.async = true;
      script.setAttribute("repo", "pinocchioph1129/personal-web");
      script.setAttribute("issue-term", "pathname");
      script.setAttribute("theme", "github-light");
      script.setAttribute("crossorigin", "anonymous");
      script.id = COMMENTS_ID;

      const commentContainer = document.getElementById("utterances-comments");
      if (commentContainer) {
        commentContainer.appendChild(script);
        console.log("Utterances script appended successfully.");
      } else {
        console.error("Error: Utterances container not found.");
      }
    }
  }, []);

  const sampleCode = `
  def greet():
      print("Hello, World!")
  `;

  const contenttype = "Note";
  const publisheddate = "December 10, 2024";
  const topics = ["life", "update"];
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

  return (
    <div className="page-layout">
      <div className="page-container">
        <div className="page-title" id="title-hook">
          <h1>My Very First Note</h1>
        </div>
        <div className="page-content">
          <CodeBlock filename="intro.js" code={sampleCode} language="css" />
          <p>
            Hello! Welcome to (as the title says) my very first note. As of now,
            I am in the final year of my journey in Computer Science and
            Philosophy. My academic focus is in distributed systems, networking,
            and security, with a passion for front-end design. I am also honing
            my skills in Go and React through various personal and academic
            projects.
          </p>
          <p>
            One of the most exciting projects that I'm working on is a
            distributed file system from my CS 425 Distributed System class.
            It's been challenging for sure, but it is also rewarding from
            building failure detection mechanism to implementing consistent
            hashing for storage.
          </p>

          <h2 id="coding-hook">Coding & Projects</h2>
          <hr />
          <p>
            Recently, I have been exploring how to make complex topics like SWIM
            protocols and MapReduce more approachable through writing. I also
            enjoy creating small side projects that combine my technical and
            creative interest like building this website as my personal
            portfolio. Currently, I am planning to make a game or app with
            Maxwell Yang, go check his{" "}
            <a href="https://meyang2.web.illinois.edu/">website</a>!
          </p>

          <h2 id="life-hook">Life</h2>
          <hr />
          <div className="page-content-divide">
            <div className="page-content-divide-left">
              <p>
                Outside of work and school, I have been balancing my time
                between hobbies like climbing and weight lifting. I used to
                crochet too! Crocheting has become a meditative practice, while
                climbing keeps me physically and mentally challenged. I have
                also been spending time exploring new books. Here are some of
                the books I have:
              </p>
              <ul>
                <li>
                  <strong>Blackouts</strong> By Justin Torres
                </li>
                <li>
                  <strong>Queer</strong> By William S. Burroughs
                </li>
                <li>
                  <strong>Sex, Love, and Gender</strong> By Helga Varden (My
                  PHIL 499 Professor)
                </li>
                <li>
                  <strong>the sun and her flowers</strong> By Rupi Kaur
                </li>
              </ul>
            </div>
            <div className="page-content-divide-right">
              <div className="page-content-image-container">
                <img src={Crochet} alt="" />
                <span className="page-content-image-title">
                  fig. 1 crochet piece that I made
                </span>
              </div>
            </div>
          </div>
          <h2 id="gaming-hook">Gaming</h2>
          <hr />
          <p>
            This year, I am trying to get back to gaming again. One of the
            guilty pleasures that I have is playing{" "}
            <a href="https://www.leagueoflegends.com/en-us/">
              League of Legends
            </a>
            , it can be frustrating at times but it is totally worth it when you
            win. This past summer, I tried finishing{" "}
            <a href="https://store.steampowered.com/dlc/1245620/ELDEN_RING/">
              Elden Ring DLC: Shadow of the Erdtree
            </a>{" "}
            but I couldn't because my level 200 Astrologer keeps getting one
            shot by every living being in the DLC. This winter break, maybe I
            will try finishing a game, maybe I will play{" "}
            <a href="https://store.steampowered.com/app/2124490/SILENT_HILL_2/">
              Silent Hill 2
            </a>
            .
          </p>
          <h2 id="fitness-hook">Fitness</h2>
          <hr />
          <p>
            Consistency in fitness has been a big win for me recently. I have
            been going to the gym 6 days a week, and I am starting to see
            progress each day in my strength and endurance. Here's my{" "}
            <a href="https://www.lifehack.org/688549/the-ultimate-workout-routines-for-men">
              routine
            </a>{" "}
            with 10 minutes of cardio at a 14.0 incline and 3 mph.
          </p>
          <h2 id="digital-hook">Digital Spaces</h2>
          <hr />
          <p>
            The internet really feels different now, but I am finding joy in
            crafting my own space here. This website is my digital garden - a
            place to grow, share and connect. I hope it inspires others to carve
            out their own creative corners online, just like the early days of
            the web.
          </p>
          <h2 id="looking-hook">Looking Ahead</h2>
          <hr />
          <p>
            As the year ends, I am reflecting on how far I have come and what
            lies ahead. I am grateful for the people, projects, and
            opportunities that shaped me. 2024 will be a year of transition, but
            I am ready to embrace new challenges, adventures, and beginnings.
          </p>
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
