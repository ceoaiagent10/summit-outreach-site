import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Summit Outreach — Commercial Trucking Insurance",
  description:
    "Same-day quotes from 9 commercial trucking insurance markets. Built for growing fleets across TX, FL, and CA. Operating Carrier Vault (insurance shopping) and Fleet Advocate (free CSA safety program).",
  metadataBase: new URL("https://summitoutreach.com"),
  openGraph: {
    title: "Summit Outreach — Commercial Trucking Insurance",
    description: "Same-day quotes from 9 commercial trucking insurance markets.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
