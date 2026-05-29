"use client";
import Image from "next/image";
import ContactSection from "@/components/sections/ContactSection";

export default function ContactPage() {
  return (
    <>
      <section style={{ padding: "140px 5% 60px", background: "linear-gradient(135deg, #050D1A 0%, #0D1F3C 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1800&q=80" alt="Contact" fill style={{ objectFit: "cover", opacity: 0.06 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(5,13,26,0.95) 0%, rgba(13,31,60,0.9) 100%)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ width: "30px", height: "1px", background: "#C9A84C", display: "inline-block" }} /> Reach Out
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, lineHeight: 1.1 }}>
            Contact <span style={{ color: "#C9A84C" }}>Trade Finance Company African Region Ltd</span>
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.9, maxWidth: "500px", marginTop: "20px", fontWeight: 300 }}>
            Ready to secure your trade transactions? Our specialists are available to discuss your requirements and guide you to the right financial instrument.
          </p>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
