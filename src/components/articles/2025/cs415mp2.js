import "../articlespage.css";
// import CodeBlock from "../../../utilities/codeblock/codeblock";
import SideBar from "../../sidebar/sidebar";
import Key from "../../../utilities/key/key";
import { useEffect } from "react";

export default function CS415MP2() {
  // TITLE
  const notetitle = "CS 415: Level Design using Unreal Engine 5";
  const contenttype = "Article";
  // DATE
  const publisheddate = "March 20, 2025";
  const topics = ["machine projects", "update", "gaming development"];
  // HOOKS
  const contents = [
    {
      text: "Title",
      link: "title-hook",
    },
    { text: "Introduction", link: "introduction-hook" },
    { text: "Project Overview", link: "project-overview-hook" },
    { text: "Implementation Details : Part 1", link: "implementationpt1-hook" },
    { text: "Implementation Details : Part 2", link: "implementationpt2-hook" },
    { text: "Miscellaneous", link: "misc-hook" },
    { text: "Conclusion", link: "conclusion-hook" },
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
          <p>
            <i>
              A first-person 3D platformer that I designed and built for CS 415:
              Game Development
            </i>
          </p>
          <h2 id="introduction-hook">Introduction</h2>
          <hr />
          <p>
            For MP2: Level Design in CS 415 Game Development, I developed a
            first-person platform game using <strong>Unreal 5.4</strong>. This
            project taught me how to create a playable 3D platforming level by
            implementing core <strong>game mechanics</strong>,{" "}
            <strong>AI-driven enemies</strong>, <strong>Pawn Sensing</strong>,
            and <strong>player interactions</strong>.
          </p>
          <div className="article-video-container">
            <video
              className="article-video"
              src="/videos/2025/cs415mp2.mp4"
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
          <p>
            This article walks through the technical details, challenges, and
            design that I implemented for a fun gameplay and learning
            experience.
          </p>
          <h2 id="project-overview-hook">Project Overview</h2>
          <hr />
          <p>
            The game is a 3D platformer where the player navigates through an
            environment with moving platforms, obstacles, and enemies while
            collecting health packs and increasing their score.
          </p>
          <h3>Here are the tools that I used:</h3>
          <ul>
            <li className="article-list">
              Unreal Engine 5.4 (Blueprint scripting and level design)
            </li>
            <li className="article-list">
              Character Movement Component for physics-based controls
            </li>
            <li className="article-list">
              AIController & NavMesh for enemy behavior
            </li>
            <li className="article-list">Git (for version control)</li>
            <li className="article-list">Fab (for mesh designs)</li>
          </ul>
          <h2 id="implementation-hook">Implementation Details : Part 1</h2>
          <hr />
          <h3>Setting up the map and Player Character</h3>
          <p>
            First, I imported the{" "}
            <a href="https://www.fab.com/listings/1a2b1d97-bc88-4c3f-98b8-22369b5c3170">
              Unreal Learning Kit
            </a>{" "}
            into Unreal Engine. This kit includes the basic player controller
            along with a large number of assets that can be used. The character
            controller that I used is under{" "}
            <code className="inline-code">BP_LearningKit_PlayerCharacter</code>.
          </p>
          <div className="article-image-container-one-title">
            <img
              className="article-image-one-title"
              src="/assets/articles/2025/cs415mp2/P1.png"
              alt="Game Screenshot"
            ></img>
            <span className="article-image-title">
              pic. 1 In-game health pack
            </span>
          </div>
          <p>
            The health system that I implemented in this assignment is the same
            as the one in <a href="/#/Articles/cs415mp1">Infinite Matrix</a>.
            The only difference is that health packs are scattered around the
            environment, unlike the previous MP where they were spawned
            randomly.
          </p>
          <div className="article-image-container-one-title">
            <img
              className="article-image-one-title"
              src="/assets/articles/2025/cs415mp2/P2.png"
              alt="Game Screenshot"
            ></img>
            <span className="article-image-title">
              pic. 2 In-game collectible item
            </span>
          </div>
          <p>
            For the collectible items, I placed them across the map to guide the
            player and encourage exploration. Upon collecting an item, the
            player earns 100 points. Just like the health packs, the collectible
            is destroyed upon collision. The score UI is the same as in Infinite
            Matrix.
          </p>
          <h3>Creating an AI Pursuer Enemy</h3>
          <p>
            One of the goals of creating a pursuer enemy in this assignment is
            to patrol a path between random locations where the enemy is placed
            while staying within the{" "}
            <code className="inline-code">NavigationMesh</code>. It should also
            chase the player when the player is within a moderate distance and
            within the line of sight of the Pursuer. Finally, it should return
            to its patrol path if the player gets too far away or out of the
            Pursuer's line of sight.
          </p>
          <div className="article-image-container-one-title">
            <img
              className="article-image-one-title"
              src="/assets/articles/2025/cs415mp2/P3.png"
              alt="Game Screenshot"
            ></img>
            <span className="article-image-title">
              pic. 3 In-game pursuer enemy
            </span>
          </div>
          <p>
            Since this Pursuer enemy will be controlled by an "AI controller,"
            we can specify in code how we want this enemy to behave. To do this,
            we need to create an "AI controller" object to control the actions
            of the Pursuer enemy.
          </p>
          <div className="article-image-container">
            <img
              className="article-image"
              src="/assets/articles/2025/cs415mp2/P4.png"
              alt="Game Screenshot"
            ></img>
            <img
              className="article-image"
              src="/assets/articles/2025/cs415mp2/P5.png"
              alt="Game Screenshot"
            ></img>
          </div>
          <p>
            First, we need to add a Blueprint Class of type AIController and
            save the controller with the name{" "}
            <code className="inline-code">Pursuer_AIController</code>. Inside
            the Components panel, select the "Mesh" component to change
            properties such as the Skeletal Mesh or Anim Class to modify the
            Pursuer enemy's animation.
          </p>
          <div className="article-image-container">
            <img
              className="article-image"
              src="/assets/articles/2025/cs415mp2/P6.png"
              alt="Game Screenshot"
            ></img>
          </div>
          <p>
            Next, select "AICharacter (self)" in the Components panel and, in
            the Details panel, set its "AI Controller Class" to the AI
            Controller <code className="inline-code">Pursuer_AIController</code>{" "}
            that you created in the previous step.
          </p>
          <p>
            In the Components tab, select Add and search for PawnSensing. This
            is the component that enables the Pursuer enemy to sense the
            location of the player.
          </p>
          <div className="article-image-container">
            <img
              className="article-image"
              src="/assets/articles/2025/cs415mp2/P7.png"
              alt="Game Screenshot"
              style={{ maxWidth: "100%" }}
            ></img>
          </div>
          <div className="article-image-container">
            <img
              className="article-image"
              src="/assets/articles/2025/cs415mp2/P8.png"
              alt="Game Screenshot"
            ></img>
          </div>
          <p>
            In the Event Graph, create a Custom Event named{" "}
            <code className="inline-code">Roam</code>. This event will allow the
            Pursuer enemy to roam around the environment. Since we want the
            enemy to continue roaming after reaching a destination, the event
            calls itself at the end. Call the custom event{" "}
            <code className="inline-code">Roam</code> from{" "}
            <code className="inline-code">Event BeginPlay</code>.
          </p>
          <div className="article-image-container">
            <img
              className="article-image"
              src="/assets/articles/2025/cs415mp2/P9.png"
              alt="Game Screenshot"
              style={{ maxWidth: "100%" }}
            ></img>
          </div>
          <div className="article-image-container-one-title">
            <img
              className="article-image-one-title"
              src="/assets/articles/2025/cs415mp2/P10.png"
              alt="Game Screenshot"
              style={{ maxWidth: "100%" }}
            ></img>
            <span className="article-image-title">
              pic. 4 Nav Mesh added to the map
            </span>
          </div>
          <p>
            In the level map window, click the + icon, select "Volumes," and add
            "NavMeshBoundsVolume." The Nav Mesh (pic. 4) indicates the area
            where the AI can be activated and roam, so it is important to ensure
            that it covers the entire area where you want enemies to move. To
            visualize the navigable area, press <Key keyText="P" /> on your
            keyboard.
          </p>
          <div className="article-image-container">
            <img
              className="article-image"
              src="/assets/articles/2025/cs415mp2/P11.png"
              alt="Game Screenshot"
              style={{ maxWidth: "100%" }}
            ></img>
          </div>
          <p>
            Create another Custom Event called{" "}
            <code className="inline-code">Chase</code>; this event will be
            triggered when the player is within the line of sight of the Pursuer
            enemy. To damage the player upon colliding with the Pursuer enemy,
            add a function called{" "}
            <code className="inline-code">Apply Damage</code> and set a base
            damage (for me, it is 10). You can also add{" "}
            <code className="inline-code">Spawn Emitter At Location</code> to
            produce a particle effect after applying damage, and{" "}
            <code className="inline-code">Play Sound at Location</code> for an
            audio cue.
          </p>
          <div className="article-image-container">
            <img
              className="article-image"
              src="/assets/articles/2025/cs415mp2/P13.png"
              alt="Game Screenshot"
              style={{ maxWidth: "90%" }}
            ></img>
          </div>
          <div className="article-image-container">
            <img
              className="article-image"
              src="/assets/articles/2025/cs415mp2/P12.png"
              alt="Game Screenshot"
            ></img>
          </div>
          <p>
            In the Content Drawer, create a Blueprint Enumeration class to
            define the state of our AI. Name this class{" "}
            <strong>EAIState</strong> and add three enumerators: Default, Roam,
            and Chase Player. In the AICharacter class, create a variable called{" "}
            <strong>AIState</strong> of type <strong>EAIState</strong>. Make
            this variable public by clicking the eye icon. Then remove the
            connection between{" "}
            <code className="inline-code">Event BeginPlay</code> and{" "}
            <code className="inline-code">ChasePlayer</code>, and create a
            function called{" "}
            <code className="inline-code">Switch on EAIState</code>. Connect the{" "}
            <code className="inline-code">Roam</code> event to the "Roam" node
            and the <code className="inline-code">Chase Player</code> event to
            the "Chase Player" node.
          </p>
          <p>
            In the viewport, click on your AI Character and set the default{" "}
            <strong>AIState</strong> to ‘Roam’. Default states are unique to
            each character, so you can have multiple AI characters with
            different default states.
          </p>
          <h3>Making the Pursuer Enemy Chase the Player</h3>
          <div className="article-image-container">
            <img
              className="article-image"
              src="/assets/articles/2025/cs415mp2/P14.png"
              alt="Game Screenshot"
              style={{ maxWidth: "95%" }}
            ></img>
          </div>
          <p>
            After adding the PawnSensing component in the Pursuer Enemy
            blueprint, define a function{" "}
            <code className="inline-code">On See Pawn</code> to specify what the
            Pursuer enemy should do when it sees the player. This function will
            trigger different animations for running towards the player and for
            patrolling.
          </p>
          <h2 id="implementationpt2-hook">Implementation Details : Part 2</h2>
          <hr />
          <h3>Creating the Mortar Enemy</h3>
          <div className="article-image-container">
            <img
              className="article-image"
              src="/assets/articles/2025/cs415mp2/P15.png"
              alt="Game Screenshot"
              style={{ maxWidth: "50%" }}
            ></img>
            <img
              className="article-image"
              src="/assets/articles/2025/cs415mp2/P17.png"
              alt="Game Screenshot"
              style={{ maxWidth: "30%" }}
            ></img>
          </div>
          <p>
            This is the Mortar Enemy. I chose a bagel (or a donut) as the static
            mesh because there aren't many free 3D models available. Plus, it’s
            humorous to think of a donut that shoots bombs. In the Content
            Drawer, create a Blueprint Actor Class. In its Components panel, add
            an <code className="inline-code">arrow</code> (name it Spawn
            Projectile) and a <code className="inline-code">StaticMesh</code>{" "}
            (for the model you want to use—I used a donut). To enable the mortar
            to sense the player, add a{" "}
            <code className="inline-code">PawnSensing</code> component. In the
            Variables panel, add a vector variable named "Desired Velocity."
          </p>
          <div className="article-image-container">
            <img
              className="article-image"
              src="/assets/articles/2025/cs415mp2/P16.png"
              alt="Game Screenshot"
              style={{ maxWidth: "90%" }}
            ></img>
          </div>
          <p>
            Then, create a function called{" "}
            <code className="inline-code">Mortar Prediction Function</code>.
            This function predicts the player's next movement with intentional
            inaccuracy, giving the player a chance to survive. After
            implementing this, call the function via the{" "}
            <code className="inline-code">On See Pawn</code> event from the
            PawnSensing component, just like with the Pursuer Enemy.
          </p>
          <h3>Creating the Custom Enemy</h3>
          <div className="article-image-container-one-title">
            <img
              className="article-image-one-title"
              src="/assets/articles/2025/cs415mp2/P18.png"
              alt="Game Screenshot"
              style={{ maxWidth: "50%" }}
            ></img>
            <span className="article-image-title">
              pic. 5 In-game custom enemy
            </span>
          </div>
          <p>
            The custom enemy I created was inspired by the Witch from{" "}
            <a href="https://supercell.com/en/games/clashofclans/">
              Clash of Clans
            </a>
            . For my game, I named him the Wizard instead, as this is the only
            free mesh I could find from Fab. The Wizard, upon seeing the player,
            shoots fireball projectiles while spawning zombies.
          </p>
          <div className="article-image-container-one-title">
            <img
              className="article-image-one-title"
              src="/assets/articles/2025/cs415mp2/P19.png"
              alt="Game Screenshot"
              style={{ maxWidth: "30%" }}
            ></img>
            <span className="article-image-title">pic. 6 In-game zombie</span>
          </div>
          <p>
            This zombie chases the player upon detecting them, much like a
            zombie would chase a human. The Wizard spawns a zombie every 5
            seconds while shooting projectiles at the player. After killing the
            Wizard, it will then spawn three more zombies and a button platform
            to finish the game.
          </p>
          <div className="article-image-container">
            <img
              className="article-image"
              src="/assets/articles/2025/cs415mp2/P20.png"
              alt="Game Screenshot"
              style={{ maxWidth: "30%" }}
            ></img>
            <img
              className="article-image"
              src="/assets/articles/2025/cs415mp2/P21.png"
              alt="Game Screenshot"
              style={{ maxWidth: "70%" }}
            ></img>
          </div>
          <p>
            Just like the Pursuer enemy, the Wizard and its zombies can be
            destroyed when the player jumps on their head. The only difference
            is that it takes 10 head jumps to kill the Wizard. I made the Wizard
            challenging to defeat because I intended it to be the boss of the
            game.
          </p>
          <div className="article-image-container">
            <img
              className="article-image"
              src="/assets/articles/2025/cs415mp2/P22.png"
              alt="Game Screenshot"
              style={{ maxWidth: "90%" }}
            ></img>
          </div>
          <div className="article-image-container">
            <img
              className="article-image"
              src="/assets/articles/2025/cs415mp2/P23.png"
              alt="Game Screenshot"
              style={{ maxWidth: "90%" }}
            ></img>
          </div>
          <p>
            Create two functions,{" "}
            <code className="inline-code">SpawnZombies</code> and{" "}
            <code className="inline-code">ShootPlayer</code>, in the Blueprint
            of the Wizard. The <code className="inline-code">SpawnZombies</code>{" "}
            function spawns three zombies and a player button upon killing the
            Wizard. The <code className="inline-code">ShootPlayer</code>{" "}
            function is called every 1 second to shoot at the player and spawn a
            zombie every 5 seconds. The{" "}
            <code className="inline-code">Magic Prediction Function</code> is
            the same function I defined in the Mortar Blueprint.
          </p>
          <div className="article-image-container">
            <img
              className="article-image"
              src="/assets/articles/2025/cs415mp2/P24.png"
              alt="Game Screenshot"
              style={{ maxWidth: "90%" }}
            ></img>
          </div>
          <p>
            If the player collides with the body of the Wizard, Pursuer enemy,
            or a zombie, this function reduces the player's health, applies a
            slight knockback, and temporarily disables player control.
          </p>
          <div className="article-image-container">
            <img
              className="article-image"
              src="/assets/articles/2025/cs415mp2/P25.png"
              alt="Game Screenshot"
              style={{ maxWidth: "90%" }}
            ></img>
          </div>
          <p>
            For the <code className="inline-code">Event BeginPlay</code>, this
            is what the function should look like. The Wizard's health can be
            set to any float value. This setup is similar to the Pursuer enemy,
            with another enumerator defined for the Wizard.
          </p>
          <div className="article-image-container-one-title">
            <img
              className="article-image-one-title"
              src="/assets/articles/2025/cs415mp2/P26.png"
              alt="Game Screenshot"
              style={{ maxWidth: "90%" }}
            ></img>
            <span className="article-image-title">
              pic. 7 Complete blueprint of the Wizard with necessary variables
            </span>
          </div>
          <h2 id="misc-hook">Miscellaneous</h2>
          <hr />
          <h3>Moving Platform</h3>
          <div className="article-image-container-one-title">
            <img
              className="article-image-one-title"
              src="/assets/articles/2025/cs415mp2/P27.png"
              alt="Game Screenshot"
              style={{ maxWidth: "60%" }}
            ></img>
            <span className="article-image-title">
              pic. 8 In-game moving platform
            </span>
          </div>
          <p>
            To add an extra challenge, I included moving platforms inspired by
            those in Super Mario games. This provided an opportunity to design
            pathways for players seeking an extra challenge to achieve a higher
            score.
          </p>
          <div className="article-image-container">
            <img
              className="article-image"
              src="/assets/articles/2025/cs415mp2/P28.png"
              alt="Game Screenshot"
              style={{ maxWidth: "60%" }}
            ></img>
            <div className="article-image-container">
              <img
                className="article-image"
                src="/assets/articles/2025/cs415mp2/P29.png"
                alt="Game Screenshot"
                style={{ maxWidth: "100%" }}
              ></img>
            </div>
          </div>
          <p>
            First, create a Blueprint Actor class. Add a{" "}
            <code className="inline-code">StaticMesh</code> in the Components
            panel and define a vector variable named "MoveToPos." In the
            Construction Script, set up the logic so that the platform moves
            from its original position to "MoveToPos" and then returns to its
            original position.
          </p>
          <h3>Restart UI</h3>
          <div className="article-image-container-one-title">
            <img
              className="article-image-one-title"
              src="/assets/articles/2025/cs415mp2/P30.png"
              alt="Game Screenshot"
              style={{ maxWidth: "60%" }}
            ></img>
            <span className="article-image-title">
              pic. 9 In-game restart UI
            </span>
          </div>
          <p>
            The restart UI is implemented similarly to the previous MP: Infinite
            Matrix.
          </p>
          <h2 id="conclusion-hook">Conclusion</h2>
          <hr />
          <p>
            I believe this project really helped me understand Unreal Engine 5
            more. It taught me a great deal about AI programming, level design,
            and optimization. I am excited to create our very own game in the
            next project.
          </p>
          <p>
            I'd love to hear your thoughts on this implementation! Have you
            tackled similar challenges in Unreal Engine? Let's chat in the
            comments below.
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
