"use client";

import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import gadgets from "@data/gadgets.json";

export default function DailyGadgetsPage() {
  const [query, setQuery] = useState("");

  const filteredGadgets = gadgets.filter((gadget) =>
    gadget.name?.toLowerCase().includes(query.toLowerCase())
  );

  // Up to 3 featured gadgets
  const featuredGadgets = filteredGadgets
    .filter((gadget) => gadget.featured)
    .slice(0, 3);

  // Prevent duplication in regular gadgets
  const featuredIds = featuredGadgets.map((g) => g.id);

  const regularGadgets = filteredGadgets.filter(
    (gadget) => !featuredIds.includes(gadget.id)
  );

  return (
    <>
      <Head>
        <title>Daily Use Gadgets | My Website</title>
        <meta
          name="description"
          content="Discover my favorite daily use gadgets that make life easier and more productive."
        />
        <meta property="og:title" content="Daily Use Gadgets" />
        <meta
          property="og:description"
          content="Explore top tools and tech I use every day."
        />
        <meta property="og:image" content="/images/daily-gadgets-banner.jpg" />
      </Head>

      <main className="p-6 font-sans max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Daily Use Gadgets I Can’t Live Without
        </h1>

        {/* 🔍 Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search gadgets..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* 📸 Banner Image */}
        <div className="relative w-full h-64 rounded-lg overflow-hidden mb-6 shadow-lg">
          <Image
            src="/images/daily-gadgets-banner.jpg"
            alt="Banner showcasing daily gadgets"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 1024px"
            priority
          />
        </div>

        <p className="text-gray-700 text-lg mb-6">
          These are the everyday tools and gadgets that have made my life
          simpler and more productive. From smart accessories to useful tech,
          this list is a game-changer.
        </p>

        {/* 🌟 Featured Gadgets */}
        {featuredGadgets.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">
              🌟 Featured Gadgets
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredGadgets.map((gadget) => (
                <motion.div
                  key={gadget.id}
                  className="relative border-2 border-yellow-400 bg-yellow-50 hover:bg-yellow-100 rounded-2xl shadow-md p-5 transform hover:-translate-y-1 transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                    FEATURED
                  </span>

                  <div className="rounded-lg mb-3 overflow-hidden w-full h-40 shadow-sm relative">
                    <Image
                      src={gadget.image}
                      alt={gadget.alt || gadget.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  </div>

                  <h2 className="text-xl font-semibold mb-2 text-gray-800">
                    {gadget.title}
                  </h2>
                  <p className="text-gray-600 mb-3">{gadget.description}</p>

                  <div className="mb-3 flex items-center">
                    <span className="text-lg font-bold text-green-600">
                      {gadget.price}
                    </span>
                    <span className="ml-3 text-yellow-500 text-sm">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i}>
                          {i < Math.floor(gadget.rating) ? "★" : "☆"}
                        </span>
                      ))}
                    </span>
                  </div>

                  {gadget.note && (
                    <p className="text-gray-500 italic text-sm mb-4">
                      {gadget.note}
                    </p>
                  )}

                  <a
                    href={`${gadget.link}?tag=yourtag-20`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    View Product
                  </a>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* 🛠️ Regular Gadgets */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularGadgets.map((gadget) => (
            <motion.div
              key={gadget.id}
              className="bg-gradient-to-br from-blue-50 to-white hover:from-blue-100 transition-all duration-300 rounded-2xl shadow-md hover:shadow-xl p-5 transform hover:-translate-y-1"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="rounded-lg mb-3 overflow-hidden w-full h-40 shadow-sm relative">
                <Image
                  src={gadget.image}
                  alt={gadget.alt || gadget.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>

              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {gadget.title}
              </h2>
              <p className="text-gray-600 mb-3">{gadget.description}</p>

              <div className="mb-3 flex items-center">
                <span className="text-lg font-bold text-green-600">
                  {gadget.price}
                </span>
                <span className="ml-3 text-yellow-500 text-sm">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i}>
                      {i < Math.floor(gadget.rating) ? "★" : "☆"}
                    </span>
                  ))}
                </span>
              </div>

              {gadget.note && (
                <p className="text-gray-500 italic text-sm mb-4">
                  {gadget.note}
                </p>
              )}

              <a
                href={`${gadget.link}?tag=yourtag-20`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                View Product
              </a>
            </motion.div>
          ))}
        </section>
      </main>
    </>
  );
}
