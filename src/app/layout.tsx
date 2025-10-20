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
    default: "Appinventiv | App Development & Digital Transformation Company USA",
    template: "%s | Appinventiv"
  },
  description: "Appinventiv is a global mobile app development company with offices in the US, UAE & UK. We offer innovative digital solutions to startups, enterprises and government clients across industries.",
  keywords: [
    "mobile app development",
    "digital transformation",
    "AI development",
    "cloud services",
    "blockchain",
    "IoT solutions",
    "software development",
    "enterprise solutions"
  ],
  authors: [{ name: "Appinventiv" }],
  creator: "Appinventiv",
  publisher: "Appinventiv",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://appinventiv.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Appinventiv | App Development & Digital Transformation Company USA",
    description: "Appinventiv is a global mobile app development company with offices in the US, UAE & UK. We offer innovative digital solutions to startups, enterprises and government clients across industries.",
    url: "https://appinventiv.com",
    siteName: "Appinventiv",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Appinventiv - Digital Transformation Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Appinventiv | App Development & Digital Transformation Company USA",
    description: "Appinventiv is a global mobile app development company with offices in the US, UAE & UK.",
    creator: "@appinventiv",
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
