import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital by one24",
  description:
    "one24-digital is a digital agency that provides high-quality digital services.",
  icons: {
    icon: [
      {
        url: "/company-logos/One24OS-trans.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/company-logos/One24OS-trans.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
  appLinks: {
    web: {
      url: 'https://one24-digital.vercel.app/',
      should_fallback: true,
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
