import "../articlespage.css";
import CodeBlock from "../../../utilities/codeblock/codeblock";
import SideBar from "../../sidebar/sidebar";
import { useEffect } from "react";

export default function DistributedLog() {
  // TITLE
  const notetitle = "Distributed Log Query: A Beginner's Guide";
  const contenttype = "Note";
  // DATE
  const publisheddate = "July 22, 2025";
  const topics = ["networking", "distributed systems", "databases"];
  // HOOKS
  const contents = [
    {
      text: "Title",
      link: "title-hook",
    },
    { text: "Introduction", link: "introduction-hook" },
    { text: "Project Overview", link: "project-overview-hook" },
    { text: "Creating TCP Client", link: "creating-tcp-client-hook" },
    { text: "Creating TCP Server", link: "creating-tcp-server-hook" },
    { text: "Libraries Used", link: "libraries-hook" },
    { text: "Conclusion & Looking Ahead", link: "conclusion-and-looking-ahead-hook" },
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

    const client_tcp = `
    conn, err := net.Dial("tcp", "host.docker.internal:8081")
	if err != nil {
		fmt.Println(err)
		return
	}

	_, err = conn.Write([]byte(grepCommand))
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println("Data sent to server successfully")
	
	buffer := make([]byte, 4096)
	_, err = conn.Read(buffer)
	if err != nil {
		fmt.Println("Error reading from connection:", err)
		return
	}
    `;

    const server_tcp = `
    ln, err := net.Listen("tcp", "0.0.0.0:8080")
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}
	for {
		conn, err := ln.Accept()
		if err != nil {
			fmt.Println("Failed to accept connection:", err)
			continue
		}
		go handleConnection(conn)
	

    func handleConnection(conn net.Conn) {
        buffer := make([]byte, 1024)
        n, err := conn.Read(buffer)
        if err != nil {
            fmt.Println("Error reading from connection:", err)
            return 
        }

        ... // Process the query from the client

        fmt.Printf("Command output: %s\n", stdout)
        _, err = conn.Write(stdout)
        if err != nil {
            fmt.Println("Error writing to connection:", err)
            return
        }
    }
    `;

    const shlex_go = `
    import "github.com/google/shlex"

    func handleConnection(conn net.Conn) {

        ... // Read data from the connection

        fmt.Printf("Received data from %s: %s\\n", conn.RemoteAddr(), string(buffer[:n]))
        commandLine := string(buffer[:n])
        var commandParts []string
        commandParts, err = shlex.Split(commandLine)
        if err != nil {
            fmt.Println("Error parsing command:", err)
            return
        }
        for i, part := range commandParts {
            fmt.Printf("Command part %d: %s\\n", i, part)

        }
        filepath := commandParts[len(commandParts)-1]
        filepath = fmt.Sprintf("./log_files/%s", filepath)
        if len(commandParts) > 0 {
            commandParts = commandParts[:len(commandParts)-1]
        }
        commandParts = append(commandParts, filepath)
        stdout, err := exec.Command("/bin/grep", commandParts[1:]...).Output()
        if err != nil {
            if exitError, ok := err.(*exec.ExitError); ok && exitError.ExitCode() == 1 {
                fmt.Println("No matches found")
                return
            }
            fmt.Println("Error executing command:", err)
            return
        }

        ... // Send the output back to the client
    }
        `;

    const sync_go = `
func runGrepOnAllLogFiles(grepCommand string) {
    wg := sync.WaitGroup{}
    for i := 0; i < len(localaddresses); i++ {

        ... // Create a TCP connection to each machine

        wg.Add(1)
        go func(address string, index int, conn net.Conn) {
            defer wg.Done()
            defer conn.Close()

            grepFile := fmt.Sprintf("machine.%d.log", index+1)
            fullCommand := fmt.Sprintf("%s %s", grepCommand, grepFile)
            _, err := conn.Write([]byte(fullCommand))
            if err != nil {
                fmt.Printf("Error sending command to %s: %v\n", address, err)
                return
            }
            fmt.Printf("Data sent to %s successfully\n", address)

            buffer := make([]byte, 4096)
            var results string
            for {
                n, err := conn.Read(buffer)
                if err != nil {
                    if err == io.EOF {
                        // End of data stream
                        break
                    }
                    fmt.Printf("Error reading from %s: %v\\n", address, err)
                    return
                }
                results += string(buffer[:n])
            }
			line_countlock.Lock()
			line_count := strings.Count(results, "\\n")
			total_line += line_count
			fmt.Printf("Received data from %s: %d lines\\n", address, line_count)
			line_countlock.Unlock()

            // Save results to file
            SaveResultsToFile(results, fullCommand, &wg)
        }(localaddresses[i], i, conn)
    }
    wg.Wait()
	fmt.Printf("Total lines processed: %d\n", total_line)
	total_line = 0 
    fmt.Println("Grep command executed on all log files.")
}`;

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
                This article provides a beginner's guide to distributed log query on files on multiple
                machines, from any of those machines. This assumes that the user has 5+ machines, each
                generating a log file, and that the user has access to all of those machines. Here is
                the full implementation of the project on <a href="https://github.com/pinocchioph1129/distributed-log-querier">Github</a>.
            </i>
          </p>
          <h2 id="introduction-hook">Introduction</h2>
          <hr />
          <p>
            In networking programming, one of the fundamental things that a developer needs to learn is
            socket programming. This is the process of sending and receiving data over a network, and it is the
            foundation of many networked applications. In this article, we will explore how to use socket
            programming to query log files on multiple machines, and how to do so in a distributed manner.
          </p>
          <div className="article-image-container-one-title">
            <img
              className="article-image-one-title"
              src="/assets/articles/2025/distributed_log/P1.png"
              alt="Example of distributed log query"
            ></img>
            <span className="article-image-title">
              pic. 1 two terminals running distributed log query
            </span>
          </div>
          <h2 id="project-overview-hook">Project Overview</h2>
            <hr />
            <p>
              The goal of this project is to create a distributed log query system that allows users to search
              through log files on multiple machines from a single interface. This will involve setting up a
              centralized server that can communicate with each of the machines generating logs, as well as
              implementing a query language that allows users to specify the logs they want to search.
            </p>
            <p>
                For this project, I used <a href="https://go.dev/" className="intro-link">Go</a> as the programming language, as it has a built in library for
                socket programming, and it is a language that I am familiar with. This project can be built different
                languages such as Rust, C++, C, or Python.
            </p>
            <p>
                I also used <a href="https://www.docker.com/" className="intro-link">Docker</a> to containerize the application, as it allows for easy deployment and scaling of the application.
                This is also necessary for the project to run on multiple machines to test if the query is being sent correctly to each server.
            </p>
            <h2 id="creating-tcp-client-hook">Creating TCP client</h2>
            <hr />
            <p>
                The first step in creating a distributed log query system is to create a TCP client that can
                communicate with each of the machines generating logs. This client will be responsible for sending
                queries to the server, receiving the results, and displaying them to the user. We need to import the
                {" "}<code className="inline-code">net</code> package to create a TCP client in Go.
            </p>
            { <CodeBlock filename="client.go" code={client_tcp} language="go"/>}
            <p>
                In this code, we create a TCP client that connects to the server running on <code className="inline-code">host.docker.internal:8081</code>. 
                We then send a query to the server, and read the response from the server. The response is printed to the console the
                {" "} <code className="inline-code">runGrepOnSpecificFile</code> and <code className="inline-code">runGrepOnAllFiles</code> functions. 
                For the <code className="inline-code">runGrepOnAllFiles</code> function, we will
                need to implement a way to send the query to all of the machines generating logs, and receive the results from each of them.
            </p>
            <h2 id="creating-tcp-server-hook">Creating TCP Server</h2>
            <hr />
            <p>
                The next step is to create a TCP server that can receive queries from the client, and
                send the results back to the client. This server will be responsible for listening for incoming
                connections from the client, and processing the queries that it receives. We need to import the
                {" "}<code className="inline-code">net</code> package to create a TCP server in Go.
            </p>
            <CodeBlock filename="server.go" code={server_tcp} language="go"/>
            <p>
                In this code, we create a TCP server that listens for incoming connections on port 8080. When a client connects, 
                we spawn a new goroutine to handle the connection. The server reads the query from the client, processes it, 
                and sends the results back to the client.
            </p>
            <h2 id="libraries-hooks">Libraries Used</h2>
            <hr />
            <p>
                In this project, I used <a href="https://docs.python.org/3/library/shlex.html" className="intro-link">shlex</a> to parse the query from the client. This library allows us to
                split the query into its individual components, and handle any special characters that may be present in the query. This is important for
                ensuring that the query is processed correctly, and that any special characters are handled properly.
            </p>
            <CodeBlock filename="server.go" code={shlex_go} language={"go"}/>
            <p>
                I also used <a href="https://pkg.go.dev/sync" className="intro-link">sync</a> to manage concurrency in the server. This package provides
                primitives for synchronizing access to shared resources, which is essential for ensuring that the server can handle multiple
                connections simultaneously without running into race conditions. Without this, the server would not be able to handle multiple clients
                connecting at the same time, and would crash or return incorrect results.
            </p>
            <CodeBlock filename="server.go" code={sync_go} language={"go"}/>
            <p>
                In this code, we use a <code className="inline-code">sync.WaitGroup</code> to wait for all goroutines to finish before
                shutting down the server. This ensures that all connections are properly handled, and that the server does not exit
                prematurely. This is important for ensuring that the server can handle multiple connections
                simultaneously, and that all connections are properly handled before the server exits. I also used mutexes to
                synchronize access to shared resources, such as the total line count. This is important for ensuring
                that the total line count is accurate, and that multiple goroutines do not modify it at the same time.
            </p>
            <h2 id="conclusion-and-looking-ahead">Conclusion & Looking Ahead</h2>
            <hr />
            <p>
                In this article, we explored the implementation of a distributed logging system using Go. 
                We covered the key components of the system, including the TCP server, the query processing 
                logic, and the use of goroutines for concurrency. We also discussed the importance of using 
                libraries such as <code className="inline-code">shlex</code> and <code className="inline-code">sync</code> 
                to simplify our code and manage concurrency effectively.
            </p>
            <p>
                Looking ahead, there are several potential improvements and extensions that could be made 
                to this system. For example, we could implement more advanced query parsing and 
                processing capabilities, such as support for regular expressions or more complex 
                query syntax. We could also explore the use of other communication protocols, such 
                as HTTP or gRPC, to enable more flexible and scalable interactions between components.
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
