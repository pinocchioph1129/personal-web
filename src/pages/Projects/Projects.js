import "./Projects.css";
import ProjectCard from "../../components/projectcard/projectcard";

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
            <ProjectCard
              year="2024"
              name="kervijayjavonillo.com"
              detail="The source of this website."
              source="https://github.com/pinocchioph1129/personal-web"
              article="https://github.com/pinocchioph1129/personal-web"
              demo="https://github.com/pinocchioph1129/personal-web"
              className="project-card"
            />
            <ProjectCard
              year="2024"
              name="kervijayjavonillo.com"
              detail="The source of this website."
              source="https://github.com/pinocchioph1129/personal-web"
              className="project-card"
            />
            <ProjectCard
              year="2024"
              name="kervijayjavonillo.com"
              detail="The source of this website."
              source="https://github.com/pinocchioph1129/personal-web"
              className="project-card"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
