import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Affiliate Store",
  description: "Generated by Create Next App",
  verification: {
    google: "m0LzAooHMyAW2Nned3Ei29c6j4JKMZI1fE3CH2MstoI",
  },
};

function Header() {
  return (
    <nav className="p-4 shadow-md bg-blue-600 text-white relative">
      <ul className="flex space-x-6 justify-center">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/products" className="hover:underline">
            Products
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </li>

        {/* Blog with Dropdown */}
        <li className="relative group">
          <Link href="/blog" className="hover:underline cursor-pointer">
            Blog
          </Link>
          <ul className="absolute hidden group-hover:block bg-white text-black rounded-md shadow-md mt-2 z-10 min-w-[180px]">
            <li>
              <Link href="/blog" className="block px-4 py-2 hover:bg-gray-100">
                All Posts
              </Link>
            </li>
            <li>
              <Link
                href="/blog/tech-reviews"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Tech Reviews
              </Link>
            </li>
            <li>
              <Link
                href="/blog/buying-guides"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Buying Guides
              </Link>
            </li>
            <li>
              <Link
                href="/blog/deals"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Deals of the Week
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}

        <footer className="bg-gray-800 text-white text-center p-6 mt-10">
          <p>
            &copy; {new Date().getFullYear()} My Affiliate Store. All rights
            reserved.
          </p>

          {/* Styled Affiliate Disclosure */}
          <div className="mt-6 border border-yellow-400 rounded-lg p-4 max-w-3xl mx-auto bg-gray-900">
            <p className="text-sm text-yellow-200 italic leading-relaxed">
              <strong className="text-yellow-300">Disclosure:</strong> As an
              Amazon Associate, I earn from qualifying purchases. This means
              that if you click on some of the product links on this page and
              make a purchase, I may receive a small commission at no extra cost
              to you.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
