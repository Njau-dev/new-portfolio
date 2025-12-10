"use client";

import { useState, useEffect } from "react";
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

    useEffect(() => {
        // Check the current URL and set the active section accordingly
        const currentPath = window.location.pathname;
        const activeItem = navItems.find((item) => item.href === currentPath);
        if (activeItem) {
            setActiveSection(activeItem.label);
        }
    }, []);

    const handleItemClick = (label: string) => {
        setActiveSection(label);
    };

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 w-full bg-background backdrop-blur-md py-4 px-6 transition-transform duration-300"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <button onClick={() => handleItemClick("home")} className="shrink-0">
                    <Logo />
                </button>

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