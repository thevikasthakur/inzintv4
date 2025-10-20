import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Inzint | AI-Driven Software Development | India",
    template: "%s | Inzint"
  },
  description: "Inzint is an engineering-first software consultancy founded in 2020. We build AI voice/reception systems, high-performance web/mobile apps, and cloud backends that scale. Small senior squads, documented decisions, measurable outcomes.",
  keywords: [
    "AI software development company India",
    "Next.js and Node.js development agency",
    "AWS serverless consultants",
    "AI voice bot for businesses",
    "Custom logistics & healthcare software",
    "React Native mobile app development",
    "NestJS backend development",
    "AI MVP development"
  ],
  authors: [{ name: "Inzint Private Limited" }],
  creator: "Inzint",
  publisher: "Inzint",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://inzint.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Inzint | AI-Driven Software Development | India",
    description: "Founder-led engineering team building production-ready software: AI voice bots, web/mobile apps, and cloud backends. From rapid prototypes to enterprise solutions.",
    url: "https://inzint.com",
    siteName: "Inzint",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Inzint - AI-Driven Software Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inzint | AI-Driven Software Development",
    description: "Engineering-first team building AI voice bots, web/mobile apps, and cloud backends. India-based, serving globally.",
    creator: "@inzint",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0069ff" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Header />
        {children}
      </body>
    </html>
  );
}
