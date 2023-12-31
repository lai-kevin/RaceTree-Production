import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const silkScreen = localFont({ src: "../style/fonts/Silkscreen-Regular.ttf" });

export const metadata: Metadata = {
  title: "RaceTree",
  description: "A LinkTree for Sim Racing Enthusiasts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={silkScreen.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
