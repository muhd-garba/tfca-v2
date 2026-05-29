"use client";
import Image from "next/image";
import Link from "next/link";

const reasons = [
  { num: "01", title: "Licensed & Regulated Institutions", desc: "All instruments issued via licensed and regulated financial institutions — no unverified intermediaries." },
  { num: "02", title: "ICC Rules Compliant", desc: "Fully compliant with ICC rules (UCP 600, URDG 758, ISP98) — the gold standard in global trade finance." },
  { num: "03", title: "Transparent Transactions", desc: "Transparent, traceable, and secure transaction process from initiation to completion." },
  { num: "04", title: "Pan-African & International Coverage", desc: "Banking partnerships across Africa, Asia, the Middle East, and Europe to serve your global trade needs." },
  { num: "05", title: "Decades of Banking Expertise", desc: "Over 40 years of collective banking and trade finance expertise backing every transaction." },
];

const clientTypes = [
  { icon: "🏭", label: "Importers & Exporters scaling cross-border operations" },
  { icon: "🌾", label: "Commodity traders executing bulk shipments" },
  { icon: "🏗️", label: "Project contractors requiring financial backing" },
  { icon: "💼", label: "Brokers & intermediaries servicing high-value clients" },
  { icon: "📊", label: "Investors seeking secure financial instruments" },
  { icon: "🚢", label: "Entrepreneurs growing international trade businesses" },
];

export default function WhySection() {
  return (
    <>
      {/* Why Choose Section */}
      <section style={{ background: "linear-gradient(180deg, #0A1628 0%, #0D1F3C 100%)", padding: "100px 5%", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="why-grid">
          <div>
            <div style={{ fontSize: "0.62rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: "30px", height: "1px", background: "#C9A84C", display: "inline-block" }} />
              Why TFCA
            </div>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2.2rem, 3.8vw, 3.2rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: "16px", color: "white" }}>
              Why Choose <span style={{ color: "#C9A84C" }}>TFC African Region</span>
            </h2>
            <p style={{ fontSize: "0.98rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.9, fontWeight: 400, marginBottom: "36px" }}>
              Your growth is backed by a partner who understands trade, regulation, and risk across the African continent and beyond.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {reasons.map((r) => (
                <div key={r.num}
                  style={{ display: "flex", gap: "16px", padding: "16px", borderRadius: "4px", border: "1px solid transparent", transition: "all 0.3s", cursor: "default" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.04)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "transparent"; }}
                >
                  <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "2.2rem", fontWeight: 700, color: "rgba(201,168,76,0.2)", lineHeight: 1, flexShrink: 0, width: "38px" }}>{r.num}</div>
                  <div>
                    <strong style={{ display: "block", fontSize: "0.92rem", fontWeight: 700, marginBottom: "3px", color: "white" }}>{r.title}</strong>
                    <span style={{ fontSize: "0.81rem", color: "#8899AA", lineHeight: 1.7, fontWeight: 400 }}>{r.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            {/* Image */}
            <div style={{ borderRadius: "4px", overflow: "hidden", position: "relative", height: "280px", marginBottom: "20px" }}>
              <Image
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80"
                alt="African Business Professional"
                fill style={{ objectFit: "cover" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,31,60,0.8) 0%, transparent 50%)" }} />
            </div>

            {/* Who we work with */}
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.18)", borderRadius: "4px", padding: "28px" }}>
              <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.4rem", marginBottom: "6px", fontWeight: 700, color: "white" }}>Who We Work With</h3>
              <p style={{ fontSize: "0.82rem", color: "#8899AA", marginBottom: "20px", fontWeight: 400 }}>We support clients across every major trade sector</p>
              {clientTypes.map((c) => (
                <div key={c.label} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 0", borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
                  <span style={{ fontSize: "1rem" }}>{c.icon}</span>
                  <span style={{ fontSize: "0.73rem", color: "rgba(255,255,255,0.75)" }}>{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 1024px) { .why-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
        `}</style>
      </section>

      {/* Partner CTA */}
      <section style={{
        background: "linear-gradient(135deg, #A0792E 0%, #C9A84C 50%, #A0792E 100%)",
        padding: "80px 5%", textAlign: "center", position: "relative", overflow: "hidden"
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(13,31,60,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(13,31,60,0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div style={{ position: "relative" }}>
          <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0D1F3C", marginBottom: "14px", fontWeight: 600 }}>
            Join Our Global Network of Partners
          </h2>
          <p style={{ fontSize: "0.88rem", color: "rgba(13,31,60,0.75)", maxWidth: "560px", margin: "0 auto 32px", lineHeight: 1.9 }}>
            TFCA is actively expanding its network of brokers, business introducers, and financial consultants across Africa and globally. Earn commissions by introducing clients to world-class trade finance solutions.
          </p>
          <Link href="/contact" style={{
            background: "#0D1F3C", color: "#C9A84C", border: "none",
            padding: "14px 36px", borderRadius: "2px", fontSize: "0.72rem", fontWeight: 700,
            letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", display: "inline-block",
            transition: "all 0.3s"
          }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(13,31,60,0.3)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            Become a TFCA Partner Today →
          </Link>
        </div>
      </section>
    </>
  );
}
