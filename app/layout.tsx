import type { Metadata } from "next";
import { Geist, Geist_Mono, Viaoda_Libre } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const viaodaLibre = Viaoda_Libre({
  variable: "--font-viaoda-libre",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leonardo Asad",
  description: "Leonardo Asad Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${viaodaLibre} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
