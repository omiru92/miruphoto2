import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MIRU Portfolio",
  description: "Instagram-style photo portfolio"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
