import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maxime Romatet",
  description: "Bocconi student. Founder in training. Building toward meaningful impact in tech.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-sm font-medium tracking-tight">
              Maxime Romatet
            </Link>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}