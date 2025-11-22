"use client";

import { HeaderLinkProps } from "@/types";
import Link from "next/link";
import { useState } from "react";

export default function HeaderLink({
    label,
    href,
    active = false,
    onClick,
    className = ""
}: HeaderLinkProps) {
    const [hovered, setHovered] = useState(false);

    const baseColor = active
        ? "text-white font-semibold"
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
