import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter-font",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Metro",
  description:
    "Metro er en server for rollespill i det populære spillet, GTA V.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased font-inter`}>
        <main className="bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
