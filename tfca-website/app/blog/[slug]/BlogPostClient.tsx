"use client";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog";

type Post = typeof BLOG_POSTS[0];

export default function BlogPostClient({ post, related }: { post: Post; related: Post[] }) {
  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content.split('\n').map((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) return <br key={i} />;
      if (trimmed.startsWith('## ')) return <h2 key={i} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 700, color: "#C9A84C", margin: "36px 0 14px" }}>{trimmed.slice(3)}</h2>;
      if (trimmed.startsWith('### ')) return <h3 key={i} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 700, color: "white", margin: "24px 0 10px" }}>{trimmed.slice(4)}</h3>;
      if (trimmed.startsWith('- ')) return <li key={i} style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.8, marginBottom: "8px", marginLeft: "20px", fontWeight: 400 }}>{trimmed.slice(2)}</li>;
      if (trimmed.startsWith('|')) return null; // skip table lines
      if (trimmed.match(/^\d\./)) return <li key={i} style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.8, marginBottom: "8px", marginLeft: "20px", fontWeight: 400 }}>{trimmed.replace(/^\d\.\s*\*\*(.*?)\*\*/, (_, t) => t).replace(/\*\*(.*?)\*\*/g, '$1')}</li>;
      return <p key={i} style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.9, fontWeight: 400, marginBottom: "12px" }}>{trimmed.replace(/\*\*(.*?)\*\*/g, '$1')}</p>;
    });
  };

  return (
    <>
      {/* Hero */}
      <section style={{ padding: "140px 5% 60px", background: "linear-gradient(135deg, #050D1A 0%, #0D1F3C 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover", opacity: 0.12 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(5,13,26,0.95) 0%, rgba(13,31,60,0.92) 100%)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1, maxWidth: "800px" }}>
          <Link href="/blog" style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: "#C9A84C", textDecoration: "none", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "24px" }}>
            ← Back to Blog
          </Link>
          <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "16px", flexWrap: "wrap" }}>
            <span style={{ background: "linear-gradient(135deg, #C9A84C, #A0792E)", color: "#0D1F3C", padding: "5px 16px", borderRadius: "2px", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>{post.category}</span>
            <span style={{ fontSize: "0.82rem", color: "#8899AA", fontWeight: 500 }}>{post.date}</span>
            <span style={{ fontSize: "0.82rem", color: "#8899AA", fontWeight: 500 }}>• {post.readTime}</span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 4.2vw, 3.4rem)", fontWeight: 700, lineHeight: 1.15, color: "white" }}>{post.title}</h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.9, marginTop: "20px", fontWeight: 400 }}>{post.excerpt}</p>
        </div>
      </section>

      {/* Article */}
      <section style={{ padding: "80px 5%", background: "#0D1F3C" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "60px", alignItems: "start" }} className="article-layout">
          {/* Content */}
          <div>
            <div style={{ borderRadius: "6px", overflow: "hidden", position: "relative", height: "360px", marginBottom: "48px" }}>
              <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover" }} />
            </div>
            <div>{renderContent(post.content)}</div>

            {/* Share */}
            <div style={{ marginTop: "48px", paddingTop: "32px", borderTop: "1px solid rgba(201,168,76,0.15)", display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "0.82rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#8899AA", fontWeight: 500 }}>Share this article:</span>
              {["WhatsApp", "LinkedIn", "Twitter"].map((s) => (
                <a key={s} href="#" style={{ fontSize: "0.82rem", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.3)", padding: "6px 14px", borderRadius: "2px", textDecoration: "none", fontWeight: 500 }}>{s}</a>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "4px", padding: "28px" }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", marginBottom: "12px", fontWeight: 700, color: "white" }}>Need This Service?</h3>
              <p style={{ fontSize: "0.85rem", color: "#8899AA", lineHeight: 1.7, marginBottom: "20px", fontWeight: 400 }}>
                Contact our trade finance specialists to discuss your requirements.
              </p>
              <Link href="/contact" style={{ display: "block", background: "linear-gradient(135deg, #C9A84C, #A0792E)", color: "#0D1F3C", padding: "12px", borderRadius: "2px", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", textAlign: "center" }}>
                Contact Us →
              </Link>
            </div>
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "4px", padding: "24px" }}>
              <h4 style={{ fontSize: "0.82rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#8899AA", marginBottom: "16px", fontWeight: 600 }}>WhatsApp Us</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <a href="https://wa.me/2349077504605" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "8px", background: "#25D366", color: "white", padding: "10px 14px", borderRadius: "4px", textDecoration: "none", fontSize: "0.85rem", fontWeight: 700 }}>
                  💬 +234 907 750 4605
                </a>
                <a href="https://wa.me/2348062250170" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "8px", background: "#25D366", color: "white", padding: "10px 14px", borderRadius: "4px", textDecoration: "none", fontSize: "0.85rem", fontWeight: 700 }}>
                  💬 +234 806 225 0170
                </a>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:1024px){.article-layout{grid-template-columns:1fr !important;}}`}</style>
      </section>

      {/* Related Posts */}
      <section style={{ padding: "80px 5%", background: "#162C50" }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 700, marginBottom: "36px", color: "white" }}>
          Related <span style={{ color: "#C9A84C" }}>Articles</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }} className="related-grid">
          {related.map((r) => (
            <Link key={r.slug} href={`/blog/${r.slug}`}
              style={{ textDecoration: "none", color: "inherit", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.18)", borderRadius: "4px", overflow: "hidden", display: "block", transition: "all 0.3s" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.18)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ position: "relative", height: "160px" }}>
                <Image src={r.image} alt={r.title} fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "20px" }}>
                <span style={{ fontSize: "0.6rem", color: "#C9A84C", letterSpacing: "0.12em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>{r.category}</span>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", fontWeight: 600, lineHeight: 1.3, marginBottom: "10px" }}>{r.title}</h3>
                <span style={{ fontSize: "0.68rem", color: "#C9A84C", fontWeight: 600 }}>Read →</span>
              </div>
            </Link>
          ))}
        </div>
        <style>{`@media(max-width:1024px){.related-grid{grid-template-columns:1fr 1fr !important;}}@media(max-width:640px){.related-grid{grid-template-columns:1fr !important;}}`}</style>
      </section>
    </>
  );
}
