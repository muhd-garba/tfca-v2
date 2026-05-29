"use client";
import Image from "next/image";
import Link from "next/link";

const points = [
  {
    icon: "🌍",
    title: "African Focus, Global Reach",
    desc: "Headquartered to serve African businesses with access to international banking networks across Asia, Europe, the Middle East, and beyond.",
  },
  {
    icon: "⚖️",
    title: "Fully Regulated & Compliant",
    desc: "All instruments issued through licensed banks under applicable international banking laws. ICC, KYC & AML compliant in every transaction.",
  },
  {
    icon: "🤝",
    title: "Trusted Banking Partnerships",
    desc: "We work with a network of regulated financial institutions delivering solutions that meet the highest standards of compliance, performance, and security.",
  },
];

export default function AboutSection() {
  return (
    <section style={{ background: "#F8F5EF", padding: "100px 5%" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="about-grid">
        {/* Image Side */}
        <div style={{ position: "relative" }} className="about-img-col">
          <div style={{
            width: "100%", aspectRatio: "4/5", borderRadius: "4px",
            overflow: "hidden", position: "relative",
          }}>
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80"
              alt="Trade Finance Professionals"
              fill
              style={{ objectFit: "cover" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(13,31,60,0.3) 0%, transparent 60%)" }} />
          </div>
          {/* Accent border */}
          <div style={{
            position: "absolute", bottom: "-20px", right: "-20px",
            width: "160px", height: "160px",
            border: "2px solid rgba(160,121,46,0.35)", borderRadius: "4px"
          }} />
          {/* RC badge */}
          <div style={{
            position: "absolute", top: "-20px", left: "-20px",
            background: "linear-gradient(135deg, #C9A84C, #A0792E)",
            color: "#0D1F3C", padding: "20px 22px", borderRadius: "4px",
            textAlign: "center", boxShadow: "0 8px 30px rgba(201,168,76,0.3)"
          }}>
            <strong style={{ display: "block", fontFamily: "var(--font-cormorant), serif", fontSize: "1.9rem", fontWeight: 700, lineHeight: 1 }}>RC</strong>
            <span style={{ fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>8538180</span>
          </div>
          {/* Experience badge */}
          <div style={{
            position: "absolute", bottom: "30px", left: "-30px",
            background: "#0D1F3C", border: "1px solid rgba(201,168,76,0.3)",
            padding: "16px 20px", borderRadius: "4px", boxShadow: "0 8px 30px rgba(0,0,0,0.3)"
          }}>
            <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "2rem", fontWeight: 700, color: "#C9A84C", lineHeight: 1 }}>40+</div>
            <div style={{ fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#8899AA", marginTop: "4px" }}>Years of Expertise</div>
          </div>
        </div>

        {/* Text Side */}
        <div>
          <div style={{ fontSize: "0.62rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#A0792E", marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ width: "30px", height: "1px", background: "#A0792E", display: "inline-block" }} />
            Who We Are
          </div>
          <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2.2rem, 3.8vw, 3.2rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: "20px", color: "#0D1F3C" }}>
            About <span style={{ color: "#A0792E" }}>TFC African Region Ltd</span>
          </h2>
          <p style={{ fontSize: "0.98rem", color: "rgba(13,31,60,0.7)", lineHeight: 1.9, fontWeight: 400, marginBottom: "16px" }}>
            Trade Finance Company African Region Ltd (TFCA) is a financial consulting company providing structured trade finance solutions that empower importers, exporters, and entrepreneurs across Africa and worldwide.
          </p>
          <p style={{ fontSize: "0.98rem", color: "rgba(13,31,60,0.7)", lineHeight: 1.9, fontWeight: 400, marginBottom: "36px" }}>
            Our aim is to make trade finance instruments accessible, transparent, and trustworthy — enabling our clients to trade and grow globally with confidence.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "36px" }}>
            {points.map((p) => (
              <div key={p.title} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <div style={{
                  width: "38px", height: "38px", flexShrink: 0,
                  background: "rgba(201,168,76,0.12)", borderRadius: "2px",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem"
                }}>
                  {p.icon}
                </div>
                <div>
                  <strong style={{ display: "block", fontSize: "0.92rem", fontWeight: 700, color: "#0D1F3C", marginBottom: "3px" }}>{p.title}</strong>
                  <span style={{ fontSize: "0.82rem", color: "rgba(13,31,60,0.65)", lineHeight: 1.7, fontWeight: 400 }}>{p.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <Link href="/about" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "linear-gradient(135deg, #C9A84C, #A0792E)",
            color: "#0D1F3C", padding: "13px 28px", borderRadius: "2px",
            fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em",
            textTransform: "uppercase", textDecoration: "none"
          }}>
            Learn More About Us →
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .about-img-col { display: none !important; }
        }
      `}</style>
    </section>
  );
}
