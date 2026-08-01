import "./About.css";

export default function About() {
  return (
    <div className="page-wrap">
      <div className="about-hero">
        <h2>About Me</h2>
        <p>
          I am a Data Analyst with a strong passion for Business Intelligence, Data
          Visualization, and Analytics. I enjoy transforming complex datasets into clear
          and actionable insights using Power BI, SQL, Excel, and Python. I continuously
          improve my analytical skills by building real-world projects and learning modern
          BI technologies.
        </p>
      </div>

      <div className="card edu-card">
        <div className="edu-top">
          <div className="edu-degree">Bachelor's Degree in Artificial Intelligence</div>
          <div className="edu-yr">Expected 2027</div>
        </div>
        <div className="edu-school">Faculty of Computers and Artificial Intelligence</div>
      </div>
    </div>
  );
}
