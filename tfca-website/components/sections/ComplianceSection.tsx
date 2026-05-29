"use client";
import Image from "next/image";
import Link from "next/link";
import { COMPLIANCE_POINTS } from "@/lib/data";

const badges = [
  { icon: "🏛️", title: "UCP 600", desc: "ICC rules governing Letters of Credit worldwide" },
  { icon: "📜", title: "URDG 758", desc: "ICC rules for demand guarantees and bank instruments" },
  { icon: "🔐", title: "ISP98", desc: "International Standby Practices for credit instruments" },
  { icon: "✅", title: "KYC / AML", desc: "Full compliance screening on every client and transaction" },
];

export default function ComplianceSection() {
  return (
    <section style={{ background: "linear-gradient(135deg, #050D1A 0%, #0D1F3C 100%)", padding: "100px 5%", position: "relative", overflow: "hidden" }}>
      {/* Bg text */}
      <div style={{ position: "absolute", right: "-60px", top: "50%", transform: "translateY(-50%) rotate(90deg)", fontFamily: "var(--font-cormorant), serif", fontSize: "9rem", fontWeight: 700, color: "rgba(201,168,76,0.025)", pointerEvents: "none", letterSpacing: "0.1em", whiteSpace: "nowrap" }}>
        COMPLIANCE
      </div>

      {/* Header */}
      <div style={{ marginBottom: "60px" }}>
        <div style={{ fontSize: "0.62rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ width: "30px", height: "1px", background: "#C9A84C", display: "inline-block" }} />
          Our Standards
        </div>
        <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2.2rem, 3.8vw, 3.2rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: "16px", color: "white" }}>
          Compliance & <span style={{ color: "#C9A84C" }}>Trust Statement</span>
        </h2>
        <p style={{ fontSize: "0.98rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.9, maxWidth: "560px", fontWeight: 400 }}>
          TFCA operates under a strict governance framework that prioritizes transparency, due diligence, and regulatory adherence in every transaction.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }} className="compliance-grid">
        {/* Points */}
        <div>
          {COMPLIANCE_POINTS.map((p, i) => (
            <div key={p.title} style={{
              padding: "24px 0", borderBottom: i < COMPLIANCE_POINTS.length - 1 ? "1px solid rgba(201,168,76,0.15)" : "none",
              display: "flex", gap: "20px"
            }}>
              <div style={{ width: "42px", height: "42px", flexShrink: 0, background: "rgba(201,168,76,0.1)", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>
                {p.icon}
              </div>
              <div>
                <strong style={{ display: "block", fontSize: "0.94rem", fontWeight: 700, marginBottom: "5px", color: "white" }}>{p.title}</strong>
                <span style={{ fontSize: "0.82rem", color: "#8899AA", lineHeight: 1.8, fontWeight: 400 }}>{p.desc}</span>
              </div>
            </div>
          ))}
          <Link href="/compliance" style={{
            display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "28px",
            background: "linear-gradient(135deg, #C9A84C, #A0792E)", color: "#0D1F3C",
            padding: "13px 28px", borderRadius: "2px", fontSize: "0.7rem", fontWeight: 700,
            letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none"
          }}>
            Full Compliance Details →
          </Link>
        </div>

        {/* Badges + image */}
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" }}>
            {badges.map((b) => (
              <div key={b.title} style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.18)",
                borderRadius: "4px", padding: "28px 22px", textAlign: "center",
                transition: "all 0.3s", cursor: "default"
              }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.06)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.18)"; }}
              >
                <span style={{ fontSize: "1.8rem", display: "block", marginBottom: "10px" }}>{b.icon}</span>
                <h4 style={{ fontSize: "0.8rem", fontWeight: 700, color: "#C9A84C", marginBottom: "6px", letterSpacing: "0.08em" }}>{b.title}</h4>
                <p style={{ fontSize: "0.66rem", color: "#8899AA", lineHeight: 1.6 }}>{b.desc}</p>
              </div>
            ))}
          </div>
          {/* Photo */}
          <div style={{ borderRadius: "4px", overflow: "hidden", position: "relative", height: "200px" }}>
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80"
              alt="Compliance and Documentation"
              fill style={{ objectFit: "cover" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(13,31,60,0.7) 0%, rgba(13,31,60,0.3) 100%)" }} />
            <div style={{ position: "absolute", bottom: "20px", left: "20px" }}>
              <div style={{ fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "4px" }}>Verified & Trusted</div>
              <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.2rem", fontWeight: 600 }}>Every Transaction. Every Time.</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .compliance-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
      `}</style>
    </section>
  );
}
