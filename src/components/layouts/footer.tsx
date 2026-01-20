"use client";

import Image from "next/image";
import SocialIcons from "../ui/social-icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-gray/20 relative top-20 w-full border-t px-4 py-6 sm:px-6 md:py-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center space-y-4 md:space-y-4">
          <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row md:gap-0">
            <div className="flex flex-col items-center gap-2 md:items-start md:gap-4">
              <div className="flex flex-col items-center space-x-0 text-white sm:flex-row sm:space-x-2">
                <div className="flex items-center">
                  <Image
                    src="/logo-pattern.svg"
                    alt="Logo"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <span className="text-lg font-bold sm:text-xl">Njau</span>
                </div>
                <a
                  href="mailto:jeffnjau01@gmail.com"
                  target="_blank"
                  className="text-gray mt-1 text-xs hover:underline focus:underline sm:mt-0 sm:text-sm md:pl-2"
                >
                  jeffnjau01@gmail.com
                </a>
              </div>
              <p className="text-gray text-center text-sm sm:text-base md:text-left">
                Full-Stack Developer
              </p>
            </div>

            <div className="flex flex-col items-center gap-2 md:items-end">
              <span className="text-base font-medium text-white sm:text-lg">Connect with me</span>
              <SocialIcons />
            </div>
          </div>

          <div className="mt-2 w-full md:mt-4">
            <p className="text-center text-xs text-white/80 sm:text-sm">
              © Copyright {currentYear}. Built with Next.js, Tailwind CSS, and ❤️.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
