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
      <body className="antialiased dark:bg-[#121212] bg-[#F8F9FA]">
        <Header />
        <main className="my-8 w-full">{children}</main>
      </body>
    </html>
  );
}
