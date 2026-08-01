import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import SkillsPage from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import DashboardPage from "./pages/Dashboard/Dashboard";
import Certifications from "./pages/Certifications/Certifications";
import Contact from "./pages/Contact/Contact";

export default function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Navbar />
    </div>
  );
}
