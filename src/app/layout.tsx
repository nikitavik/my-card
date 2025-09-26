import { Geist, Geist_Mono } from "next/font/google";

import { JsonScheema } from "@/shared/lib";

import { metadata, viewport } from "./lib/metadata";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Export metadata and viewport from the metadata module
export { metadata, viewport };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonScheema />
        {children}
      </body>
    </html>
  );
}
