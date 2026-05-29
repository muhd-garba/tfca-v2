"use client";
import Image from "next/image";
import Link from "next/link";
import { COMPLIANCE_POINTS } from "@/lib/data";

const badges = [
  { icon: "🏛️", code: "UCP 600", full: "Uniform Customs and Practice for Documentary Credits", desc: "The primary ICC standard governing Letters of Credit worldwide. All TFCA LCs are issued under UCP 600." },
  { icon: "📜", code: "URDG 758", full: "Uniform Rules for Demand Guarantees", desc: "The ICC standard for demand guarantees, including bank guarantees and performance bonds." },
  { icon: "🔐", code: "ISP98", full: "International Standby Practices", desc: "Governs the issuance and handling of standby letters of credit and similar instruments." },
  { icon: "✅", code: "KYC/AML", full: "Know Your Customer / Anti-Money Laundering", desc: "Every client and transaction undergoes thorough KYC and AML screening before proceeding." },
];

export default function CompliancePage() {
  return (
    <>
      <section style={{ padding: "140px 5% 80px", background: "linear-gradient(135deg, #050D1A 0%, #0D1F3C 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1800&q=80" alt="Compliance" fill style={{ objectFit: "cover", opacity: 0.06 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(5,13,26,0.95) 0%, rgba(13,31,60,0.9) 100%)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: "0.62rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ width: "30px", height: "1px", background: "#C9A84C", display: "inline-block" }} /> Our Standards
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, lineHeight: 1.1, maxWidth: "700px" }}>
            Compliance & <span style={{ color: "#C9A84C" }}>Trust Statement</span>
          </h1>
          <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.9, maxWidth: "560px", marginTop: "20px", fontWeight: 300 }}>
            TFCA operates under a strict governance framework that prioritizes transparency, due diligence, and regulatory adherence in every transaction.
          </p>
        </div>
      </section>

      <section style={{ padding: "100px 5%", background: "#0D1F3C" }}>
        {/* Standards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", marginBottom: "70px" }} className="comp-grid">
          {badges.map((b) => (
            <div key={b.code}
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "4px", padding: "32px", transition: "all 0.3s", cursor: "default" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.05)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)"; }}
            >
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ fontSize: "1.8rem", flexShrink: 0 }}>{b.icon}</div>
                <div>
                  <div style={{ fontSize: "1rem", fontWeight: 700, color: "#C9A84C", letterSpacing: "0.05em", marginBottom: "4px" }}>{b.code}</div>
                  <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", marginBottom: "10px" }}>{b.full}</div>
                  <p style={{ fontSize: "0.76rem", color: "#8899AA", lineHeight: 1.8, fontWeight: 300 }}>{b.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:768px){.comp-grid{grid-template-columns:1fr !important;}}`}</style>

        {/* Governance Framework */}
        <div style={{ marginBottom: "60px" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "36px" }}>
            Our Governance <span style={{ color: "#C9A84C" }}>Framework</span>
          </h2>
          {COMPLIANCE_POINTS.map((p, i) => (
            <div key={p.title} style={{ padding: "28px 0", borderBottom: i < COMPLIANCE_POINTS.length - 1 ? "1px solid rgba(201,168,76,0.12)" : "none", display: "flex", gap: "20px" }}>
              <div style={{ width: "48px", height: "48px", flexShrink: 0, background: "rgba(201,168,76,0.1)", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>{p.icon}</div>
              <div>
                <strong style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, marginBottom: "6px" }}>{p.title}</strong>
                <span style={{ fontSize: "0.78rem", color: "#8899AA", lineHeight: 1.8, fontWeight: 300 }}>{p.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Image + CTA */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }} className="comp-cta-grid">
          <div style={{ borderRadius: "4px", overflow: "hidden", position: "relative", height: "280px" }}>
            <Image src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80" alt="Compliance Banking" fill style={{ objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(13,31,60,0.6) 0%, rgba(13,31,60,0.2) 100%)" }} />
            <div style={{ position: "absolute", bottom: "24px", left: "24px" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 600 }}>Every Transaction.</div>
              <div style={{ color: "#C9A84C", fontSize: "1.3rem", fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>Verifiable. Compliant. Trusted.</div>
            </div>
          </div>
          <div style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "4px", padding: "36px" }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", marginBottom: "16px" }}>
              Our Commitment to <span style={{ color: "#C9A84C" }}>You</span>
            </h3>
            <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.9, fontWeight: 300, marginBottom: "24px" }}>
              By maintaining rigorous internal controls and external partnerships, TFCA ensures that every instrument we facilitate is verifiable and compliant with global banking standards.
            </p>
            <Link href="/contact" style={{ display: "inline-block", background: "linear-gradient(135deg, #C9A84C, #A0792E)", color: "#0D1F3C", padding: "13px 28px", borderRadius: "2px", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none" }}>
              Start Your Enquiry →
            </Link>
          </div>
        </div>
        <style>{`@media(max-width:1024px){.comp-cta-grid{grid-template-columns:1fr !important;}}`}</style>
      </section>
    </>
  );
}
