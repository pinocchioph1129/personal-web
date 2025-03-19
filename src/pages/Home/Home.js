import "./Home.css";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import PhotoChanger from "../../utilities/photochange/photochanger.js";
import CircleText from "../../utilities/circletext/CircleText";
import ProjectCard from "../../components/projectcard/projectcard";
import projectData from "../../components/projectcard/projectdata";
const photos = [
  "/assets/pfp/100p.png",
  "/assets/pfp/75p.png",
  "/assets/pfp/50p.png",
  "/assets/pfp/25p.png",
  "/assets/pfp/8p.png",
  "/assets/pfp/1p.png",
];

export default function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="intro">
          <div className="intro-info">
            <h1>Hey, I am Kervi!</h1>
            <p>
              I am a software developer passionate about building open-source{" "}
              <Link to="/Notes" className="intro-link">
                projects
              </Link>{" "}
              and sharing my journey through writing notes.
            </p>
            <p>
              On this site, you'll find a collection of{" "}
              <Link to="/Articles" className="intro-link">
                articles
              </Link>{" "}
              that I have read,{" "}
              <Link to="/Notes" className="intro-link">
                personal notes
              </Link>{" "}
              that dive into my thoughts and experiences and a bit about
              background and interests. Whether you're here to learn, explore,
              or get to know me better, I hope you find something valuable.{" "}
              <Icon icon="unjs:unstorage" width="15" height="15" />{" "}
            </p>
          </div>
          <div className="image-first">
            <PhotoChanger images={photos} intervalTime={200} />
            <span className="image-first-title">fig. 1 picture of me</span>
          </div>
        </div>
        <div className="circle">
          <div className="circle-shape"></div>
          <CircleText text="Hover over photos to reveal " radius={45} />
        </div>
      </div>
      <div className="home-content">
        <div className="home-notes-container">
          <div className="home-title">
            <h2>Notes</h2>
            <Link to="/Notes" className="home-dir">
              All Notes
            </Link>
          </div>
          <hr />
          <p>
            Personal notes about life, music, projects, and everything else.
          </p>
          <div className="home-notes-links">
            <Link to="./classes" className="notes-page">
              <div className="notes-page-name">2024-2024 Class Schedule</div>
              <div className="notes-page-date-new">December 26</div>
            </Link>
            <Link to="./firstnote" className="notes-page">
              <div className="notes-page-name">My Very First Note</div>
              <div className="notes-page-date">December 10</div>
            </Link>
          </div>
        </div>
        <div class="home-articles-container">
          <div className="home-title">
            <h2>Articles</h2>
            <Link to="/Articles" className="home-dir">
              All Articles
            </Link>
          </div>
          <hr />
          <p>Guides, references, and tutorials.</p>
          <div className="home-articles-links">
            <Link to="./classes" className="notes-page">
              <div className="articles-page-name">
                CS 415: Infinite Matrix using Unreal Engine 5
              </div>
              <div className="articles-page-date-new">March 15</div>
            </Link>
          </div>
        </div>
        <div class="home-projects-container">
          <div className="home-title">
            <h2>Projects</h2>
            <Link to="/Projects" className="home-dir">
              All Projects
            </Link>
          </div>
          <hr />
          <p>Projects that I have worked over the years.</p>
          <div className="home-projects-tabs">
            {projectData.slice(0, 4).map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
                className="home-projects-card"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
