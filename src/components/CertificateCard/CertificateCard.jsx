import "./CertificateCard.css";

export default function CertificateCard({ cert }) {
  return (
    <div className="cert-card">
      <div className="cert-ico">{cert.icon}</div>
      <div className="cert-name">{cert.name}</div>
      <div className="cert-iss">{cert.issuer}</div>
    </div>
  );
}
