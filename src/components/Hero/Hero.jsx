import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.jpg";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero-card">
      <img className="hero-avatar" src={avatar} alt="Ahmed Hassan" />
      <div className="hero-info">
        <h1>Ahmed Hassan</h1>
        <p className="hero-title">Data Analyst | Business Intelligence | Power BI Developer</p>
        <p className="hero-desc">
          Passionate Data Analyst specializing in transforming raw data into meaningful
          business insights through interactive dashboards, SQL analytics, and Python-based
          data analysis. I enjoy solving real-world business problems using data-driven
          solutions and modern visualization techniques.
        </p>
        <div className="hero-actions">
          <button className="btn" style={{ background: "white", color: "var(--blue2)" }}>
            Download Resume
          </button>
          <Link to="/projects" className="btn btn-outline" style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "1.5px solid rgba(255,255,255,0.6)" }}>
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
