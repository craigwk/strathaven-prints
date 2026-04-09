import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
title: "Custom 3D Printing in Strathaven | Parts, Repairs & Bespoke Prints",
description: "Local 3D printing service in Strathaven. Custom parts, replacement components, STL printing and personalised designs. Fast turnaround and local delivery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} h-full antialiased`}
    >
	
      <body className="min-h-full flex flex-col bg-[radial-gradient(circle_at_top,_#1e1b4b,_#111827_45%,_#0f172a_100%)] text-white">
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[rgba(15,23,42,0.55)] backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Strathaven Prints"
                className="h-12 w-12 object-cover scale-150"
              />

              <div className="leading-none">
                <div className="font-[family-name:var(--font-sora)] text-2xl font-bold tracking-tight text-white">
                  Strathaven Prints
                </div>

                <div className="mt-1 text-[10px] tracking-[0.28em] text-blue-300/70">
                  CUSTOM 3D PRINTING
                </div>
              </div>
            </div>

            <a
              href="#quote"
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:bg-white/10 hover:text-white"
            >
              Get a quote →
            </a>
          </div>
        </header>

        {children}
		<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Strathaven Prints",
      description: "Custom 3D printing service in Strathaven",
      areaServed: "South Lanarkshire",
      url: "https://strathavenprints.co.uk",
    }),
  }}
/>
      </body>
    </html>
  );
}

