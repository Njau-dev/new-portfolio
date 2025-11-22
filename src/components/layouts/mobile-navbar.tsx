"use client";

import { useState } from "react";
import HeaderLink from "../ui/header-link";
import Link from "next/link";
import { XIcon } from "lucide-react";
import SocialIcons from "../ui/social-icons";

interface MobileNavbarProps {
    navItems: Array<{ label: string; href: string }>;
    activeSection: string;
    onItemClick: (label: string) => void;
}

export default function MobileNavbar({
    navItems,
    activeSection,
    onItemClick
}: MobileNavbarProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (label: string) => {
        onItemClick(label);
        setIsOpen(false);
    };

    return (
        <div className="md:hidden">
            {/* Hamburger Button */}
            <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
            >
                <div className="w-5 h-5 flex flex-col justify-between items-end">
                    <span
                        className={`block h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2.5" : ""
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-2/3 bg-current transition duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-1/3 bg-current transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2.5" : ""
                            }`}
                    />
                </div>
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-background flex flex-col">
                    <div>
                        {/* Close button and header */}
                        <div className="flex justify-between items-center p-6">
                            <Link href="/" className="flex gap-4 items-center">
                                <img src="logo-pattern.svg" alt="logo" className="h-6 w-auto" />
                                <span className="font-bold text-white">Njau</span>
                            </Link>
                            <button
                                onClick={toggleMenu}
                                className="p-2 rounded-md text-gray hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray"
                                aria-label="Close menu"
                            >
                                <XIcon />
                            </button>
                        </div>
                        {/* Navigation Links */}
                        <div className="flex flex-col p-6 space-y-6">
                            {navItems.map((item) => (
                                <div key={item.label} className="pb-4">
                                    <HeaderLink
                                        label={item.label}
                                        href={item.href}
                                        active={activeSection === item.label}
                                        onClick={() => handleItemClick(item.label)}
                                        className="text-xl"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center w-full mt-4">
                        <SocialIcons className="py-8" />
                    </div>
                </div>
            )}
        </div>
    );
}