import type { Metadata } from "next";
import { Calistoga, DM_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-calistoga",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://inaccord.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Accord — Local AI discovery ops",
    template: "%s · Accord",
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
  authors: [{ name: "Accord" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Accord",
    title: "Accord — Local AI discovery ops",
    description:
      "Consistent, accurate AI recommendations for every location you operate.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accord",
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${calistoga.variable} ${dmSans.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen font-sans" suppressHydrationWarning>
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to main content
          </a>
          <div className="grain" aria-hidden />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
