import "../articlespage.css";
// import CodeBlock from "../../../utilities/codeblock/codeblock";
import SideBar from "../../sidebar/sidebar";
import Key from "../../../utilities/key/key";
import { useEffect } from "react";

export default function CS415MP1() {
  // TITLE
  const notetitle = "CS 415: Infinite Matrix using Unreal Engine 5";
  const contenttype = "Article";
  // DATE
  const publisheddate = "March 5, 2025";
  const topics = ["machine projects", "update", "gaming development"];
  // HOOKS
  const contents = [
    {
      text: "Title",
      link: "title-hook",
    },
    { text: "Introduction", link: "introduction-hook" },
    { text: "Project Overview", link: "project-overview-hook" },
    { text: "Game Mechanics", link: "game-mechanics-hook" },
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
          <p>
            <i>
              A first-person endless runner inspired by The Matrix, built for CS
              415: Game Development
            </i>
          </p>
          <h2 id="introduction-hook">Introduction</h2>
          <hr />
          <p>
            Welcome to my first technical article. I wanted to write about this
            machine project because I found it very interesting and outside my
            primary area of study. For CS 415: Game Development, I had to create
            a Matrix-inspired endless runner in Unreal Engine 5.5.1. The first
            MP is to learn how Unreal Engine works, learn Blueprint scripting,
            UI development, and gameplay mechanics while keeping it fun. I have
            never been a big fan of the <i>Matrix</i> sequels, but making a game
            where you dodge obstacles, fight enemies, and go through endless
            tunnels felt like a fitting tribute to the sequels.
          </p>
          <p>
            <div className="article-video-container">
              <video
                className="article-video"
                src="/videos/2025/cs415mp1_1.mp4"
                type="video/mp4"
                loop
                autoPlay
                muted
                playsInline
              >
                Your browser does not support the video tag.
              </video>
              <span className="article-video-title">
                vid. 1 completed machine project
              </span>
            </div>
            This article talks about my development process, including game
            design decisions, how I build core mechanics such as health, score,
            and speed, technical breakdowns covering blueprints, HUD, etc.
          </p>
          <h2 id="project-overview-hook">Project Overview</h2>
          <hr />
          <p>
            The object of the project was to build a first-person endless runner
            with simple yet engaging mechanics. Basically, the player sprints
            through an endless tunnel, dodging obstacles as their speed
            increases. Health packs spawn at random locations and can be picked
            up to restore health.
          </p>
          <p>
            For this project, I used Unreal Engine 5.5.1, using Blueprints for
            game logic and Git for version control. I also used OBS studio for
            gameplay recording and debugging.
          </p>
          <p>
            The game includes several core features. First, the player moves in
            a first-person perspective, allowing them to navigate tunnels
            smoothly. The obstacle avoidance mechanics rely on real-time
            collision detection to determine when the player interacts with
            objects. The player's score increases when they successfully pass
            through each tunnel or shoot an enemy. The game template that I used
            for the mesh and generation of tunnels is from Kodeco.
          </p>
          <h2 id="game-mechanics-hook">Game Mechanics</h2>
          <hr />
          <h3>Health System ❤️</h3>
          <p>
            I implemented a health system where the player has a health bar that
            decreases upon collision rather than instantly losing. When the
            player collides with an obstacle, they do not stop but instead pass
            through. The game only ends when the player's health reaches zero.
            The health bar is displayed in the UI and resets to 100 when the
            game restarts.
          </p>
          <div className="article-image-container">
            <img
              className="article-image"
              src="/assets/articles/2025/cs415mp1/P1.png"
              alt="Game Screenshot"
            />
            <img
              className="article-image"
              src="/assets/articles/2025/cs415mp1/P2.png"
              alt="Game Screenshot"
            />
          </div>
          <p>
            First, I created a <code className="inline-code">Health</code>{" "}
            variable in the <code className="inline-code">BP_Player</code> to
            keep track of the player's health value. After that, I then built a
            HUD Widget Blueprint{" "}
            <code className="inline-code">BP_HealthBar</code> that updates
            dynamically based on player's health with the function above. For
            collision handling, I used{" "}
            <code className="inline-code">OnComponentBeginOverlap</code>
            instead of <code className="inline-code">OnComponentHit</code> to
            ensure that the collision event is only triggered one.
          </p>
          <h3>Scoring System 🏆</h3>
          <p>
            For the scoring system, the player's score increases only when they
            successfully pass through a tunnel. If a player collides with an
            obstacle, the score will not change. When the game restarts, the
            score resets to zero.
          </p>
          <div className="article-image-container">
            <img
              className="article-image"
              src="/assets/articles/2025/cs415mp1/P3.png"
              alt="Game Screenshot"
            />
          </div>
          <p>
            To implement this, I created a{" "}
            <code className="inline-code">variable</code> integer variable in{" "}
            <code className="inline-code">BP_Player</code> which keeps track of
            the player's score. I also added a widget to display the score in
            the UI as text. I added a{" "}
            <code className="inline-code">TriggerZone</code> inside each tunnel.
            When the player successfully passes through, the system updates the
            score accordingly.
          </p>
          <h3>Player Speed Increase ⚡️</h3>
          <p>
            Since I wanna make it challenging for the player, I implemented a
            mechanic where the player's speed increases depending on the score.
            The speed increases based on the elapsed time and the player's
            score.
          </p>
          <div className="article-image-container">
            <img
              className="article-image-horizontal"
              src="/assets/articles/2025/cs415mp1/P5.png"
              alt="Game Screenshot"
            />
          </div>
          <p>
            For this mechanic, I just added a variable called{" "}
            <code className="inline-code">Forward Speed</code>, then increased
            it by multiplying <code className="inline-code">Score</code> by 50.
            The sum these variables is then be multiplied by the elapsed time
            and set as the{" "}
            <code className="inline-code">Actor World Offset</code> function and
            the <code className="inline-code">Curr Speed</code>.
          </p>
          <h3>Health Packs 🏥</h3>
          <p>
            Since players continuously lose health through obstacle collisions,
            I introduced <strong>randomly spawning health packs</strong> to
            provide a way to recover some health. Health packs appear inside
            tunnels on randomized intervals but not more than one health pack
            can appear in a tunnel.
          </p>
          <div className="article-image-container">
            <img
              className="article-image-horizontal"
              src="/assets/articles/2025/cs415mp1/P4.png"
              alt="Game Screenshot"
            />
          </div>
          <p>
            To implement this, I created a new Blueprint class,{" "}
            <code className="inline-code">BP_HealthPack</code>, which consists
            of static mesh and a collision box. When the player overlaps with
            the health pack,{" "}
            <code className="inline-code">OnComponentBeginOverlap</code> is
            triggered which increases the player's health and destroys the
            health pack.
          </p>
          <h3>Enemies 👾</h3>
          <p>
            I implemented an enemy in each tunnel. When the player collides with
            an enemy, the player's health decreases. However, if the player
            eliminates the enemy by shooting projectiles, they earn a score.
          </p>
          <div className="article-image-container">
            <img
              className="article-image"
              src="/assets/articles/2025/cs415mp1/P6.png"
              alt="Game Screenshot"
            />
          </div>
          <p>
            To implement enemies, I created a{" "}
            <code className="inline-code">BP_Enemy1</code> blueprint. The enemy
            blueprint includes collision detection logic, allowing it to
            interact with both the player and projectiles. When hit by a
            projectile, the enemy is destroyed, and the player's score
            increases.
          </p>
          <h3>Projectiles & Combat 🔫</h3>
          <p>
            I also added a <strong>projectile attack system</strong> that allows
            the player to fire bullets by clicking the <Key keyText="LMB" />.
            The projectile moves faster than the player's movement speed. Once
            the projectile collides with an enemy, it is destroyed.
          </p>
          <div className="article-image-container">
            <img
              className="article-image"
              src="/assets/articles/2025/cs415mp1/P7.png"
              alt="Game Screenshot"
              style={{ maxWidth: "30%" }}
            />
            <img
              className="article-image"
              src="/assets/articles/2025/cs415mp1/P8.png"
              alt="Game Screenshot"
            />
          </div>
          <p>
            To create this mechanic, I designed{" "}
            <code className="inline-code">BP_Bullet</code>, which consists of a
            collision sphere and a movement component. When the left mouse
            button is pressed, a projectile is spawned at the player's position
            and propelled forward using the Launch Velocity function. The
            projectile is destroyed upon collision with an enemy or any object.
          </p>
          <p>
            Overall, this project was fun and challenging as an introduction to
            Unreal Engine 5. I think this machine project taught me how to use
            Blueprint scripting, create interactive mechanics, and develop UI
            elements for health and scoring.
          </p>
          <p>
            Thanks for reading! If you have any additional thoughts or feedback
            about the project, let me know!
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
