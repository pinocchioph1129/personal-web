import "./projectcard.css";
import React from "react";
import { Icon } from "@iconify/react";

function ProjectCard({ year, name, detail, article, demo, source }) {
  return (
    <div className="project-card">
      <div className="project-card-year">
        <p>{year}</p>
      </div>
      <div className="project-card-name">
        <p>
          <a href={source} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </p>
      </div>

      <div className="project-card-detail">
        <p>{detail}</p>
      </div>

      <div className="project-card-tabs">
        <div className="project-card-tabs">
          {article && (
            <div className="project-card-tab">
              <a href={article} target="_blank" rel="noopener noreferrer">
                Article
                <Icon icon="marketeq:link-alt-2" width="15" height="15" />{" "}
              </a>
            </div>
          )}
          {demo && (
            <div className="project-card-tab">
              <a href={demo} target="_blank" rel="noopener noreferrer">
                Demo
                <Icon icon="marketeq:link-alt-2" width="15" height="15" />{" "}
              </a>
            </div>
          )}
          {source && (
            <div className="project-card-tab">
              <a href={source} target="_blank" rel="noopener noreferrer">
                Source
                <Icon icon="marketeq:link-alt-2" width="15" height="15" />{" "}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
