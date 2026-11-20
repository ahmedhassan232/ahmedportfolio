import { useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projects from "../../data/projects";
import "./Projects.css";

const filters = [
  { key: "all", label: "All" },
  { key: "powerbi", label: "Power BI" },
  { key: "python", label: "Python" },
  { key: "web", label: "Web Apps" },
];

export default function Projects() {
  const [active, setActive] = useState("all");
  const shown = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="page-wrap">
      <div className="filt-row">
        {filters.map((f) => (
          <div
            key={f.key}
            className={"filt" + (active === f.key ? " active" : "")}
            onClick={() => setActive(f.key)}
          >
            {f.label}
          </div>
        ))}
      </div>
      <div className="proj-grid">
        {shown.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}
