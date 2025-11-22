"use client";

import { useState } from "react";
import Link from "next/link";
import HeaderLink from "../ui/header-link";
import MobileNavbar from "./mobile-navbar";

function Logo() {
    return (
        <Link href="/" className="flex gap-4 items-center">
            <img src="logo-pattern.svg" alt="logo" className="h-6 w-auto" />
            <span className="font-bold text-white">Njau</span>
        </Link>
    );
}

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("");

    const navItems = [
        { label: "home", href: "/" },
        { label: "work", href: "/work" },
        { label: "projects", href: "/projects" },
        { label: "about-me", href: "/about" },
        { label: "contacts", href: "/contacts" },
    ];

    const handleItemClick = (label: string) => {
        setActiveSection(label);
    };

    return (
        <nav className="w-full bg-background py-4 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="shrink-0">
                    <Logo />
                </div>

                {/* Desktop Navigation Links - Hidden on mobile */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navItems.map((item) => (
                        <HeaderLink
                            key={item.label}
                            label={item.label}
                            href={item.href}
                            active={activeSection === item.label}
                            onClick={() => handleItemClick(item.label)}
                        />
                    ))}
                </div>

                {/* Mobile Navigation - Visible only on mobile */}
                <MobileNavbar
                    navItems={navItems}
                    activeSection={activeSection}
                    onItemClick={handleItemClick}
                />
            </div>
        </nav>
    );
}