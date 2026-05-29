"use client";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog";

const categories = ["All", "Trade Finance Basics", "Financial Instruments", "Africa Trade", "Compliance", "Project Finance"];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "140px 5% 80px", background: "linear-gradient(135deg, #050D1A 0%, #0D1F3C 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1800&q=80" alt="Blog" fill style={{ objectFit: "cover", opacity: 0.06 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(5,13,26,0.95) 0%, rgba(13,31,60,0.9) 100%)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: "0.68rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ width: "30px", height: "1px", background: "#C9A84C", display: "inline-block" }} /> Insights & News
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, lineHeight: 1.1 }}>
            Trade Finance <span style={{ color: "#C9A84C" }}>Blog</span>
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.9, maxWidth: "540px", marginTop: "20px", fontWeight: 300 }}>
            Expert insights on trade finance, financial instruments, African trade, and compliance — from the team at Trade Finance Company African Region Ltd.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section style={{ padding: "100px 5%", background: "#0D1F3C" }}>
        {/* Category pills */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "50px", flexWrap: "wrap" }}>
          {categories.map((cat) => (
            <span key={cat} style={{
              padding: "7px 18px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: 500,
              letterSpacing: "0.06em", cursor: "pointer",
              background: cat === "All" ? "linear-gradient(135deg, #C9A84C, #A0792E)" : "rgba(255,255,255,0.04)",
              color: cat === "All" ? "#0D1F3C" : "rgba(255,255,255,0.65)",
              border: cat === "All" ? "none" : "1px solid rgba(201,168,76,0.2)",
            }}>{cat}</span>
          ))}
        </div>

        {/* Featured post */}
        <div style={{ marginBottom: "50px" }}>
          <Link href={`/blog/${BLOG_POSTS[0].slug}`} style={{ textDecoration: "none", color: "inherit", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", borderRadius: "6px", overflow: "hidden", border: "1px solid rgba(201,168,76,0.2)", transition: "all 0.3s" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.45)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)"; e.currentTarget.style.transform = "translateY(0)"; }}
            className="featured-post"
          >
            <div style={{ position: "relative", minHeight: "340px" }}>
              <Image src={BLOG_POSTS[0].image} alt={BLOG_POSTS[0].title} fill style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent, rgba(13,31,60,0.3))" }} />
              <div style={{ position: "absolute", top: "20px", left: "20px", background: "linear-gradient(135deg, #C9A84C, #A0792E)", color: "#0D1F3C", padding: "5px 14px", borderRadius: "2px", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Featured
              </div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.03)", padding: "44px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "14px" }}>{BLOG_POSTS[0].category}</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 600, lineHeight: 1.25, marginBottom: "16px" }}>{BLOG_POSTS[0].title}</h2>
              <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, fontWeight: 300, marginBottom: "24px" }}>{BLOG_POSTS[0].excerpt}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "0.72rem", color: "#8899AA" }}>{BLOG_POSTS[0].date}</span>
                <span style={{ fontSize: "0.72rem", color: "#8899AA" }}>•</span>
                <span style={{ fontSize: "0.72rem", color: "#8899AA" }}>{BLOG_POSTS[0].readTime}</span>
              </div>
              <div style={{ marginTop: "24px", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 600 }}>Read Article →</div>
            </div>
          </Link>
          <style>{`@media(max-width:1024px){.featured-post{grid-template-columns:1fr !important;}}`}</style>
        </div>

        {/* Grid of posts */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="blog-grid">
          {BLOG_POSTS.slice(1).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              style={{ textDecoration: "none", color: "inherit", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.18)", borderRadius: "6px", overflow: "hidden", display: "block", transition: "all 0.3s" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.45)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.18)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ position: "relative", height: "200px" }}>
                <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,31,60,0.6) 0%, transparent 50%)" }} />
              </div>
              <div style={{ padding: "28px" }}>
                <span style={{ fontSize: "0.62rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "10px", display: "block" }}>{post.category}</span>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 600, lineHeight: 1.3, marginBottom: "12px" }}>{post.title}</h3>
                <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, fontWeight: 300, marginBottom: "20px" }}>{post.excerpt}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span style={{ fontSize: "0.68rem", color: "#8899AA" }}>{post.date}</span>
                    <span style={{ fontSize: "0.68rem", color: "#8899AA" }}>• {post.readTime}</span>
                  </div>
                  <span style={{ fontSize: "0.68rem", color: "#C9A84C", fontWeight: 600 }}>Read →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <style>{`@media(max-width:1024px){.blog-grid{grid-template-columns:repeat(2,1fr) !important;}}@media(max-width:640px){.blog-grid{grid-template-columns:1fr !important;}}`}</style>
      </section>
    </>
  );
}
