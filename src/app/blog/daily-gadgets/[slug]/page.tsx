import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import gadgets from "@/data/gadgets.json";

// TypeScript types
type Gadget = {
  slug: string;
  name: string;
  description: string;
  image: string;
  alt?: string;
  note?: string;
  price: string;
  rating: number;
  link: string;
};

// Static paths generation
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = gadgets.map((gadget) => ({
    params: { slug: gadget.slug },
  }));

  return { paths, fallback: false }; // fallback: false means a 404 page will be shown for non-existent slugs
};

// Static props generation for a single gadget
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const gadget = gadgets.find((g) => g.slug === params?.slug);

  if (!gadget) {
    return { notFound: true };
  }

  return {
    props: { gadget },
  };
};

// Main Component
const GadgetDetailPage = ({ gadget }: { gadget: Gadget }) => {
  return (
    <main className="max-w-3xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold mb-4">{gadget.name}</h1>

      <div className="w-full h-64 relative mb-6">
        <Image
          src={gadget.image}
          alt={gadget.alt || gadget.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <p className="text-gray-700 text-lg mb-4">{gadget.description}</p>

      {gadget.note && (
        <p className="text-gray-500 italic mb-4">{gadget.note}</p>
      )}

      <div className="mb-6">
        <span className="text-lg font-bold text-green-600">{gadget.price}</span>
        <div className="text-yellow-500 text-sm ml-3">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i}>{i < Math.floor(gadget.rating) ? "★" : "☆"}</span>
          ))}
        </div>
      </div>

      <a
        href={`${gadget.link}?tag=yourtag-20`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        View on Amazon
      </a>
    </main>
  );
};

export default GadgetDetailPage;
