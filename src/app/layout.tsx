import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Crypto Track",
  description: "By Alison Barbosa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg">
        <Header />
        <main className="my-8">{children}</main>
      </body>
    </html>
  );
}
