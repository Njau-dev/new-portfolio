"use client";

import Link from "next/link";
import { useState } from "react";

interface HeaderLinkProps {
    label: string;
    href: string;
    active?: boolean;
    onClick?: () => void;
    className?: string;
}

export default function HeaderLink({
    label,
    href,
    active = false,
    onClick,
    className = ""
}: HeaderLinkProps) {
    const [hovered, setHovered] = useState(false);

    const baseColor = active
        ? "text-white"
        : hovered
            ? "text-white"
            : "text-gray";

    const fontWeight = active ? "font-medium" : "font-normal";

    return (
        <Link
            href={href}
            onClick={() => onClick?.()}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`relative inline-block transition-all duration-200 ${baseColor} ${fontWeight} ${className}`}        >
            <span><span className="text-primary px-1">#</span>{label}</span>
        </Link>
    );
}
