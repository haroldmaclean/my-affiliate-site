"use client";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import gadgets from "@data/gadgets.json";

export default function Home() {
  // ⭐ Dynamically select featured gadgets by rating
  const featuredGadgets = gadgets.filter((gadget) => gadget.rating >= 4.5);

  return (
    <>
      <Head>
        <title>Best Affiliate Deals | My Website</title>
        <meta name="description" content="Find the best affiliate deals here." />
        <meta property="og:title" content="Best Affiliate Deals" />
        <meta property="og:description" content="Exclusive discounts and offers!" />
        <meta property="og:image" content="/images/affiliate-banner.jpg" />
      </Head>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 animate-fadeIn">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Affiliate Website</h1>
        <p className="text-lg text-gray-600 mb-6">Find the best deals and earn commissions!</p>

        {/* Optimized Banner Image */}
        <div className="relative w-full max-w-3xl h-64 mx-auto mb-6 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/affiliate-banner.jpg"
            alt="Affiliate Deals"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Product Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <Link href="/product/1" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition">
            View Product 1
          </Link>
          <Link href="/product/2" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition">
            View Product 2
          </Link>
          <Link href="/product/3" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition">
            View Product 3
          </Link>
        </div>

        {/* Blog Link */}
        <Link href="/blog" className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition mb-10">
          Visit Blog
        </Link>

        {/* 🔥 Featured Gadgets */}
        <section className="w-full max-w-6xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">🔥 Featured Gadgets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGadgets.map((gadget) => (
              <div
                key={gadget.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5"
              >
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={gadget.image}
                    alt={gadget.alt}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{gadget.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{gadget.description}</p>
                <div className="text-green-600 font-bold mb-2">{gadget.price}</div>
                <p className="text-gray-500 italic text-sm mb-3">{gadget.note}</p>
                <a
                  href={`${gadget.link}?tag=yourtag-20`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Product
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
