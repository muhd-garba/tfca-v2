"use client";
import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/lib/data";

export default function ServicesPage() {
  return (
    <>
      <section style={{ padding: "140px 5% 80px", background: "linear-gradient(135deg, #050D1A 0%, #0D1F3C 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1800&q=80" alt="Services" fill style={{ objectFit: "cover", opacity: 0.06 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(5,13,26,0.95) 0%, rgba(13,31,60,0.9) 100%)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1, maxWidth: "700px" }}>
          <div style={{ fontSize: "0.62rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ width: "30px", height: "1px", background: "#C9A84C", display: "inline-block" }} /> What We Offer
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, lineHeight: 1.1 }}>
            Trade Financial <span style={{ color: "#C9A84C" }}>Instruments</span>
          </h1>
          <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.9, marginTop: "20px", fontWeight: 300 }}>
            TFCA provides a comprehensive range of trade finance instruments, all issued through licensed banks and regulated financial institutions in full compliance with ICC standards.
          </p>
        </div>
      </section>

      <section style={{ padding: "100px 5%", background: "#0D1F3C" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }} className="svc-grid">
          {SERVICES.map((svc) => (
            <Link key={svc.slug} href={`/services/${svc.slug}`}
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.18)", borderRadius: "4px", padding: "36px 32px", textDecoration: "none", color: "inherit", display: "block", transition: "all 0.35s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.05)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.45)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.18)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ width: "52px", height: "52px", background: "rgba(201,168,76,0.1)", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", marginBottom: "20px" }}>{svc.icon}</div>
              <h3 style={{ fontSize: "0.9rem", fontWeight: 600, marginBottom: "12px" }}>{svc.title}</h3>
              <p style={{ fontSize: "0.73rem", color: "#8899AA", lineHeight: 1.8, fontWeight: 300, marginBottom: "16px" }}>{svc.short}</p>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "16px" }}>
                {svc.standards.map((s) => (
                  <span key={s} style={{ fontSize: "0.58rem", letterSpacing: "0.1em", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.3)", padding: "2px 8px", borderRadius: "2px" }}>{s}</span>
                ))}
              </div>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 600 }}>Learn More →</div>
            </Link>
          ))}
        </div>
        <style>{`@media(max-width:1024px){.svc-grid{grid-template-columns:repeat(2,1fr) !important;}}@media(max-width:640px){.svc-grid{grid-template-columns:1fr !important;}}`}</style>
      </section>

      <section style={{ padding: "80px 5%", background: "#162C50", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: 600, marginBottom: "14px" }}>Not sure which instrument you need?</h2>
        <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.6)", maxWidth: "500px", margin: "0 auto 28px", lineHeight: 1.9 }}>
          Our trade finance specialists will assess your transaction and recommend the right instrument.
        </p>
        <Link href="/contact" style={{ background: "linear-gradient(135deg, #C9A84C, #A0792E)", color: "#0D1F3C", padding: "14px 36px", borderRadius: "2px", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none" }}>
          Speak to a Specialist →
        </Link>
      </section>
    </>
  );
}
