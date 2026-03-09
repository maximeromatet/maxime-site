import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maxime Romatet",
  description:
    "Bocconi student. Founder in training. Building toward meaningful impact in tech.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}