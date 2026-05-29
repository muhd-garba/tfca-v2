"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/compliance", label: "Compliance" },
  { href: "/offices", label: "Offices" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
      height: "80px", display: "flex", alignItems: "center",
      justifyContent: "space-between", padding: "0 5%",
      background: scrolled ? "rgba(5,13,26,0.98)" : "rgba(13,31,60,0.95)",
      borderBottom: "1px solid rgba(201,168,76,0.15)",
      backdropFilter: "blur(12px)", transition: "background 0.3s ease",
    }}>
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: "14px", textDecoration: "none" }}>
        <div style={{ width: "56px", height: "56px", borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: "1px solid rgba(201,168,76,0.3)" }}>
          <Image src="/images/logo.png" alt="TFCA Logo" width={56} height={56} style={{ objectFit: "contain", width: "100%", height: "100%" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", fontWeight: 700, color: "#C9A84C", letterSpacing: "0.03em", lineHeight: 1.2 }}>
            Trade Finance Company
          </span>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.9rem", fontWeight: 600, color: "#C9A84C", letterSpacing: "0.03em", lineHeight: 1.2 }}>
            African Region Ltd
          </span>
          <span style={{ fontSize: "0.58rem", letterSpacing: "0.18em", color: "#8899AA", textTransform: "uppercase" }}>RC No. 8538180</span>
        </div>
      </Link>

      <ul style={{ display: "flex", alignItems: "center", gap: "26px", listStyle: "none", margin: 0 }} className="desktop-nav">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href}
              style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", transition: "color 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
            >{link.label}</Link>
          </li>
        ))}
        <li>
          <Link href="/contact"
            style={{ background: "transparent", border: "1px solid #C9A84C", color: "#C9A84C", padding: "9px 22px", borderRadius: "2px", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", transition: "all 0.3s", display: "inline-block" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#C9A84C"; e.currentTarget.style.color = "#0D1F3C"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#C9A84C"; }}
          >Contact Us</Link>
        </li>
      </ul>

      <button onClick={() => setMobileOpen(!mobileOpen)} style={{ display: "none", background: "none", border: "none", color: "white", cursor: "pointer" }} className="mobile-toggle">
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {mobileOpen && (
        <div style={{ position: "fixed", top: "80px", left: 0, right: 0, background: "rgba(5,13,26,0.98)", borderBottom: "1px solid rgba(201,168,76,0.2)", padding: "20px 5%", backdropFilter: "blur(12px)" }}>
          {[...navLinks, { href: "/contact", label: "Contact Us" }].map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
              style={{ display: "block", padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "0.82rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}
            >{link.label}</Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) { .desktop-nav { display: none !important; } .mobile-toggle { display: block !important; } }
      `}</style>
    </nav>
  );
}
