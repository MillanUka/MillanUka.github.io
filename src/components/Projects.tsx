import React from "react";
import { splitArray } from "../utils";
import { relative } from "path";
const spotlightProjects: Project[] = require("./spotlight_project_data.json");
const projects: Project[] = require("./project_data.json");

const spotlightProjectsArr = splitArray(spotlightProjects, 4);
const projectsArr = splitArray(projects, 4);
function Projects() {
  return (
    <div className="container">
      <h2>My Projects!</h2>
      <h3>Spotlight</h3>
      {spotlightProjectsArr.map((projects: Project[]) => {
        return <div className="row">{renderProjects(projects)}</div>;
      })}
      <h3>Other Projects</h3>
      {projectsArr.map((projects: Project[]) => {
        return <div className="row">{renderProjects(projects)}</div>;
      })}
    </div>
  );
}

type Project = {
  name: string;
  desc: string;
  thumbnail: string;
  github_link: string;
  hosted_link: string;
  tags: string[];
};

function renderProjects(projects: Project[]) {
  return (
    <div>
      {projects.map((project: Project) => {
        return (
          <div className="column" key={project.name}>
            <div className="card">
              <img
                src={project.thumbnail}
                alt={project.name}
                style={{ width: "100%" }}
              ></img>
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
            </div>
            <div className="group">
              {project.github_link !== null && (
                <a href={project.github_link} target="_blank">
                  View on Github
                </a>
              )}
              <br />
              {project.hosted_link !== null && (
                <a href={project.hosted_link} target="_blank">
                  Try it out!
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
