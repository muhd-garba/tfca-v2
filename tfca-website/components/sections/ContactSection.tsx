"use client";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", company: "", email: "", phone: "", service: "Letters of Credit (LC)", amount: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" style={{ background: "#0D1F3C", padding: "100px 5%" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "70px", alignItems: "start" }} className="contact-grid">

        {/* Left column - Contact Info */}
        <div>
          <div style={{ fontSize: "0.68rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ width: "30px", height: "1px", background: "#C9A84C", display: "inline-block" }} />
            Get In Touch
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 3.8vw, 3rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: "16px", color: "white" }}>
            Contact <span style={{ color: "#C9A84C" }}>Us</span>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.9, fontWeight: 400, marginBottom: "40px" }}>
            Ready to secure your trade transactions? Our team of experts is here to help you find the right financial instrument.
          </p>

          {/* Contact details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginBottom: "40px" }}>
            {[
              { icon: "📧", label: "Email", value: "info@tfcafricanregion.com", link: "mailto:info@tfcafricanregion.com" },
              { icon: "📍", label: "Address", value: "No. 25 Hotoro, Kano State, Nigeria", link: null },
              { icon: "📋", label: "Registration", value: "RC No. 8538180", link: null },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ width: "48px", height: "48px", background: "rgba(201,168,76,0.1)", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "5px", fontWeight: 600 }}>{item.label}</div>
                  {item.link ? (
                    <a href={item.link} style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", textDecoration: "none", fontWeight: 500 }}>{item.value}</a>
                  ) : (
                    <div style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.5, fontWeight: 500 }}>{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp buttons */}
          <div style={{ marginBottom: "36px" }}>
            <div style={{ fontSize: "0.76rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8899AA", marginBottom: "14px", fontWeight: 500 }}>WhatsApp Us Directly</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href="https://wa.me/2349077504605" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "12px", background: "#25D366", color: "white", padding: "14px 22px", borderRadius: "4px", textDecoration: "none", fontSize: "0.95rem", fontWeight: 700, transition: "all 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#20b958"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#25D366"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                +234 907 750 4605
              </a>
              <a href="https://wa.me/2348062250170" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "12px", background: "#25D366", color: "white", padding: "14px 22px", borderRadius: "4px", textDecoration: "none", fontSize: "0.95rem", fontWeight: 700, transition: "all 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#20b958"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#25D366"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                +234 806 225 0170
              </a>
            </div>
          </div>

          {/* Compliance note */}
          <div style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "4px", padding: "20px" }}>
            <div style={{ fontSize: "0.76rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "8px", fontWeight: 600 }}>Compliance Note</div>
            <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.8, fontWeight: 400 }}>
              All enquiries are subject to KYC/AML verification. Transactions processed under UCP 600, URDG 758, and ISP98.
            </p>
          </div>
        </div>

        {/* Right column - Form */}
        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "6px", padding: "48px 40px" }}>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 600, marginBottom: "8px" }}>Submit Your <span style={{ color: "#C9A84C" }}>Requirements</span></h3>
          <p style={{ fontSize: "0.85rem", color: "#8899AA", marginBottom: "32px", lineHeight: 1.7 }}>Fill in the form below and our specialist will get back to you within 24 hours.</p>

          {submitted ? (
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <div style={{ fontSize: "3rem", marginBottom: "20px" }}>✅</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", color: "#C9A84C", marginBottom: "10px" }}>Enquiry Sent!</h3>
              <p style={{ fontSize: "0.85rem", color: "#8899AA" }}>Our team will respond within 24 hours.</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                <div>
                  <label style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#8899AA", display: "block", marginBottom: "8px" }}>Full Name *</label>
                  <input className="form-input" type="text" placeholder="Your full name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div>
                  <label style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#8899AA", display: "block", marginBottom: "8px" }}>Company Name</label>
                  <input className="form-input" type="text" placeholder="Your company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                <div>
                  <label style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#8899AA", display: "block", marginBottom: "8px" }}>Email Address *</label>
                  <input className="form-input" type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
                <div>
                  <label style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#8899AA", display: "block", marginBottom: "8px" }}>Phone / WhatsApp</label>
                  <input className="form-input" type="tel" placeholder="+234..." value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                <div>
                  <label style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#8899AA", display: "block", marginBottom: "8px" }}>Service Required *</label>
                  <select className="form-input" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}>
                    {["Letters of Credit (LC)", "Standby Letter of Credit (SBLC)", "Bank Guarantees (BG)", "Proof of Funds (POF)", "Blocked Funds", "Performance Bond", "Bank Comfort Letters", "Ready, Willing & Able (RWA)", "Project Funding", "Advance Payment Bond", "Bid Bond", "Other"].map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#8899AA", display: "block", marginBottom: "8px" }}>Transaction Amount (USD)</label>
                  <input className="form-input" type="text" placeholder="e.g. $500,000" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />
                </div>
              </div>
              <div>
                <label style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#8899AA", display: "block", marginBottom: "8px" }}>Message / Details *</label>
                <textarea className="form-input" rows={5} placeholder="Please describe your trade finance requirement in detail..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} style={{ resize: "vertical" }} />
              </div>
              <button onClick={handleSubmit}
                style={{ background: "linear-gradient(135deg, #C9A84C, #A0792E)", color: "#0D1F3C", border: "none", padding: "16px", borderRadius: "2px", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", cursor: "pointer", width: "100%", fontFamily: "inherit", transition: "all 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(201,168,76,0.3)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                Submit Requirement →
              </button>
              <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", textAlign: "center", lineHeight: 1.6 }}>
                All submissions are confidential and subject to KYC/AML compliance verification.
              </p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media(max-width:1024px){.contact-grid{grid-template-columns:1fr !important; gap:50px !important;}}
        @media(max-width:640px){.form-row{grid-template-columns:1fr !important;}}
      `}</style>
    </section>
  );
}
