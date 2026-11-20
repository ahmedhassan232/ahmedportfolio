import Hero from "../../components/Hero/Hero";
import KPI from "../../components/KPI/KPI";
import { tools } from "../../data/skills";
import { Link } from "react-router-dom";
import "./Home.css";

const kpis = [
  { icon: "📊", iconBg: "#ede9fe", value: 12, label: "Dashboards Built" },
  { icon: "💼", iconBg: "#dcfce7", value: 10, label: "Business Projects" },
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

      <div className="sec-title">🚀 Featured Projects</div>
      <div className="featured-projects">
        <article className="feat-card">
          <div className="feat-top">
            <div className="feat-title">Portify AI</div>
            <span className="feat-badge">AI · SaaS</span>
          </div>
          <p className="feat-desc">
            Turn a PDF or DOCX CV into a polished personal portfolio with AI-assisted analysis
            and professional content generation.
          </p>
          <div className="feat-actions">
            <a href="https://portify-bliu6w3e7-ahmedhassan232s-projects.vercel.app" target="_blank" rel="noreferrer" className="feat-btn">Live Demo ↗</a>
            <a href="https://github.com/ahmedhassan232/portify-ai" target="_blank" rel="noreferrer" className="feat-btn feat-btn-ghost">Source Code</a>
          </div>
        </article>
        <article className="feat-card feat-card-stockflow">
          <div className="feat-top">
            <div className="feat-title">StockFlow</div>
            <span className="feat-badge">Inventory · SaaS</span>
          </div>
          <p className="feat-desc">
            A business platform for managing inventory, warehouses, and sales operations,
            with multi-company support and Arabic/English experience.
          </p>
          <div className="feat-actions">
            <a href="https://stockflow-murex-tau.vercel.app" target="_blank" rel="noreferrer" className="feat-btn">Live Demo ↗</a>
            <a href="https://github.com/ahmedhassan232/stockflow" target="_blank" rel="noreferrer" className="feat-btn feat-btn-ghost">Source Code</a>
          </div>
        </article>
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
