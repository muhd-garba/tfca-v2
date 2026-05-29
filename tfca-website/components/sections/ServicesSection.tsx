"use client";
import Link from "next/link";
import { SERVICES } from "@/lib/data";

const featured = SERVICES.slice(0, 6);
const extra = SERVICES.slice(6);

export default function ServicesSection() {
  return (
    <section style={{ background: "linear-gradient(180deg, #0D1F3C 0%, #0A1628 100%)", padding: "100px 5%", position: "relative" }}>
      <div className="gold-divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "60px", flexWrap: "wrap", gap: "20px" }}>
        <div>
          <div style={{ fontSize: "0.62px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ width: "30px", height: "1px", background: "#C9A84C", display: "inline-block" }} />
            <span style={{ fontSize: "0.62rem" }}>What We Offer</span>
          </div>
          <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 600, lineHeight: 1.15 }}>
            Trade Financial <span style={{ color: "#C9A84C" }}>Instruments</span>
          </h2>
        </div>
        <Link href="/services" style={{
          background: "linear-gradient(135deg, #C9A84C, #A0792E)", color: "#0D1F3C",
          padding: "13px 28px", borderRadius: "2px", fontSize: "0.7rem", fontWeight: 700,
          letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none",
          whiteSpace: "nowrap"
        }}>
          All Services →
        </Link>
      </div>

      {/* Main Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }} className="services-grid">
        {featured.map((svc) => (
          <ServiceCard key={svc.slug} svc={svc} />
        ))}
      </div>

      {/* Additional */}
      <div style={{ marginTop: "40px", paddingTop: "40px", borderTop: "1px solid rgba(201,168,76,0.15)" }}>
        <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8899AA", marginBottom: "20px" }}>
          Additional Instruments
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "14px" }} className="extra-grid">
          {[...extra, { icon: "🏢", title: "Bank Account Opening", slug: "contact" }, { icon: "📈", title: "Investment Solutions", slug: "contact" }].map((item) => (
            <Link key={item.title} href={`/services/${item.slug}`}
              style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: "2px", padding: "16px 18px", display: "flex", alignItems: "center",
                gap: "10px", textDecoration: "none", transition: "all 0.3s", color: "inherit"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(201,168,76,0.06)";
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)";
              }}
            >
              <span style={{ fontSize: "1rem" }}>{item.icon}</span>
              <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.75)" }}>{item.title}</span>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .services-grid { grid-template-columns: repeat(2,1fr) !important; } .extra-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 640px) { .services-grid { grid-template-columns: 1fr !important; } .extra-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </section>
  );
}

function ServiceCard({ svc }: { svc: typeof SERVICES[0] }) {
  return (
    <Link href={`/services/${svc.slug}`}
      style={{
        background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.18)",
        borderRadius: "4px", padding: "32px", textDecoration: "none", color: "inherit",
        display: "block", transition: "all 0.35s", position: "relative", overflow: "hidden"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(201,168,76,0.05)";
        e.currentTarget.style.borderColor = "rgba(201,168,76,0.45)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.03)";
        e.currentTarget.style.borderColor = "rgba(201,168,76,0.18)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div style={{
        width: "48px", height: "48px", background: "rgba(201,168,76,0.1)",
        borderRadius: "2px", display: "flex", alignItems: "center",
        justifyContent: "center", fontSize: "1.3rem", marginBottom: "20px"
      }}>
        {svc.icon}
      </div>
      <h3 style={{ fontSize: "0.88rem", fontWeight: 600, letterSpacing: "0.03em", marginBottom: "10px" }}>{svc.title}</h3>
      <p style={{ fontSize: "0.72rem", color: "#8899AA", lineHeight: 1.8, fontWeight: 300 }}>{svc.short}</p>
      <div style={{ display: "flex", gap: "6px", marginTop: "16px", flexWrap: "wrap" }}>
        {svc.standards.map((s) => (
          <span key={s} style={{ fontSize: "0.58rem", letterSpacing: "0.1em", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.25)", padding: "2px 8px", borderRadius: "2px" }}>{s}</span>
        ))}
      </div>
      <div style={{ marginTop: "16px", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 600 }}>
        Learn More →
      </div>
    </Link>
  );
}
