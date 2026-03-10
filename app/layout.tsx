// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maxime Romatet",
  description:
    "Bocconi student. Founder in training. Building toward meaningful impact in tech.",
};

const nav = [
  { label: "Entrepreneurship", href: "#entrepreneurship" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Activities", href: "#extracurricular activities" },
  { label: "Skills", href: "#skills" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50 focus:rounded-xl focus:bg-white/90 focus:px-4 focus:py-2 focus:text-sm focus:shadow dark:focus:bg-black/60"
        >
          Skip to content
        </a>

        <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-white/70 backdrop-blur dark:bg-black/30">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <a
              href="#top"
              className="text-sm font-semibold tracking-tight hover:text-[var(--accent)] transition"
            >
              Maxime Romatet
            </a>

            <nav className="hidden md:flex items-center gap-5 text-sm text-[var(--muted)]">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-[var(--foreground)] transition"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#connect"
              className="inline-flex items-center justify-center rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white hover:opacity-95 transition"
            >
              Let’s connect
            </a>
          </div>
        </header>

        {children}

        <footer className="border-t border-[var(--border)]">
          <div className="mx-auto max-w-5xl px-6 py-10 text-sm text-[var(--muted)]">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>© {new Date().getFullYear()} Maxime Romatet</div>
              <div className="flex gap-4">
                <a
                  className="hover:text-[var(--foreground)] transition"
                  href="mailto:maximeromatet@gmail.com"
                >
                  Email
                </a>
                <a
                  className="hover:text-[var(--foreground)] transition"
                  href="https://linkedin.com/in/maximeromatet"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}