import Link from "next/link";
import Image from "next/image";

const products = [
  { id: 1, name: "Laptop", image: "/images/laptop.jpg" },
  { id: 2, name: "Smartphone", image: "/images/smart-phone.jpg" },
  { id: 3, name: "Headphones", image: "/images/headphones.jpg" },
];

export default function ProductsPage() {
  return (
    <div className="max-w-6xl mx-auto p-6 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">All Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="border rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden bg-white"
          >
            <div className="relative w-full h-64">
              <Image 
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <Link href={`/product/${product.id}`} className="text-blue-500 hover:underline block mt-2">
                View Product
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
