import { useEffect, useRef, useState } from "react";
import "./KPI.css";

export default function KPI({ icon, iconBg, value, suffix = "", label }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const target = parseInt(value, 10);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const duration = 1200;
            const start = performance.now();
            function tick(now) {
              const p = Math.min((now - start) / duration, 1);
              setDisplay(Math.round(p * target));
              if (p < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );
    if (el) io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div className="kpi-card" ref={ref}>
      <div className="kpi-icon" style={{ background: iconBg }}>{icon}</div>
      <div className="kpi-n">{display}{suffix}</div>
      <div className="kpi-l">{label}</div>
    </div>
  );
}
