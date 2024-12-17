import React from "react";
import { projects } from "../utils/data";

function Projects() {
  return (
    <section className="my-5">
      <h2>My Projects</h2>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
