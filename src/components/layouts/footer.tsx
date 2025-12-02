"use client";

import SocialIcons from "../ui/social-icons";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-background py-6 md:py-8 px-4 sm:px-6 border-t border-gray/20">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center space-y-4 md:space-y-4">
                    <div className="flex flex-col md:flex-row w-full justify-between items-center gap-6 md:gap-0">
                        <div className="flex flex-col items-center md:items-start gap-2 md:gap-2">
                            <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-2 text-white">
                                <div className="flex items-center">
                                    <img
                                        src="logo-pattern.svg"
                                        alt="Logo"
                                        className="h-5 w-auto mr-2"
                                    />
                                    <span className="text-lg sm:text-xl font-bold">Njau</span>
                                </div>
                                <a href="mailto:jeffnjau01@gmail.com" target="_blank" className="text-xs sm:text-sm text-gray mt-1 sm:mt-0 md:pl-2 hover:underline focus:underline">
                                    jeffnjau01@gmail.com
                                </a>
                            </div>
                            <p className="text-gray text-sm sm:text-base text-center md:text-left">
                                Web designer and back-end developer
                            </p>
                        </div>

                        <div className="flex flex-col items-center md:items-end gap-2">
                            <span className="font-bold text-white text-base sm:text-lg">
                                Social Media
                            </span>
                            <SocialIcons />
                        </div>
                    </div>

                    <div className="mt-2 md:mt-4 w-full">
                        <p className="text-white/80 text-xs sm:text-sm text-center">
                            © Copyright {currentYear}. Made by Njau
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}