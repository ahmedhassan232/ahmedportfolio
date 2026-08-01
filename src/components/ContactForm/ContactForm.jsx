import { useState } from "react";
import "./ContactForm.css";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name";
    if (!EMAIL_RE.test(form.email)) next.email = "Please enter a valid email";
    if (!form.message.trim()) next.message = "Please enter a message";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    // Hook this up to your email service / API of choice.
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 800);
  }

  return (
    <form className="form-box" onSubmit={handleSubmit}>
      <div className="fg">
        <label>Name</label>
        <input name="name" value={form.name} onChange={handleChange} type="text" />
        {errors.name && <div className="err-msg">{errors.name}</div>}
      </div>
      <div className="fg">
        <label>Email</label>
        <input name="email" value={form.email} onChange={handleChange} type="email" />
        {errors.email && <div className="err-msg">{errors.email}</div>}
      </div>
      <div className="fg">
        <label>Message</label>
        <textarea name="message" value={form.message} onChange={handleChange} />
        {errors.message && <div className="err-msg">{errors.message}</div>}
      </div>
      <button className="btn btn-primary" type="submit">
        {status === "sending" ? "Sending..." : status === "sent" ? "Sent!" : "Send Message"}
      </button>
    </form>
  );
}
