import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ATHENS — The Age of Blood",
  description:
    "An immersive journey through an alternate ancient Athens.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}