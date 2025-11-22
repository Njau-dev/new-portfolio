"use client";

import SocialIcons from "../ui/social-icons";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-background py-8 px-6 border-t border-gray/20">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center space-y-4">
                    <div className="flex w-full justify-between">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center space-x-2 text-white">
                                <img src="logo-pattern.svg" alt="Logo" className="h-5 w-auto" />
                                <span className="text-xl font-bold">Njau</span>
                                <span className="text-sm text-gray md:pl-2">jeffnjau01@gmail.com</span>
                            </div>
                            <p className="text-gray-300 text-center">
                                Web designer and back-end developer
                            </p>
                        </div>
                        <div>
                            <span className="font-bold text-white">Social Media</span>
                            <SocialIcons />
                        </div>
                    </div>

                    <div className="mt-4">
                        {/* Copyright */}
                        <p className="text-gray-400 text-sm">
                            © Copyright {currentYear}. Made by Njau
                        </p>
                    </div>
                </div>
            </div>
        </footer >
    );
}