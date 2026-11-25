import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hope John Bagaipo | Personal Site",
  description: "A personal site built with Next.js by Hope John Bagaipo.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-slate-50 text-slate-900">
        <header className="border-b border-slate-200 bg-white">
          <nav
            aria-label="Main navigation"
            className="mx-auto flex max-w-4xl items-center gap-6 px-6 py-4"
          >
            <Link href="/" className="font-semibold text-slate-900">
              Hope John Bagaipo
            </Link>
            <div className="ml-auto flex gap-5 text-sm font-medium text-slate-600">
              <Link href="/" className="hover:text-blue-700">Home</Link>
              <Link href="/about" className="hover:text-blue-700">About</Link>
              <Link href="/projects" className="hover:text-blue-700">Projects</Link>
            </div>
          </nav>
        </header>
        <div className="flex-1">{children}</div>
        <footer className="border-t border-slate-200 bg-white">
          <p className="mx-auto max-w-4xl px-6 py-5 text-sm text-slate-500">
            Built by Hope John Bagaipo with Next.js.
          </p>
        </footer>
      </body>
    </html>
  );
}
