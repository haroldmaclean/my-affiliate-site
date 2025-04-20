import Link from "next/link";
import type { Metadata } from "next";

// ✅ Metadata block - used directly in this file, so it's valid
export const metadata: Metadata = {
  title: "Tech Deals & Reviews - Blog",
  description: "Explore tech tips, product reviews, and affiliate insights.",
};

const posts = [
  {
    slug: "tech-reviews",
    title: "Top 5 Budget Tech Reviews",
    excerpt: "Discover the best value-for-money gadgets we’ve tested.",
  },
  {
    slug: "buying-guides",
    title: "Smart Buying Guides",
    excerpt: "Tips on how to choose the best gadgets for your needs.",
  },
  {
    slug: "daily-gadgets",
    title: "Daily Use Gadgets I Can’t Live Without",
    excerpt: "Check out these gadgets that simplify daily life!",
  },
  {
    slug: "deals",
    title: "🔥 Best Affiliate Deals This Week",
    excerpt: "Grab amazing discounts and offers before they’re gone!",
  },
];

export default function BlogPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1 style={{ marginBottom: "1rem" }}>Tech Deals & Blog 📱</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1rem",
        }}
      >
        {posts.map((post) => (
          <div
            key={post.slug}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              style={{ color: "#0070f3", fontWeight: "bold" }}
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
