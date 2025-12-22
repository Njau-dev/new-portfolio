import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import Background from "@/components/layouts/background";
import SocialSidebar from "@/components/layouts/social-sidebar";
import BackToTop from "@/components/layouts/back-to-top";
import ThemeControls from "@/components/layouts/theme-controls";
import ScrollProgress from "@/components/layouts/scroll-progress";
import PageTransitions from "@/components/layouts/page-transitions";


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
        {/* Social sidebar */}
        <SocialSidebar />

        {/* Desktop theme controls (visible on md+) */}
        <div className="hidden xl:flex fixed bottom-28 right-6 z-50 px-2 pb-2 bg-background">
          <ThemeControls />
        </div>

        {/* Scroll progress indicator */}
        <ScrollProgress />

        {/* Back to top button */}
        <BackToTop />

        {/* Main content wrapper with relative positioning */}
        <div className="relative z-0">
          {/* Background patterns - positioned relative to content height */}
          <Background />

          <Navbar />
          <div className="relative top-20 ">
            <PageTransitions>{children}</PageTransitions>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
