"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "#050D1A", borderTop: "1px solid rgba(201,168,76,0.15)", padding: "70px 5% 30px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "50px", marginBottom: "50px" }} className="footer-grid">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <div style={{ width: "50px", height: "50px", borderRadius: "50%", overflow: "hidden", border: "1px solid rgba(201,168,76,0.3)", flexShrink: 0 }}>
              <Image src="/images/logo.png" alt="TFCA Logo" width={50} height={50} style={{ objectFit: "contain", width: "100%", height: "100%" }} />
            </div>
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", color: "#C9A84C", fontWeight: 700, lineHeight: 1.2 }}>Trade Finance Company</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem", color: "#C9A84C", fontWeight: 600, lineHeight: 1.2 }}>African Region Ltd</div>
              <div style={{ fontSize: "0.58rem", color: "#8899AA", letterSpacing: "0.1em" }}>RC No. 8538180</div>
            </div>
          </div>
          <p style={{ fontSize: "0.82rem", color: "#8899AA", lineHeight: 2, fontWeight: 300, marginBottom: "16px" }}>
            Providing structured trade finance solutions that empower importers, exporters, and entrepreneurs across Africa and worldwide.
          </p>
          <div style={{ fontSize: "0.62rem", letterSpacing: "0.12em", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.25)", display: "inline-block", padding: "5px 12px", borderRadius: "2px" }}>
            RC No. 8538180
          </div>
        </div>
        <FooterCol title="Services" links={[
          { href: "/services/letters-of-credit", label: "Letters of Credit" },
          { href: "/services/bank-guarantees", label: "Bank Guarantees" },
          { href: "/services/standby-lc", label: "Standby LC" },
          { href: "/services/proof-of-funds", label: "Proof of Funds" },
          { href: "/services/performance-bond", label: "Performance Bond" },
          { href: "/services/project-funding", label: "Project Funding" },
        ]} />
        <FooterCol title="Company" links={[
          { href: "/about", label: "About Us" },
          { href: "/compliance", label: "Compliance" },
          { href: "/offices", label: "Offices" },
          { href: "/blog", label: "Blog" },
          { href: "/contact", label: "Contact" },
        ]} />
        <FooterCol title="Standards" links={[
          { href: "/compliance", label: "UCP 600" },
          { href: "/compliance", label: "URDG 758" },
          { href: "/compliance", label: "ISP98" },
          { href: "/compliance", label: "KYC / AML" },
          { href: "/compliance", label: "ICC Rules" },
        ]} />
      </div>
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #C9A84C, transparent)", marginBottom: "28px" }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <p style={{ fontSize: "0.72rem", color: "rgba(136,153,170,0.6)" }}>
          © {new Date().getFullYear()} Trade Finance Company African Region Ltd. RC No. 8538180. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: "12px" }}>
          {["Li", "Tw", "Fb"].map((s) => (
            <a key={s} href="#"
              style={{ width: "34px", height: "34px", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center", color: "#8899AA", textDecoration: "none", fontSize: "0.7rem", fontWeight: 600 }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#C9A84C"; e.currentTarget.style.color = "#C9A84C"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)"; e.currentTarget.style.color = "#8899AA"; }}
            >{s}</a>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:1024px){.footer-grid{grid-template-columns:1fr 1fr !important;}}
        @media(max-width:640px){.footer-grid{grid-template-columns:1fr !important;}}
      `}</style>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h4 style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px", fontWeight: 600 }}>{title}</h4>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {links.map((link) => (
          <li key={link.label} style={{ marginBottom: "12px" }}>
            <Link href={link.href}
              style={{ fontSize: "0.82rem", color: "#8899AA", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8899AA")}
            >{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
