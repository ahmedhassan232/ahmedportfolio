import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="page-wrap">
      <div className="about-hero" style={{ marginBottom: "1.25rem" }}>
        <h2>Let's Work Together</h2>
        <p>
          I'm always interested in new opportunities, freelance projects, and
          collaborations in Data Analytics and Business Intelligence.
        </p>
      </div>

      <div className="contact-grid">
        <div>
          <div className="ct-item">
            <div className="ct-icon">📧</div>
            <div>
              <div className="ct-lbl">Email</div>
              <a className="ct-link" href="mailto:ghghghb083@gmail.com">ghghghb083@gmail.com</a>
            </div>
          </div>
          <div className="ct-item">
            <div className="ct-icon">📱</div>
            <div>
              <div className="ct-lbl">Phone</div>
              <div className="ct-val">01127490096</div>
            </div>
          </div>
          <div className="ct-item">
            <div className="ct-icon">💼</div>
            <div>
              <div className="ct-lbl">LinkedIn</div>
              <a className="ct-link" href="https://www.linkedin.com/in/ahmed-hassan-05085536a" target="_blank" rel="noreferrer">
                linkedin.com/in/ahmed-hassan
              </a>
            </div>
          </div>
          <div className="ct-item">
            <div className="ct-icon">💬</div>
            <div>
              <div className="ct-lbl">WhatsApp</div>
              <a className="ct-link" href="https://wa.me/201127490096" target="_blank" rel="noreferrer">01127490096</a>
            </div>
          </div>
          <div className="ct-item">
            <div className="ct-icon">📍</div>
            <div>
              <div className="ct-lbl">Location</div>
              <div className="ct-val">Egypt</div>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>

      <Footer />
    </div>
  );
}
