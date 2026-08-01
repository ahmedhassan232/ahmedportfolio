import { SkillBar, SoftTag } from "../../components/Skills/Skills";
import { technicalSkills, softSkills } from "../../data/skills";

export default function SkillsPage() {
  return (
    <div className="page-wrap">
      <div className="card" style={{ marginBottom: "1rem" }}>
        <div className="sec-title">Technical Skills</div>
        {technicalSkills.map((s) => (
          <SkillBar key={s.name} name={s.name} level={s.level} />
        ))}
      </div>
      <div className="card">
        <div className="sec-title">Soft Skills</div>
        {softSkills.map((s) => (
          <SoftTag key={s}>{s}</SoftTag>
        ))}
      </div>
    </div>
  );
}
