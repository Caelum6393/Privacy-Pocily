// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "BlaBla VPN - Your Privacy, Our Priority",
    template: "%s | BlaBla VPN",
  },
  description:
    "BlaBla VPN protects your online privacy with a strict no-logs policy. Free, fast, and secure VPN service for Android and iOS.",
  keywords: [
    "VPN",
    "privacy",
    "security",
    "no logs",
    "free VPN",
    "BlaBla VPN",
    "anonymous browsing",
  ],
  authors: [{ name: "BlaBla VPN Team" }],
  creator: "BlaBla VPN",
  publisher: "BlaBla VPN",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blablavpn.vercel.app",
    title: "BlaBla VPN - Your Privacy, Our Priority",
    description:
      "Free, secure VPN with strict no-logs policy. Protect your online privacy with military-grade encryption.",
    siteName: "BlaBla VPN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BlaBla VPN - Privacy Protection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BlaBla VPN - Your Privacy, Our Priority",
    description:
      "Free, secure VPN with strict no-logs policy. Protect your online privacy with military-grade encryption.",
    images: ["/og-image.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#3b82f6" },
    { media: "(prefers-color-scheme: dark)", color: "#1e40af" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
