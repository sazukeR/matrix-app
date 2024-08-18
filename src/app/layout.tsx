import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
 title: "Matrix App",
 description: "Rotating Numerical Matrix",
 keywords: [
  "Matrix",
  "Rotate",
  "Matriz Numerica",
  "Numerical Matrix",
  "Rotating Matrix",
 ],
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en">
   <body className={inter.className}>{children}</body>
  </html>
 );
}
