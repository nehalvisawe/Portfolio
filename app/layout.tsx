import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FooterSection from "./components/FooterSection";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nehal | Software Engineer Portfolio",
  description: "Explore the portfolio of Nehal, a Computer Engineering student specializing in DevOps and Cloud Computing. Featuring Next.js projects and Google Cloud Arcade achievements.",
  keywords: ["DevOps", "Cloud Computing", "Computer Engineering", "Next.js", "SmartEDU", "Google Arcade"],
};

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
        
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
