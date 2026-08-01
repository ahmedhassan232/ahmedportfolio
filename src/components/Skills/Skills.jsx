import { useEffect, useRef, useState } from "react";
import "./Skills.css";

export function SkillBar({ name, level }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setWidth(level);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (el) io.observe(el);
    return () => io.disconnect();
  }, [level]);

  return (
    <div className="sk-row" ref={ref}>
      <div className="sk-top"><span>{name}</span><span>{level}%</span></div>
      <div className="sk-bar"><div className="sk-fill" style={{ width: `${width}%` }} /></div>
    </div>
  );
}

export function SoftTag({ children }) {
  return <span className="soft-tag">{children}</span>;
}
