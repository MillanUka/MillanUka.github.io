import React from "react";
const projects: Project[] = require("./project_data.json");

function Projects() {
  return (
    <div className="container">
      <h2>My Projects!</h2>
      {renderProjects(projects)}
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
          <div
            className="card"
            key={project.name}
            style={{
              padding: "10px",
              marginBottom: "5px",
              border: "2px solid black",
            }}
          >
            <img
              className="card-img-top"
              src={project.thumbnail}
              alt={project.name}
              style={{ width: "100%" }}
            ></img>

            <div className="card-body">
              <h2 className="card-title">{project.name}</h2>
              <p className="card-text" style={{ fontSize: "22px" }}>
                {project.desc}
              </p>
              {project.github_link !== null && (
                <a
                  href={project.github_link}
                  className="btn btn-primary"
                  style={{ width: "100%", fontSize: "xx-large" }}
                  target="_blank"
                >
                  View on Github
                </a>
              )}
              <br />
              {project.hosted_link !== null && (
                <a
                  href={project.hosted_link}
                  className="btn btn-primary"
                  style={{ width: "100%", fontSize: "xx-large" }}
                  target="_blank"
                >
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
