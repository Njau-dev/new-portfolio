"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import HeaderLink from "../ui/header-link";
import Link from "next/link";
import { XIcon } from "lucide-react";
import Image from "next/image";
import SocialIcons from "../ui/social-icons";
import { MobileNavbarProps } from "@/types";
import ThemeControls from "./theme-controls";

export default function MobileNavbar({ navItems, activeSection, onItemClick }: MobileNavbarProps) {
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

    return () => {
      // don't remove a portal created elsewhere; remove only if we appended it
      // (safest to leave the element in place if other instances might use it)
    };
  }, []);

  // Set portal element in effect callback to avoid cascading renders
  useEffect(() => {
    const id = "mobile-menu-portal";
    const el = document.getElementById(id);
    if (el) {
      const t = window.setTimeout(() => setPortalEl(el), 0);
      return () => window.clearTimeout(t);
    }
  }, []);

  // manage rendered/visible states for smooth enter/exit animations
  useEffect(() => {
    if (isOpen) {
      // next tick, show
      const t = window.setTimeout(() => {
        setRendered(true);
        window.setTimeout(() => setVisible(true), 0);
      }, 0);
      return () => window.clearTimeout(t);
    } else {
      // hide first, then unmount after animation
      const t = window.setTimeout(() => {
        setVisible(false);
        window.setTimeout(() => setRendered(false), 320);
      }, 0);
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
    <div
      className={`bg-background/95 fixed inset-0 z-40 flex flex-col backdrop-blur-sm transition-transform duration-300 ease-in-out ${visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
    >
      <div>
        {/* Close button and header */}
        <div className="flex items-center justify-between p-6">
          <Link
            href="/"
            onClick={() => handleItemClick("home")}
            className="flex items-center gap-4"
          >
            <Image
              src="/logo-pattern.svg"
              alt="logo"
              width={24}
              height={24}
              className="h-6 w-auto"
            />
            <span className="font-bold text-white">Njau</span>
          </Link>
          <button
            onClick={toggleMenu}
            className="text-gray focus:ring-gray z-50 rounded-md p-2 hover:text-white focus:ring-2 focus:outline-none focus:ring-inset"
            aria-label="Close menu"
          >
            <XIcon />
          </button>
        </div>
        {/* Navigation Links */}
        <div className="flex flex-col space-y-6 p-6">
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

      <div className="mt-4 flex w-full flex-col items-center">
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
        className="text-gray focus:ring-gray relative z-50 rounded-md p-2 hover:text-white focus:ring-2 focus:outline-none focus:ring-inset"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <div className="flex h-5 w-5 flex-col items-end justify-between">
          <span
            className={`block h-0.5 w-full transform bg-current transition duration-300 ease-in-out ${
              isOpen ? "translate-y-2.5 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-2/3 bg-current transition duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-1/3 transform bg-current transition duration-300 ease-in-out ${
              isOpen ? "-translate-y-2.5 -rotate-45" : ""
            }`}
          />
        </div>
      </button>

      {/* Portal overlay (renders at document.body level) */}
      {portalEl && rendered && createPortal(Overlay, portalEl)}
    </div>
  );
}
