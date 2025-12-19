// components/layouts/social-sidebar.tsx
import Link from "next/link";
import { Github, Linkedin, MessageCircle } from "lucide-react";
import { FaReddit, FaWhatsapp } from "react-icons/fa";

export default function SocialSidebar() {
    const socials = [
        {
            name: "GitHub",
            icon: <Github className="w-5 h-5" />,
            href: "https://github.com/Njau-dev"
        },
        {
            name: "LinkedIn",
            icon: <Linkedin className="w-5 h-5" />,
            href: "https://linkedin.com/in/jeff-njau"
        },
        {
            name: "Reddit",
            icon: <FaReddit className="w-5 h-5" />,
            href: "https://reddit.com/user/yourusername"
        },
        {
            name: "WhatsApp",
            icon: <FaWhatsapp className="w-5 h-5" />,
            href: "https://wa.me/+254705984048"
        },
    ];

    return (
        <aside className="hidden xl:flex bg-background px-2 pb-2 fixed left-10 top-0 z-40">
            <div className="flex flex-col items-center gap-6">

                {/* Vertical Line */}
                <div className="w-0.5 h-24 bg-gray"></div>

                {/* Social Icons */}
                {socials.map((social) => (
                    <Link
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray/70 transition-all duration-300 hover:scale-110 hover:text-white"
                        aria-label={social.name}
                        title={social.name}
                    >
                        {social.icon}
                    </Link>
                ))}
            </div>
        </aside>
    );
}