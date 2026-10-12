import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://getchorus.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Chorus — Local AI discovery ops",
    template: "%s · Chorus",
  },
  description:
    "Measure and improve how AI assistants recommend your locations. Cross-engine visibility, factual accuracy, and source-level fixes for multi-location and new-opening local businesses.",
  keywords: [
    "GEO",
    "AEO",
    "AI visibility",
    "local discovery",
    "multi-location",
    "generative engine optimization",
  ],
  authors: [{ name: "Chorus" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Chorus",
    title: "Chorus — Local AI discovery ops",
    description:
      "Consistent, accurate AI recommendations for every location you operate.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chorus",
    description: "Local AI discovery ops for physical businesses.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plex.variable}`}>
      <body className="font-sans min-h-screen">
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}
