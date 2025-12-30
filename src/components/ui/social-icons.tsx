"use client";

import { IconItem, SocialIconsProps } from "@/types";
import { Github, Twitter, Linkedin, Slack } from "lucide-react";
import { FaDiscord, FaReddit } from "react-icons/fa";

const defaultItems: IconItem[] = [
    { href: "https://github.com/Njau-dev", label: "GitHub", Icon: Github },
    { href: "https://x.com/dzeph01", label: "Twitter", Icon: Twitter },
    { href: "https://linkedin.com/in/jeff-njau", label: "LinkedIn", Icon: Linkedin },
    { href: "https://discord.com/users/njau_dev", label: "Discord", Icon: FaDiscord },
    { href: "https://reddit.com/user/scented_dustbin", label: "Reddit", Icon: FaReddit }
];

export default function SocialIcons({ size = 20, className = "", items = defaultItems }: SocialIconsProps) {
    return (
        <ul className={`flex gap-4 mt-2 ${className}`}>
            {items.map((item) => (
                <li key={item.label}>
                    <a
                        href={item.href}
                        aria-label={item.label}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray hover:text-white "
                    >
                        <item.Icon size={size} />
                    </a>
                </li>
            ))}
        </ul>
    );
}