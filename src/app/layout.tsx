import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "E-Commerce Store - Talenton Assignment",
  description: "Next.js e-commerce application demonstrating different rendering strategies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2025 E-Commerce Store. Built with Next.js by Uddhav Saikia</p>
            <p className="text-sm text-gray-400 mt-2">Talenton Assignment - October 28, 2025</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
