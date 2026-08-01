import "./Timeline.css";

const points = [
  { year: "2024", x: 0, y: 80 },
  { year: "2025", x: 100, y: 58 },
  { year: "2026", x: 200, y: 30 },
  { year: "2027", x: 300, y: 10 },
];

export default function Timeline() {
  const linePoints = points.map((p) => `${p.x},${p.y}`).join(" ");
  const areaPoints = `${linePoints} 300,90 0,90`;

  return (
    <div className="card timeline-box">
      <div className="sec-title" style={{ marginBottom: "0.5rem" }}>📈 Dashboard Development Timeline</div>
      <svg viewBox="0 0 300 90" preserveAspectRatio="none" className="timeline-svg">
        <polyline points={areaPoints} fill="#dbeafe" opacity="0.6" />
        <polyline points={linePoints} fill="none" stroke="#2563EB" strokeWidth="2.5" />
        {points.map((p) => (
          <circle key={p.year} cx={p.x} cy={p.y} r="3.5" fill="#2563EB" />
        ))}
      </svg>
      <div className="timeline-labels">
        {points.map((p) => (
          <span key={p.year}>{p.year}</span>
        ))}
      </div>
      <p className="timeline-caption">Shows how the number of completed projects has grown over time.</p>
    </div>
  );
}
