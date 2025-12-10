import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import Background from "@/components/layouts/background";
import SocialSidebar from "@/components/layouts/social-sidebar";


const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Software developer | Portfolio website of Jefferson Njau | Web designer and back-end developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} antialiased`}
      >
        {/* Background patterns - will show on all pages */}
        <Background />

        {/* Social sidebar */}
        <SocialSidebar />

        {/* Main content wrapper with relative positioning */}
        <div className="relative z-0">
          <Navbar />
          <div className="relative top-20 ">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
