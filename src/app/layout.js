import { Geist, Geist_Mono } from "next/font/google";
import contents from "@/data/contents.json";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: contents.website.title,
  description: contents.website.description,
  keywords: contents.website.keywords,
  author: contents.website.author,

 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
