import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Garamond } from "next/font/google";

const cormorantGaramond = Cormorant_Garamond({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
});

export const metadata: Metadata = {
  title: "Max & Jessica's Wedding",
  description: "Welcome to our wedding website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cormorantGaramond.className}`}>{children}</body>
    </html>
  );
}
