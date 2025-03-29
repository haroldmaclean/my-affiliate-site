import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto p-6 min-h-screen flex flex-col items-center justify-center text-center animate-fadeIn">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
      <p className="text-lg text-gray-600 max-w-3xl">
        Welcome to <span className="font-semibold">My Affiliate Store</span>. We are dedicated to providing you with the 
        <strong>best deals</strong> on high-quality products. Our goal is to help you find amazing discounts while earning commissions 
        through trusted affiliate partners.
      </p>

      {/* Decorative Image */}
      <div className="relative w-full max-w-3xl h-64 mt-6 rounded-lg overflow-hidden shadow-lg">
        <Image 
          src="/images/about-banner.jpg"
          alt="Affiliate shopping"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
