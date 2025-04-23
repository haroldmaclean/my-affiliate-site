// app/blog/daily-gadgets/[slug]/page.jsx

import Image from "next/image";
import rawGadgets from "@/data/gadgets.json";

const gadgets = rawGadgets;

// ✅ 1. Static Paths for SEO
export async function generateStaticParams() {
  return gadgets.map((gadget) => ({
    slug: gadget.slug,
  }));
}

// ✅ 2. Dynamic SEO Metadata with OG + Twitter
export async function generateMetadata({ params }) {
  const gadget = gadgets.find((g) => g.slug === params.slug);

  if (!gadget) {
    return {
      title: "Gadget Not Found | Daily Tech Gadgets",
      description: "This gadget could not be found.",
    };
  }

  const fullUrl = `https://yourdomain.com/blog/daily-gadgets/${gadget.slug}`;

  return {
    title: `${gadget.name} | Daily Tech Gadgets`,
    description: gadget.description,
    openGraph: {
      title: gadget.name,
      description: gadget.description,
      url: fullUrl,
      siteName: "Daily Tech Gadgets",
      type: "article",
      images: [
        {
          url: gadget.image,
          width: 1200,
          height: 630,
          alt: gadget.alt || gadget.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: gadget.name,
      description: gadget.description,
      images: [gadget.image],
    },
  };
}

// ✅ 3. Main Page
export default function GadgetDetailPage({ params }) {
  const gadget = gadgets.find((g) => g.slug === params.slug);

  if (!gadget) {
    return <div className="p-6 text-center">Gadget not found</div>;
  }

  return (
    <main className="max-w-3xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold mb-4">{gadget.name}</h1>

      <div className="w-full h-64 relative mb-6">
        <Image
          src={gadget.image}
          alt={gadget.alt || gadget.name}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      <p className="text-gray-700 text-lg mb-4">{gadget.description}</p>

      {gadget.note && (
        <p className="text-gray-500 italic mb-4">{gadget.note}</p>
      )}

      <div className="mb-6 flex items-center gap-2">
        <span className="text-lg font-bold text-green-600">{gadget.price}</span>
        <div className="text-yellow-500 text-sm">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i}>{i < Math.floor(gadget.rating) ? "★" : "☆"}</span>
          ))}
        </div>
      </div>

      <a
        href={`${gadget.link}?tag=yourtag-20`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        View on Amazon
      </a>
    </main>
  );
}
