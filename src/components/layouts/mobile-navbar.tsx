"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import HeaderLink from "../ui/header-link";
import Link from "next/link";
import { XIcon } from "lucide-react";
import SocialIcons from "../ui/social-icons";
import { MobileNavbarProps } from "@/types";
import ThemeControls from "./theme-controls";

export default function MobileNavbar({
    navItems,
    activeSection,
    onItemClick
}: MobileNavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [portalEl, setPortalEl] = useState<HTMLElement | null>(null);
    const [rendered, setRendered] = useState(false);
    const [visible, setVisible] = useState(false);

    const toggleMenu = () => {
        setIsOpen((s) => !s);
    };

    const handleItemClick = (label: string) => {
        onItemClick(label);
        setIsOpen(false);
    };

    // create a portal container once on mount
    useEffect(() => {
        const id = "mobile-menu-portal";
        let el = document.getElementById(id);
        if (!el) {
            el = document.createElement("div");
            el.id = id;
            document.body.appendChild(el);
        }
        setPortalEl(el);

        return () => {
            // don't remove a portal created elsewhere; remove only if we appended it
            // (safest to leave the element in place if other instances might use it)
        };
    }, []);

    // manage rendered/visible states for smooth enter/exit animations
    useEffect(() => {
        if (isOpen) {
            setRendered(true);
            // next tick, show
            const t = window.setTimeout(() => setVisible(true), 20);
            return () => window.clearTimeout(t);
        } else {
            // hide first, then unmount after animation
            setVisible(false);
            const t = window.setTimeout(() => setRendered(false), 320);
            return () => window.clearTimeout(t);
        }
    }, [isOpen]);

    // disable body scroll while menu is rendered
    useEffect(() => {
        if (typeof document === "undefined") return;
        const prev = document.body.style.overflow;
        if (rendered) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = prev || "";
        }
        return () => {
            document.body.style.overflow = prev || "";
        };
    }, [rendered]);

    // Overlay UI to be portaled
    const Overlay = (
        <div className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-sm flex flex-col transition-transform duration-300 ease-in-out ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
            <div>
                {/* Close button and header */}
                <div className="flex justify-between items-center p-6">
                    <Link href="/" onClick={() => handleItemClick("home")} className="flex gap-4 items-center">
                        <img src="logo-pattern.svg" alt="logo" className="h-6 w-auto" />
                        <span className="font-bold text-white">Njau</span>
                    </Link>
                    <button
                        onClick={toggleMenu}
                        className="p-2 rounded-md text-gray hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray z-50"
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

            <div className="flex items-center justify-center">
                <ThemeControls compact={true} />
            </div>
        </div>
    );

    return (
        <div className="md:hidden">
            {/* Hamburger Button */}
            <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray relative z-50"
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

            {/* Portal overlay (renders at document.body level) */}
            {portalEl && rendered && createPortal(Overlay, portalEl)}
        </div>
    );
}