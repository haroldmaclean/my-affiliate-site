"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const products = [
  { id: "1", name: "Product 1", image: "/images/laptop.jpg", link: "https://amazon.com/product1" },
  { id: "2", name: "Product 2", image: "/images/smart-phone.jpg", link: "https://amazon.com/product2" },
  { id: "3", name: "Product 3", image: "https://via.placeholder.com/300", link: "https://amazon.com/product3" },
];

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="text-center py-10 animate-fadeIn">
        <h1 className="text-2xl font-bold text-red-600">Product Not Found</h1>
        <p className="text-gray-600">The product you are looking for does not exist.</p>
        <Link href="/" className="text-blue-500 hover:underline mt-4 block">Go Back Home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 text-center animate-fadeIn">
      <h1 className="text-3xl font-bold">{product.name}</h1>

      {/* Optimized Image using next/image */}
      <div className="relative w-64 h-64 mx-auto my-4 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
      </div>

      {/* Buy Now Button */}
      <a 
        href={product.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Buy Now
      </a>

      {/* Facebook Share Button (Fixed Syntax) */}
      <div className="mt-4">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(product.link)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Share on Facebook
        </a>
      </div>
    </div>
  );
}
