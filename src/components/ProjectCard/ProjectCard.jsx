import { useState } from "react";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={"proj-card" + (open ? " open" : "")} onClick={() => setOpen(!open)}>
      <img
        className="proj-image"
        src={project.image}
        alt={`${project.name} project preview`}
        loading="lazy"
      />
      <div className="proj-top">
        <span>{project.name}</span>
      </div>
      <div className="proj-body">
        <span className="proj-cat">{project.badge}</span>
        <div className="proj-name">{project.name}</div>
        <div className="proj-desc">{project.problem}</div>
        <div className="proj-tags">
          {project.tools.map((t) => (
            <span className="ptag" key={t}>{t}</span>
          ))}
        </div>
        <div className="proj-detail">
          <h5>Dataset</h5>
          <p className="proj-dataset">{project.dataset}</p>
          <h5>Key Insights</h5>
          <ul>
            {project.insights.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <h5>Recommendation</h5>
          <p className="proj-dataset">{project.recommendation}</p>
        </div>
      </div>
    </div>
  );
}
