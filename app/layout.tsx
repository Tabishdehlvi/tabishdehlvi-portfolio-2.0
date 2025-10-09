import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Tabish Dehlvi | Portfolio | Full Stack MERN Developer",
  description:
    "Portfolio of a Full Stack MERN Developer with 2 years experience building complex applications like HRMS, LMS, and Multi-Vendor Marketplace",
  icons: {
    icon: "/favicon.png", // 👈 or /favicon.ico
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
