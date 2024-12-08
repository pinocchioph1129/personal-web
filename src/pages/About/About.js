import "./About.css";
import PhotoChanger from "../../utilities/photochange/photochanger.js";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import PhotoA from "../../assets/about/pfp/100p-p.png";
import PhotoB from "../../assets/about/pfp/75p-p.png";
import PhotoC from "../../assets/about/pfp/50p-p.png";
import PhotoD from "../../assets/about/pfp/25p-p.png";
import PhotoE from "../../assets/about/pfp/8p-p.png";
import PhotoF from "../../assets/about/pfp/1p-p.png";

export default function About() {
  return (
    <div className="about-container">
      <div className="intro">
        <div className="intro-info">
          <h1>About Me</h1>
          <div className="intro-image">
            <PhotoChanger
              images={[PhotoA, PhotoB, PhotoC, PhotoD, PhotoE, PhotoF]}
              intervalTime={200}
            />
            <span className="intro-image-title">
              fig. 2 picture of me at a pumpkin patch
            </span>
          </div>
          <p>
            My name is Kervi Jay Javonillo. Currently, I am a senior at the
            University of Illinois - Urbana-Champaign and studying Computer
            Science and Philosophy. I specialize in networking, distributed
            systems, and security, as well as front-end design and developing. I
            like working out, crocheting, climbing, reading books, and taking a
            walk after I pass all the test cases.
          </p>
          <p>
            Welcome to my little corner of the internet! Here, you will find a
            mix of writing, projects, art, and anything else I feel like
            sharing. You can explore personal{" "}
            <Link to="/Notes" className="intro-link">
              reflections
            </Link>{" "}
            and dive into the{" "}
            <Link to="/Articles" className="intro-link">
              technical articles
            </Link>{" "}
            I've read over the years. Don't forget to check out the{" "}
            <Link to="/Projects" className="intro-link">
              projects
            </Link>{" "}
            page for a showcase of my open-source contributions.
          </p>
          <p>
            This website exists as a space for self-expression and to share what
            I've learned with world. My hope is to inspire others to carve out
            their own creative spaces online, standing firm against growing
            enshittification of the web.
          </p>
        </div>
      </div>
      <div className="contact">
        <h1>Contact</h1>
        <hr />
        <p>Send me a letter to say hi! or connect with my socials.</p>
        <div className="contact-info-preview">
          <a
            href="https://www.linkedin.com/in/kervi-j"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-info-card">
              <div className="contact-info-card-logo">
                <Icon icon="devicon:linkedin" width="25" height="25" />{" "}
              </div>
              <div className="contact-info-card-note">
                <h3>LinkedIn</h3>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/pinocchioph1129"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <div className="contact-info-card">
              <div className="contact-info-card-logo">
                <Icon icon="skill-icons:github-light" width="25" height="25" />{" "}
              </div>
              <div className="contact-info-card-note">
                <h3>Github</h3>
              </div>
            </div>
          </a>
          <a
            href="mailto:kjavo2@illinois.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <div className="contact-info-card">
              <div className="contact-info-card-logo">
                <Icon
                  icon="fluent-emoji-flat:closed-mailbox-with-raised-flag"
                  width="25"
                  height="25"
                />{" "}
              </div>
              <div className="contact-info-card-note">
                <h3>Email</h3>
              </div>
            </div>
          </a>
          <a
            href="https://docs.google.com/document/d/1mUfr3e5Z55ZTe2SSlDUJUquUE3ZO1jmJ/edit?usp=sharing&ouid=117487131264263306172&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <div className="contact-info-card">
              <div className="contact-info-card-logo">
                <Icon icon="unjs:fs-memo" width="25" height="25" />{" "}
              </div>
              <div className="contact-info-card-note">
                <h3>Resume</h3>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="current">
        <h1>What I'm Doing Now</h1>
        <hr />
        <div className="current-container">
          <div className="current-video-container">
            <video
              className="current-video"
              src={`${process.env.PUBLIC_URL}/videos/climbingme.MOV`}
              type="video/mp4"
              width="450"
              height="450"
              loop
              autoPlay
              muted
            >
              Your browser does not support the video tag.
            </video>
            <span className="current-video-title">
              vid. 1 video of me rock climbing at ARC
            </span>
          </div>
          <div className="current-info">
            <h2>Currently</h2>
            <em>December 5th, 2024</em>
            <ul>
              <li>Studying Computer Science and Philosophy at UIUC</li>
              <li>Going to the gym everyday</li>
              <li>Blackouts by Justin Torres</li>
              <li>Working on a game project with Max</li>
              <li>Tweaking this website</li>
            </ul>
            <h2>Routine</h2>
            <a href="https://www.lifehack.org/688549/the-ultimate-workout-routines-for-men#advanced-workout-routine-for-men">
              Link here!
            </a>
            <ul>
              <li>Day 1: Chest & Back Workout</li>
              <li>Day 2: Legs Workout</li>
              <li>Day 3: Shoulders and Arms Workout</li>
              <li>Day 4: Rest</li>
              <li>Day 5: Chest, Shoulders, and Triceps Workout</li>
              <li>Day 6: Back and Biceps Workout</li>
              <li>Day 7: Legs Workout</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tools">
        <div className="tools-container">
          <h1>Development Tools</h1>
          <hr />

          <h2>Software</h2>
          <p>
            This website is made with React and hosted on Github Pages SSG
            framework
          </p>

          <p>
            <strong>Coding</strong>: Visual Studio Code
          </p>
          <p>
            <strong>Theme</strong>: Dark Modern Theme, my favorite theme
          </p>
          <p>
            <strong>Terminal</strong>: Z shell
          </p>
          <p>
            <strong>Notes</strong>: Freenotes and Notion
          </p>

          <h2>Hardware</h2>

          <p>
            <strong>Coding PC</strong>: M1 MacBook Pro 14" 2021, 16 GB RAM,
            Sequoia 15.0
          </p>
          <p>
            <strong>Gaming PC</strong>:
            <ul>
              <li>CPU: AMD Ryzen 5 3600</li>
              <li>GPU: Nvidia GTX 1660ti</li>
              <li>Motherboard: Aorus B-450 wifi</li>
              <li>RAM: Corsair Vengeance 16GB</li>
              <li>Case: NZXT H510</li>
              <li>PSU: Corsair 750W</li>
            </ul>
          </p>

          <p>
            <strong>Gaming Console</strong>: PlayStation 5
          </p>

          <p>
            <strong>Monitor</strong>: Acer - KA272 27" full HD IPS Monitor
          </p>
          <p>
            <strong>Keyboard</strong>: Magic Keyboard with Touch ID and EPOMAKER
            RT65
          </p>
          <p>
            <strong>Tablet</strong>: iPad Pro 12.9" M1 Pro 2021
          </p>
          <p>
            <strong>Headphones</strong>: AirPods Max (Lightning) Space Grey
          </p>
        </div>
      </div>
    </div>
  );
}
