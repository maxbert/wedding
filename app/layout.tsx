import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Great_Vibes } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
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
      <body className={`${inter.className} ${greatVibes.variable}`}>{children}</body>
    </html>
  );
}
