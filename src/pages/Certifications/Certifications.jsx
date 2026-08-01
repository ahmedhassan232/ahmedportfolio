import CertificateCard from "../../components/CertificateCard/CertificateCard";
import certifications from "../../data/certifications";
import "./Certifications.css";

export default function Certifications() {
  return (
    <div className="page-wrap">
      <div className="cert-grid">
        {certifications.map((c) => (
          <CertificateCard key={c.name} cert={c} />
        ))}
      </div>
    </div>
  );
}
