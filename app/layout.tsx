import type { Metadata } from "next";
import localFont from "next/font/local";
import { CursorGlow } from "@/components/cursor-glow";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ehsan Ranjbari — Robotics & Software Engineer",
  description:
    "Curriculum vitae of Ehsan Ranjbari — robotics and software engineer working on digital twins, autonomous navigation, and humanoid teleoperation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-neutral-100`}
      >
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
