"use client";

import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";

type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> & {
    variant?: "primary" | "secondary";
    href?: string;
    replace?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
};

export default function Button({
    children,
    variant = "primary",
    className,
    href,
    replace = false,
    onClick,
    type = "button",
    ...props
}: ButtonProps) {
    const baseStyles =
        "px-4 py-2 font-medium transition-colors text-sm sm:text-base";

    const variants = {
        primary: "bg-background border border-primary text-white hover:bg-primary/20",
        secondary:
            "border border-gray text-gray hover:bg-gray/20",
    };

    const classes = cn(baseStyles, variants[variant], className);

    // If href provided, render a Next.js Link for client-side navigation.
    if (href) {
        // Cast remaining props to anchor props to avoid invalid attributes on Link.
        const anchorProps = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
        return (
            <Link href={href} replace={replace} className={classes} onClick={onClick} {...anchorProps}>
                {children}
            </Link>
        );
    }

    // Otherwise render a normal button
    return (
        <button className={classes} onClick={onClick} type={type} {...props}>
            {children}
        </button>
    );
}
