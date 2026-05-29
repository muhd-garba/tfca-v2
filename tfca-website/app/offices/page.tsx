"use client";
import Image from "next/image";

export default function OfficesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "140px 5% 80px", background: "linear-gradient(135deg, #050D1A 0%, #0D1F3C 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1800&q=80" alt="Africa" fill style={{ objectFit: "cover", opacity: 0.07 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(5,13,26,0.95) 0%, rgba(13,31,60,0.9) 100%)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: "0.68rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ width: "30px", height: "1px", background: "#C9A84C", display: "inline-block" }} /> Our Location
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, lineHeight: 1.1 }}>
            TFCA <span style={{ color: "#C9A84C" }}>Africa Office</span>
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.9, maxWidth: "560px", marginTop: "20px", fontWeight: 300 }}>
            Rooted in Africa, Trade Finance Company African Region Ltd operates from Nigeria — serving clients across the continent and globally.
          </p>
        </div>
      </section>

      {/* Office Card */}
      <section style={{ padding: "100px 5%", background: "#0D1F3C" }}>
        <div style={{ fontSize: "0.68rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ width: "30px", height: "1px", background: "#C9A84C", display: "inline-block" }} /> Africa
        </div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.2rem", fontWeight: 600, marginBottom: "40px" }}>
          Our <span style={{ color: "#C9A84C" }}>Nigerian Office</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "stretch" }} className="office-layout">
          {/* Card */}
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "6px", padding: "48px 40px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
              <span style={{ fontSize: "3rem" }}>🇳🇬</span>
              <div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 700, color: "#C9A84C" }}>Nigeria</h3>
                <p style={{ fontSize: "0.8rem", color: "#8899AA", letterSpacing: "0.1em", textTransform: "uppercase" }}>Headquarters — Africa</p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ display: "flex", gap: "16px" }}>
                <div style={{ width: "44px", height: "44px", background: "rgba(201,168,76,0.1)", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>📍</div>
                <div>
                  <div style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "5px" }}>Address</div>
                  <div style={{ fontSize: "1rem", color: "rgba(255,255,255,0.88)", lineHeight: 1.6, fontWeight: 400 }}>No. 25 Hotoro<br />Kano State, Nigeria</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "16px" }}>
                <div style={{ width: "44px", height: "44px", background: "rgba(201,168,76,0.1)", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>📞</div>
                <div>
                  <div style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "5px" }}>Phone / WhatsApp</div>
                  <div style={{ fontSize: "1rem", color: "rgba(255,255,255,0.88)", fontWeight: 400 }}>+234 806 225 0170</div>
                  <div style={{ fontSize: "1rem", color: "rgba(255,255,255,0.88)", fontWeight: 400 }}>+234 907 750 4605</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "16px" }}>
                <div style={{ width: "44px", height: "44px", background: "rgba(201,168,76,0.1)", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>🌍</div>
                <div>
                  <div style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "5px" }}>Region</div>
                  <div style={{ fontSize: "1rem", color: "rgba(255,255,255,0.88)", fontWeight: 400 }}>Pan-African operations with global banking reach</div>
                </div>
              </div>
            </div>

            {/* WhatsApp buttons */}
            <div style={{ display: "flex", gap: "12px", marginTop: "36px", flexWrap: "wrap" }}>
              <a href="https://wa.me/2349077504605" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#25D366", color: "white", padding: "12px 22px", borderRadius: "4px", textDecoration: "none", fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.05em" }}>
                <span style={{ fontSize: "1.1rem" }}>💬</span> WhatsApp: +234 907 750 4605
              </a>
              <a href="https://wa.me/2348062250170" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#25D366", color: "white", padding: "12px 22px", borderRadius: "4px", textDecoration: "none", fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.05em" }}>
                <span style={{ fontSize: "1.1rem" }}>💬</span> WhatsApp: +234 806 225 0170
              </a>
            </div>
          </div>

          {/* Map image */}
          <div style={{ borderRadius: "6px", overflow: "hidden", position: "relative", minHeight: "400px" }}>
            <Image src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=900&q=80" alt="Kano Nigeria" fill style={{ objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,31,60,0.75) 0%, rgba(13,31,60,0.1) 50%)" }} />
            <div style={{ position: "absolute", bottom: "28px", left: "28px" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 600 }}>Kano State, Nigeria</div>
              <div style={{ fontSize: "0.75rem", color: "#C9A84C", letterSpacing: "0.1em", marginTop: "4px" }}>Trade Finance Company African Region Ltd</div>
            </div>
          </div>
        </div>

        <style>{`@media(max-width:1024px){.office-layout{grid-template-columns:1fr !important;}}`}</style>
      </section>

      {/* Banner */}
      <section style={{ padding: "80px 5%", background: "#162C50", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.2rem", fontWeight: 600, marginBottom: "14px" }}>
          Africa is Our <span style={{ color: "#C9A84C" }}>Home. The World is Our Market.</span>
        </h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.6)", maxWidth: "540px", margin: "0 auto", lineHeight: 1.9 }}>
          From our Nigerian base, we connect African businesses to banking partners and trade opportunities across the globe.
        </p>
      </section>
    </>
  );
}
