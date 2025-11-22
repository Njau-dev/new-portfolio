"use client";

import { Github, Twitter, Linkedin, Slack } from "lucide-react";

interface IconItem {
    href: string;
    label: string;
    Icon: any;
}

interface SocialIconsProps {
    size?: number;
    className?: string;
    items?: IconItem[];
}

const defaultItems: IconItem[] = [
    { href: "https://github.com/your-username", label: "GitHub", Icon: Github },
    { href: "https://twitter.com/your-username", label: "Twitter", Icon: Twitter },
    { href: "https://linkedin.com/in/your-username", label: "LinkedIn", Icon: Linkedin },
    { href: "https://slack.com/", label: "Slack", Icon: Slack },
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