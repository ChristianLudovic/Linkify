import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import font from '@next/font/local'
const grifter = font({ src: '../public/fonts/grifterbold.otf', letterSpacing: '8%'});

export const metadata = {
  title: "Linkify",
  description: "Live football streaming platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={grifter.className}>{children}</body>
    </html>
  );
}
