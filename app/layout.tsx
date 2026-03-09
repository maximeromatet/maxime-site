import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maxime Romatet",
  description: "Founder in training. Building at the intersection of tech and execution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-sm font-medium tracking-tight">
              Maxime Romatet
            </Link>

            <nav className="flex items-center gap-6 text-sm text-neutral-600">
              <Link href="/" className="hover:text-black transition">
                Home
              </Link>
              <Link href="/projects" className="hover:text-black transition">
                Projects
              </Link>
              <Link href="/contact" className="hover:text-black transition">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}