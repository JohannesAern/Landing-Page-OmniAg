import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OmniAg - Smart Finance Management",
  description:
    "Manage your finances smarter with OmniAg. Track spending, investments, and achieve your financial goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/*
        Fonts: Poppins + Manrope loaded via Google Fonts link tag.
        next/font/google is skipped here because the build environment
        lacks network access. In production, swap these link tags with:
          import { Poppins, Manrope } from "next/font/google"
        and apply the resulting .variable classes to <html>.
      */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
