import "../notespage.css";
// import CodeBlock from "../../../utilities/codeblock/codeblock";
import SideBar from "../../sidebar/sidebar";
import { useEffect } from "react";

export default function Classes() {
  const notetitle = "2024-2025 Class Schedule";
  const contenttype = "Note";
  // DATE
  const publisheddate = "December 26, 2024";
  const topics = ["life", "update"];
  // HOOKS
  const contents = [
    {
      text: "Title",
      link: "title-hook",
    },
    { text: "Spring Classes", link: "spring-hook" },
    { text: "Fall Classes", link: "fall-hook" },
  ];
  const spring_data = [
    {
      course: "CS 415",
      coursename: "Game Development",
      instructor: "Prof. Sharref",
      time: "T 11:00-12:15 AM",
    },

    {
      course: "CS 421",
      coursename: "Progrmng Languages & Compilers",
      instructor: "Prof. Beckman",
      time: "TTh 9:30-10:45 AM",
    },
    {
      course: "CS 437",
      coursename: "Topics in Internet of Things",
      instructor: "Prof. Caesar",
      time: "ONL",
    },
    {
      course: "CS 438",
      coursename: "Communication Networks",
      instructor: "Prof. Soltanaghai",
      time: "TTh 2:00-3:15 PM",
    },
  ];
  const fall_data = [
    {
      course: "CS 374",
      coursename: "Intro. to Alg. and Models of Comp.",
      instructor: "Prof. Har-Peled",
      time: "TTh 11:00-12:15 PM",
    },
    {
      course: "CS 425",
      coursename: "Distributed Systems",
      instructor: "Prof. Gupta",
      time: "MWF 10:00-11:15 AM",
    },
    {
      course: "CS 424",
      coursename: "Real-time Systems",
      instructor: "Prof. Tarek",
      time: "TTh 2:00-3:15 PM",
    },
    {
      course: "PHIL 499",
      coursename: "Capstone Seminar",
      instructor: "Prof. Varden",
      time: "MW 1:00-2:30 PM",
    },
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
            Hello! Welcome to my class schedule for the school year 2024-2025.
            As a senior, the courses I’m taking can be challenging at times. My
            primary focus is on Distributed Systems, which guided me to select
            classes that are heavily concentrated on networking and security,
            along with a touch of IoT (Internet of Things) to round out my
            understanding of connected systems.
          </p>
          <p>
            Interestingly, my academic journey hasn’t been linear. I would say
            that it is a rollercoaster for me. I originally started as a
            freshman majoring in Molecular and Cellular Biology because I wanted
            to be a doctor, at some point. Later, I transitioned to Mathematics
            since I really liked Math despite the fact that many people don't.
            Now, I find myself majoring in Computer Science and Philosophy.
            Although I’m yet to complete some core requirements due to my later
            transition into Computer Science, I see this as an opportunity to
            build a well-rounded academic foundation.
          </p>
          <h2 id="spring-hook">Spring 2025</h2>
          <hr />
          <div>
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
              <thead>
                <tr>
                  <th style={{ border: "1px solid black", padding: "8px" }}>
                    Course
                  </th>
                  <th style={{ border: "1px solid black", padding: "8px" }}>
                    Course Name
                  </th>
                  <th style={{ border: "1px solid black", padding: "8px" }}>
                    Instructor
                  </th>
                  <th style={{ border: "1px solid black", padding: "8px" }}>
                    Time
                  </th>
                </tr>
              </thead>
              <tbody>
                {spring_data.map((row, index) => (
                  <tr key={index}>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {row.course}
                    </td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {row.coursename}
                    </td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {row.instructor}
                    </td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {row.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3>Overview of Classes and Their Objectives</h3>
            <p></p>
            <p>
              <a href="https://siebelschool.illinois.edu/academics/courses/cs415-120231">
                CS 415
              </a>{" "}
              is a team-oriented, project-based exploration of video game design
              and development using Unreal Engine. Students will delve into
              topics such as geometric modeling, game physics, AI, shader
              programming, and industry-standard software engineering practices.
              The primary objective is for teams of 3 to 5 students to
              collaboratively design and develop a complete video game,
              combining technical skills and creative problem-solving.
            </p>
            <p>
              <a href="https://siebelschool.illinois.edu/academics/courses/cs421">
                CS 421
              </a>{" "}
              focuses on skills to program in a functional programming language
              and understand its evaluation. We will learn to implement a type
              checker or type inferencer based on formal type systems, create
              lexers and parsers using recursive-descent methods or parser
              generators, and develop syntax-directed translators to
              intermediate representations. Additionally, students will explore
              dynamic semantics specification methods, and construct
              interpreters grounded in formal operational semantics.
            </p>
            <p>
              <a href="https://siebelschool.illinois.edu/academics/courses/cs437">
                CS 437
              </a>
              is a course that provides an in-depth exploration of the Internet
              of Things (IoT), preparing students to engage with this
              transformative field. Students will gain hands-on experience in
              IoT device programming using Arduino and Raspberry Pi, work with
              sensing and actuating technologies, and understand IoT protocol
              stacks such as Zigbee, 5G, NFC, and MQTT. The curriculum covers
              networking backhaul design, security, data science applications
              for IoT, and cloud-based platforms like AWS IoT. Through practical
              lab assignments, students will implement real-world projects such
              as a distributed WiFi monitoring service and a cloud-based
              platform managing thousands of heartbeat sensors. Graduates of
              this course will be equipped with cutting-edge IoT knowledge and
              the practical skills to excel in industrial IoT applications.
            </p>
            <p>
              <a href="https://siebelschool.illinois.edu/academics/courses/cs438">
                CS 438
              </a>{" "}
              delves into the principles of layered architectures with a focus
              on the OSI Reference Model, exploring design issues and protocols
              across the transport, network, and data link layers. Key topics
              include the architectures and control algorithms of various
              networks such as local-area, point-to-point, and satellite
              systems, as well as standards for network access protocols. The
              course also examines models of network interconnection and
              provides an overview of networking and communication software,
              equipping students with a comprehensive understanding of network
              design and operation.
            </p>
          </div>
          <h2 id="fall-hook">Fall 2024</h2>
          <hr />
          <div>
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
              <thead>
                <tr>
                  <th style={{ border: "1px solid black", padding: "8px" }}>
                    Course
                  </th>
                  <th style={{ border: "1px solid black", padding: "8px" }}>
                    Course Name
                  </th>
                  <th style={{ border: "1px solid black", padding: "8px" }}>
                    Instructor
                  </th>
                  <th style={{ border: "1px solid black", padding: "8px" }}>
                    Time
                  </th>
                </tr>
              </thead>
              <tbody>
                {fall_data.map((row, index) => (
                  <tr key={index}>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {row.course}
                    </td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {row.coursename}
                    </td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {row.instructor}
                    </td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {row.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3>Overview of Classes and Their Objectives</h3>
            <p></p>
            <p>
              <a href="https://siebelschool.illinois.edu/academics/courses/cs374">
                CS/ECE 374
              </a>{" "}
              focuses on foundational concepts in theoretical computer science,
              including algorithm design and analysis, formal languages,
              automata theory, computability, and complexity. Topics include
              regular and context-free languages, finite-state automata,
              recursive algorithms (divide and conquer, backtracking, dynamic
              programming, greedy algorithms), fundamental graph algorithms
              (DFS, BFS, topological sorting, MSTs, shortest paths),
              undecidability, and NP-completeness.
            </p>
            <p>
              <a href="https://siebelschool.illinois.edu/academics/courses/cs425">
                CS 425
              </a>{" "}
              provides foundational knowledge for understanding, developing, and
              managing distributed systems, including cloud computing. Key
              topics include MapReduce, peer-to-peer systems, failure detection,
              synchronization, consensus, inter-process communication, gossip
              protocols, concurrency control, replication, key-value stores,
              NoSQL databases, security, probabilistic protocols, and stream
              processing. Real-world applications are explored through systems
              like clouds, datacenters, databases, and clusters.
            </p>
            <p>
              <a href="https://siebelschool.illinois.edu/academics/courses/cs424">
                CS 424
              </a>{" "}
              explores the intersection of computing and the physical world,
              focusing on the design and analysis of cyber-physical systems that
              ensure reliability and timeliness while integrating machine
              intelligence at the edge (Edge AI). Topics include task
              management, real-time scheduling, fail-safe operations, resource
              optimization, energy efficiency, and real-time AI challenges.
              Using a real-time AI simulation testbed, students will gain
              practical insights into addressing the complexities of
              cyber-physical systems and ensuring their effective operation in
              dynamic environments.
            </p>
            <p>
              <a href="https://courses.illinois.edu/schedule/DEFAULT/DEFAULT/PHIL/499">
                PHIL 499
              </a>{" "}
              examines the political philosophies of Immanuel Kant and Hannah
              Arendt, focusing on Kant’s <em>Doctrine of Right</em> and Critique
              of the Power of Judgment, alongside Arendt’s The Human Condition
              and Lectures on Kant’s Political Philosophy. It explores how
              Arendt, deeply influenced by Kant, particularly his Critique of
              Judgment—sought to develop a political theory inspired by his
              ideas, though her untimely death left this project incomplete. A
              central theme of the course is how contemporary political
              philosophers, blending insights from both Kant and Arendt into a
              “Karendtian” perspective, can draw on their works to formulate new
              political theories.
            </p>
          </div>
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
