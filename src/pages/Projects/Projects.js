import "./Projects.css";
import ProjectCard from "../../components/projectcard/projectcard";
import projectData from "../../components/projectcard/projectdata";

export default function Projects() {
  return (
    <div className="projects">
      <div className="projects-container">
        <h1>Projects</h1>
        <hr />
        <p>
          Open-source projects I've made over the years, including this website,
          an emulator, and various games, apps, frameworks, and boilerplates.
        </p>

        <div className="projects-tabs">
          <div className="project-tabs-preview">
            {projectData.map((project, index) => (
              <ProjectCard key={index} {...project} className="project-card" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
