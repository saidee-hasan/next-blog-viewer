import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Ensures fonts load faster and fallback is minimized
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Next.js Blog Viewer",
  description: "A responsive blog viewer application built with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-100 text-gray-900 font-sans">
        <Header />
        <main className="min-h-screen container mt-10 mx-auto px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
