import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Posts App",
  description: "The app allows users to browse all posts and view the details of a selected post.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} `}>
      <nav className="navbar background">
        <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/posts">Posts</Link>
        </div>
    </nav>
        {children}
      </body>
    </html>
  );
}
