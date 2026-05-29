"use client";
import Link from "next/link";
import { SERVICES } from "@/lib/data";

type Service = typeof SERVICES[0];

export default function ServicePageClient({ svc, others }: { svc: Service; others: Service[] }) {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "140px 5% 80px", background: "linear-gradient(135deg, #050D1A 0%, #0D1F3C 100%)", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <Link href="/services" style={{ fontSize: "0.68rem", letterSpacing: "0.12em", color: "#C9A84C", textDecoration: "none", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "24px" }}>
            ← All Services
          </Link>
          <div style={{ display: "flex", gap: "20px", alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ width: "72px", height: "72px", background: "rgba(201,168,76,0.12)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", flexShrink: 0 }}>
              {svc.icon}
            </div>
            <div>
              <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 600, lineHeight: 1.1, marginBottom: "12px" }}>
                {svc.title}
              </h1>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {svc.standards.map((s) => (
                  <span key={s} style={{ fontSize: "0.62rem", letterSpacing: "0.1em", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.35)", padding: "4px 12px", borderRadius: "2px" }}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: "80px 5%", background: "#0D1F3C" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "60px", alignItems: "start" }} className="svc-layout">
          <div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 600, color: "#C9A84C", marginBottom: "20px" }}>Overview</h2>
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.75)", lineHeight: 2, fontWeight: 300, marginBottom: "32px" }}>{svc.description}</p>
            <div style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "4px", padding: "28px" }}>
              <h3 style={{ fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "16px" }}>Compliance Standards</h3>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {svc.standards.map((s) => (
                  <div key={s} style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)", padding: "8px 16px", borderRadius: "2px", fontSize: "0.78rem", color: "#C9A84C", fontWeight: 600 }}>{s}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "4px", padding: "28px" }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", marginBottom: "12px" }}>Request This Service</h3>
              <p style={{ fontSize: "0.73rem", color: "#8899AA", lineHeight: 1.7, marginBottom: "20px" }}>
                Speak with a TFCA specialist about your {svc.title} requirements.
              </p>
              <Link href="/contact" style={{ display: "block", background: "linear-gradient(135deg, #C9A84C, #A0792E)", color: "#0D1F3C", padding: "13px", borderRadius: "2px", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", textAlign: "center" }}>
                Get in Touch →
              </Link>
            </div>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.18)", borderRadius: "4px", padding: "24px" }}>
              <h4 style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#8899AA", marginBottom: "14px" }}>Our Commitment</h4>
              {["Licensed & Regulated Banks", "ICC Compliant", "KYC/AML Verified", "Transparent Process", "Global Acceptance"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 0", borderBottom: "1px solid rgba(201,168,76,0.08)", fontSize: "0.74rem", color: "rgba(255,255,255,0.75)" }}>
                  <span style={{ color: "#C9A84C", fontWeight: 700 }}>✓</span> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:1024px){.svc-layout{grid-template-columns:1fr !important;}}`}</style>
      </section>

      {/* Other Services */}
      <section style={{ padding: "80px 5%", background: "#162C50" }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 600, marginBottom: "30px" }}>
          Other <span style={{ color: "#C9A84C" }}>Services</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }} className="others-grid">
          {others.map((o) => (
            <Link key={o.slug} href={`/services/${o.slug}`}
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.18)", borderRadius: "4px", padding: "24px", textDecoration: "none", color: "inherit", display: "block", transition: "all 0.3s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.05)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.18)"; }}
            >
              <div style={{ fontSize: "1.3rem", marginBottom: "12px" }}>{o.icon}</div>
              <h3 style={{ fontSize: "0.84rem", fontWeight: 600, marginBottom: "8px" }}>{o.title}</h3>
              <p style={{ fontSize: "0.7rem", color: "#8899AA", lineHeight: 1.7 }}>{o.short}</p>
            </Link>
          ))}
        </div>
        <style>{`@media(max-width:1024px){.others-grid{grid-template-columns:1fr 1fr !important;}}@media(max-width:640px){.others-grid{grid-template-columns:1fr !important;}}`}</style>
      </section>
    </>
  );
}
