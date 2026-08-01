import Hero from "../../components/Hero/Hero";
import KPI from "../../components/KPI/KPI";
import { tools } from "../../data/skills";
import { Link } from "react-router-dom";
import "./Home.css";

const kpis = [
  { icon: "📊", iconBg: "#ede9fe", value: 12, label: "Dashboards Built" },
  { icon: "💼", iconBg: "#dcfce7", value: 8, label: "Business Projects" },
  { icon: "🗃", iconBg: "#fef3c7", value: 25, suffix: "+", label: "Datasets Analyzed" },
  { icon: "🎓", iconBg: "#dbeafe", value: 6, label: "Professional Certifications" },
];

export default function Home() {
  return (
    <div className="page-wrap">
      <Hero />

      <div className="kpi-grid">
        {kpis.map((k) => (
          <KPI key={k.label} {...k} />
        ))}
      </div>

      <div className="sec-title">📌 Featured Dashboard</div>
      <div className="feat-card">
        <div className="feat-top">
          <div className="feat-title">Sales Performance Dashboard</div>
          <span className="feat-badge">Featured</span>
        </div>
        <p className="feat-desc">
          Interactive Power BI dashboard designed to analyze sales performance, monitor KPIs,
          identify revenue trends, and support business decision-making.
        </p>
        <div className="feat-actions">
          <Link to="/projects" className="feat-btn">View Dashboard</Link>
          <Link to="/projects" className="feat-btn feat-btn-ghost">Case Study</Link>
        </div>
      </div>

      <div className="sec-title">🛠 Analytics Tools</div>
      <div className="tools-grid">
        {tools.map((t) => (
          <div className="tool-chip" key={t.name}>
            <div className="tool-ico">{t.icon}</div>
            <div className="tool-name">{t.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
