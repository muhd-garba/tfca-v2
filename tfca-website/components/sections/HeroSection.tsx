"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";

const floatingCards = [
  { icon: "📜", title: "Letters of Credit (LC)", desc: "Secure cross-border payments under UCP 600" },
  { icon: "🏦", title: "Bank Guarantees", desc: "URDG 758 compliant, globally accepted" },
  { icon: "🚀", title: "Project Funding", desc: "Structured finance for African projects" },
];

export default function HeroSection() {
  return (
    <section style={{ minHeight: "100vh", position: "relative", display: "flex", alignItems: "center", padding: "120px 5% 80px", overflow: "hidden", background: "linear-gradient(135deg, #050D1A 0%, #0D1F3C 60%, #0A1830 100%)" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1800&q=80" alt="Trade Finance" fill style={{ objectFit: "cover", opacity: 0.08 }} priority />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(5,13,26,0.96) 0%, rgba(13,31,60,0.88) 60%, rgba(10,24,48,0.96) 100%)" }} />
      </div>
      <div style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.04, backgroundImage: "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div style={{ position: "absolute", top: "30%", right: "20%", width: "500px", height: "500px", background: "radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 65%)", zIndex: 0 }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: "700px", flex: 1 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid rgba(201,168,76,0.3)", background: "rgba(201,168,76,0.06)", padding: "7px 18px", borderRadius: "2px", marginBottom: "28px", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A84C" }}>
          <span style={{ width: "6px", height: "6px", background: "#C9A84C", borderRadius: "50%", animation: "pulse 2s infinite", flexShrink: 0 }} />
          Africa&apos;s Trusted Trade Finance Partner
        </div>

        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(3.2rem, 5.8vw, 5rem)", fontWeight: 700, lineHeight: 1.1, marginBottom: "24px", color: "white" }}>
          Secure Your Trade
          <span style={{ display: "block", color: "#C9A84C" }}>Across Africa & Beyond</span>
        </h1>

        <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.9, marginBottom: "40px", maxWidth: "540px", fontWeight: 400 }}>
          Trade Finance Company African Region Ltd provides structured trade finance solutions — Letters of Credit, Bank Guarantees, Proof of Funds, and more — empowering importers, exporters, and entrepreneurs worldwide.
        </p>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Link href="/services" style={{ background: "linear-gradient(135deg, #C9A84C 0%, #A0792E 100%)", color: "#0D1F3C", border: "none", padding: "16px 34px", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px", display: "inline-flex", alignItems: "center", gap: "8px", transition: "all 0.3s" }}>
            Explore Services <ArrowRight size={15} />
          </Link>
          <Link href="/contact" style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.3)", color: "white", padding: "16px 34px", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px", transition: "all 0.3s", display: "inline-flex", alignItems: "center", gap: "8px" }}>
            Contact Us <ChevronRight size={15} />
          </Link>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: "40px", marginTop: "60px", paddingTop: "40px", borderTop: "1px solid rgba(201,168,76,0.2)", flexWrap: "wrap" }}>
          {[
            { val: "40+", label: "Years Expertise" },
            { val: "ICC", label: "Compliant" },
            { val: "30+", label: "Countries" },
            { val: "UCP 600", label: "Standard" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.4rem", fontWeight: 700, color: "#C9A84C", lineHeight: 1 }}>{s.val}</div>
              <div style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#8899AA", marginTop: "5px", fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating cards */}
      <div style={{ position: "absolute", right: "5%", top: "50%", transform: "translateY(-50%)", width: "360px", zIndex: 2, display: "flex", flexDirection: "column", gap: "14px" }} className="hero-cards">
        {floatingCards.map((card) => (
          <div key={card.title}
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "4px", padding: "22px 26px", backdropFilter: "blur(10px)", transition: "all 0.3s", cursor: "default" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.07)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.45)"; e.currentTarget.style.transform = "translateX(-4px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)"; e.currentTarget.style.transform = "translateX(0)"; }}
          >
            <div style={{ fontSize: "1.3rem", marginBottom: "10px" }}>{card.icon}</div>
            <h4 style={{ fontSize: "0.88rem", fontWeight: 600, marginBottom: "5px" }}>{card.title}</h4>
            <p style={{ fontSize: "0.76rem", color: "#8899AA", lineHeight: 1.6, fontWeight: 300 }}>{card.desc}</p>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.8)} }
        @media (max-width: 1024px) { .hero-cards { display: none !important; } }
      `}</style>
    </section>
  );
}
