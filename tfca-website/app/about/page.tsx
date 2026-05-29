"use client";
import Image from "next/image";
import Link from "next/link";

const points = [
  { icon: "🌍", title: "African Focus, Global Reach", desc: "Headquartered in Nigeria to serve African businesses, with access to international banking networks across Asia, Europe, the Middle East, and beyond." },
  { icon: "⚖️", title: "Fully Regulated & Compliant", desc: "All instruments issued through licensed banks under applicable international banking laws. ICC, KYC & AML compliant in every transaction." },
  { icon: "🤝", title: "Trusted Banking Partnerships", desc: "We work with a network of regulated financial institutions delivering solutions that meet the highest standards of compliance, performance, and security." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "140px 5% 80px", background: "linear-gradient(135deg, #050D1A 0%, #0D1F3C 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1800&q=80" alt="About" fill style={{ objectFit: "cover", opacity: 0.07 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(5,13,26,0.95) 0%, rgba(13,31,60,0.9) 100%)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: "0.68rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ width: "30px", height: "1px", background: "#C9A84C", display: "inline-block" }} /> Company
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, lineHeight: 1.1, maxWidth: "700px" }}>
            About <span style={{ color: "#C9A84C" }}>Trade Finance Company African Region Ltd</span>
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.9, maxWidth: "560px", marginTop: "20px", fontWeight: 300 }}>
            A trusted financial consulting company providing structured trade finance solutions that empower importers, exporters, and entrepreneurs across Africa and worldwide.
          </p>
        </div>
      </section>

      {/* Mission - dark */}
      <section style={{ padding: "100px 5%", background: "#0D1F3C" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="about-grid">
          <div>
            <div style={{ fontSize: "0.68rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: "30px", height: "1px", background: "#C9A84C", display: "inline-block" }} /> Our Mission
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: 600, color: "white", marginBottom: "20px", lineHeight: 1.2 }}>
              Making Trade Finance <span style={{ color: "#C9A84C" }}>Accessible for Africa</span>
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.9, fontWeight: 300, marginBottom: "16px" }}>
              Trade Finance Company African Region Ltd (TFCA) is a financial consulting company providing structured trade finance solutions that empower importers, exporters, and entrepreneurs worldwide.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.9, fontWeight: 300, marginBottom: "36px" }}>
              Through our network of regulated financial institutions and trusted banking partners, TFCA delivers solutions that meet the highest standards of compliance, performance, and security.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {points.map((p) => (
                <div key={p.title} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div style={{ width: "42px", height: "42px", flexShrink: 0, background: "rgba(201,168,76,0.12)", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>{p.icon}</div>
                  <div>
                    <strong style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "white", marginBottom: "4px" }}>{p.title}</strong>
                    <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, fontWeight: 300 }}>{p.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: "4px", overflow: "hidden", aspectRatio: "4/5", position: "relative" }}>
              <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80" alt="Team" fill style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,31,60,0.5) 0%, transparent 50%)" }} />
            </div>
            <div style={{ position: "absolute", top: "-20px", left: "-20px", background: "linear-gradient(135deg, #C9A84C, #A0792E)", color: "#0D1F3C", padding: "20px 22px", borderRadius: "4px", textAlign: "center", boxShadow: "0 8px 30px rgba(201,168,76,0.3)" }}>
              <strong style={{ display: "block", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.9rem", fontWeight: 700, lineHeight: 1 }}>RC</strong>
              <span style={{ fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>8538180</span>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:1024px){.about-grid{grid-template-columns:1fr !important; gap:40px !important;}}`}</style>
      </section>

      {/* Values - dark */}
      <section style={{ padding: "100px 5%", background: "#162C50" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{ fontSize: "0.68rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "14px" }}>What Drives Us</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.8rem", fontWeight: 600, color: "white" }}>Our Core <span style={{ color: "#C9A84C" }}>Values</span></h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }} className="values-grid">
          {[
            { icon: "🔍", title: "Transparency", desc: "We operate with full transparency in every transaction, ensuring clients understand every step of the process." },
            { icon: "⚖️", title: "Integrity", desc: "Our business is built on ethical conduct, regulatory compliance, and uncompromising integrity in all dealings." },
            { icon: "🌍", title: "African Growth", desc: "We are committed to facilitating the growth of African trade and helping African businesses compete globally." },
            { icon: "🔐", title: "Security", desc: "Every instrument we facilitate is verifiable and compliant with global banking standards." },
            { icon: "🤝", title: "Partnership", desc: "We build long-term relationships based on trust and results with clients, intermediaries, and banking partners." },
            { icon: "🚀", title: "Excellence", desc: "We deliver solutions that meet the highest standards of performance, compliance, and professional service." },
          ].map((v) => (
            <div key={v.title}
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.18)", borderRadius: "4px", padding: "32px", transition: "all 0.3s", cursor: "default" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.05)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.18)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ fontSize: "1.8rem", marginBottom: "16px" }}>{v.icon}</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "10px", color: "#C9A84C" }}>{v.title}</h3>
              <p style={{ fontSize: "0.82rem", color: "#8899AA", lineHeight: 1.8, fontWeight: 300 }}>{v.desc}</p>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:1024px){.values-grid{grid-template-columns:repeat(2,1fr) !important;}}@media(max-width:640px){.values-grid{grid-template-columns:1fr !important;}}`}</style>
      </section>

      {/* Certificates / Licenses - dark */}
      <section style={{ padding: "100px 5%", background: "#0D1F3C" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <div style={{ fontSize: "0.68rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "14px" }}>Our Credentials</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.8rem", fontWeight: 600, color: "white" }}>Licenses & <span style={{ color: "#C9A84C" }}>Certificates</span></h2>
          <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.55)", maxWidth: "540px", margin: "16px auto 0", lineHeight: 1.9 }}>
            Trade Finance Company African Region Ltd is fully registered and certified. Our credentials reflect our commitment to compliance, legitimacy, and professional excellence.
          </p>
        </div>
        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "8px", overflow: "hidden", padding: "40px" }}>
          <Image
            src="/images/certificates.png"
            alt="TFCA Licenses and Certificates"
            width={1200}
            height={500}
            style={{ width: "100%", height: "auto", objectFit: "contain", borderRadius: "4px" }}
          />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginTop: "30px" }} className="cert-badges">
          {["Certificate of Incorporation", "Certificate of Registration", "NFCMA Registration", "IBS Certificate of Group Duty"].map((c) => (
            <div key={c} style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "4px", padding: "18px", textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "8px" }}>📜</div>
              <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.5, fontWeight: 400 }}>{c}</p>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:1024px){.cert-badges{grid-template-columns:repeat(2,1fr) !important;}}@media(max-width:480px){.cert-badges{grid-template-columns:1fr 1fr !important;}}`}</style>
      </section>

      {/* Stats - dark */}
      <section style={{ padding: "100px 5%", background: "#162C50" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="about-grid">
          <div style={{ borderRadius: "4px", overflow: "hidden", position: "relative", aspectRatio: "4/3" }}>
            <Image src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=900&q=80" alt="Africa" fill style={{ objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,31,60,0.7) 0%, transparent 50%)" }} />
            <div style={{ position: "absolute", bottom: "20px", left: "20px" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 600, color: "white" }}>Rooted in Africa</div>
              <div style={{ fontSize: "0.78rem", color: "#C9A84C", letterSpacing: "0.1em", marginTop: "4px" }}>Kano State, Nigeria</div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: "0.68rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: "30px", height: "1px", background: "#C9A84C", display: "inline-block" }} /> Our Reach
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.2rem", fontWeight: 600, color: "white", marginBottom: "20px", lineHeight: 1.2 }}>
              Pan-African with <span style={{ color: "#C9A84C" }}>Global Reach</span>
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.9, fontWeight: 300, marginBottom: "32px" }}>
              From our Nigerian headquarters, we connect African businesses to banking partners and trade opportunities spanning the globe.
            </p>
            {[
              { num: "1", label: "African Headquarters — Kano, Nigeria" },
              { num: "30+", label: "Countries Served Worldwide" },
              { num: "40+", label: "Years Combined Banking Expertise" },
              { num: "ICC", label: "International Standards Compliant" },
            ].map((s) => (
              <div key={s.label} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.2rem", fontWeight: 700, color: "#C9A84C", minWidth: "70px" }}>{s.num}</div>
                <div style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
