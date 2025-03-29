import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
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
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/product/1" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition">
            View Product 1
          </Link>
          <Link href="/product/2" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-gray-600
          transition">
            View Product 2
          </Link>
          <Link href="/product/3" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition">
            View Product 3
          </Link>
        </div>
      </div>
    </>
  );
}
