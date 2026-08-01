import { NavLink } from "react-router-dom";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home", icon: "🏠" },
  { to: "/about", label: "About", icon: "👤" },
  { to: "/skills", label: "Skills", icon: "🛠" },
  { to: "/projects", label: "Projects", icon: "📁" },
  { to: "/dashboard", label: "Dashboard", icon: "📈" },
  { to: "/certifications", label: "Certifications", icon: "🎓" },
  { to: "/contact", label: "Contact", icon: "✉️" },
];

export default function Navbar() {
  return (
    <nav className="side-nav">
      {links.map((l) => (
        <NavLink
          key={l.to}
          to={l.to}
          end={l.to === "/"}
          className={({ isActive }) => "sn-item" + (isActive ? " active" : "")}
        >
          <span className="sn-icon">{l.icon}</span>
          <span className="sn-label">{l.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
