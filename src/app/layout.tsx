import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdul Baseer | Frontend Developer & UI Designer",
  description: "Professional portfolio of Abdul Baseer, specializing in modern web development, UI/UX design, and specialized technical services including PC building and network security.",
  keywords: ["Frontend Developer", "Next.js Portfolio", "UI/UX Designer", "PC Builder", "Code-With-Abdul"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`transition-colors dark:text-white relative ${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          {/* Global Background Atmospheric Glows */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-[-10%] left-[10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '4s' }} />
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '3s' }} />
            <div className="absolute bottom-[10%] right-[10%] w-[35%] h-[35%] bg-primary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }} />
            <div className="absolute top-[10%] right-[10%] w-[25%] h-[25%] bg-primary/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-[20%] left-[20%] w-[30%] h-[30%] bg-secondary/10 rounded-full blur-[110px] animate-pulse" style={{ animationDelay: '2.5s' }} />
          </div>

          <Navbar />
          <main className="min-h-screen pt-24">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
