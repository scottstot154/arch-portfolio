import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Studio — Architecture Portfolio",
  description: "Selected works and ongoing projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <header className="border-b">
          <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
            <Link href="/" className="text-xl font-semibold">
              Studio
            </Link>
            <div className="flex gap-4 text-sm">
              <Link href="/projects">Projects</Link>
              <Link href="/about">About</Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-6xl p-6">{children}</main>
        <footer className="border-t p-4 text-sm opacity-70">
          © {new Date().getFullYear()} Studio
        </footer>
      </body>
    </html>
  );
}
