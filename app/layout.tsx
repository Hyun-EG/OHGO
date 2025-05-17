import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SplashProvider from "./(components)/splash_screen/_components/SplashProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OH, GO!",
  description: "...",
  themeColor: "#ffffff",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/icons/pwa-icons/icon-logo-pwa.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SplashProvider>{children}</SplashProvider>
      </body>
    </html>
  );
}
