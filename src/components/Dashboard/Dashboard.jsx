import KPI from "../KPI/KPI";
import Timeline from "../Timeline/Timeline";
import { technicalSkills } from "../../data/skills";
import "./Dashboard.css";

const kpis = [
  { icon: "📊", iconBg: "#ede9fe", value: 12, label: "Dashboards Built" },
  { icon: "💼", iconBg: "#dcfce7", value: 8, label: "Business Projects" },
  { icon: "🗃", iconBg: "#fef3c7", value: 25, suffix: "+", label: "Datasets Analyzed" },
  { icon: "🎓", iconBg: "#dbeafe", value: 6, label: "Professional Certifications" },
];

export default function Dashboard() {
  return (
    <div>
      <div className="kpi-grid">
        {kpis.map((k) => (
          <KPI key={k.label} {...k} />
        ))}
      </div>

      <div className="chart-box card">
        <div className="sec-title" style={{ marginBottom: "0.8rem" }}>📊 Skills Distribution</div>
        <div className="bar-chart">
          {technicalSkills.slice(0, 6).map((s, i) => (
            <div className="bar-col" key={s.name}>
              <div className="bar-track">
                <div
                  className={"bar " + (i % 3 === 1 ? "green" : i % 3 === 2 ? "orange" : "")}
                  style={{ height: `${s.level}%` }}
                  data-h={s.level}
                />
              </div>
              <div className="bar-lbl">{s.name}</div>
            </div>
          ))}
        </div>
      </div>

      <Timeline />
    </div>
  );
}
