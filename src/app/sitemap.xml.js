import gadgets from "@/data/gadgets.json";

export async function GET() {
  const baseUrl = "https://my-affiliate-site-rho.vercel.app";

  const urls = gadgets.map((gadget) => {
    return `
      <url>
        <loc>${baseUrl}/blog/daily-gadgets/${gadget.slug}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.join("\n")}
    </urlset>
  `;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
