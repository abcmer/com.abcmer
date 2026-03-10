import type { Metadata } from "next";
import { Playfair_Display, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/TopNav";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adam Siemer — Senior AI Engineer & Tech Lead",
  description:
    "Senior AI Engineer and Tech Lead based in Chicago. Shipping AI-powered products at scale. 12+ years across McKinsey, Capital One, and PwC.",
  metadataBase: new URL("https://adamsiemer.com"),
  openGraph: {
    title: "Adam Siemer — Senior AI Engineer & Tech Lead",
    description:
      "Senior AI Engineer and Tech Lead based in Chicago. Shipping AI-powered products at scale.",
    type: "website",
    url: "https://adamsiemer.com",
    images: [
      {
        url: "/static/halfdome/halfdome1.jpg",
        width: 1200,
        height: 630,
        alt: "Adam Siemer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adam Siemer — Senior AI Engineer & Tech Lead",
    description:
      "Senior AI Engineer and Tech Lead based in Chicago. Shipping AI-powered products at scale.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${geistMono.variable}`}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
