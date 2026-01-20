import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { FaReddit, FaWhatsapp } from "react-icons/fa";

export default function SocialSidebar() {
  const socials = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/Njau-dev"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/jeff-njau"
    },
    {
      name: "Reddit",
      icon: <FaReddit className="h-5 w-5" />,
      href: "https://reddit.com/user/scented_dustbin"
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="h-5 w-5" />,
      href: "https://wa.me/+254705984048"
    }
  ];

  return (
    <aside className="bg-background fixed top-0 left-10 z-40 hidden px-2 pb-2 xl:flex">
      <div className="flex flex-col items-center gap-6">
        {/* Vertical Line */}
        <div className="bg-gray h-24 w-0.5"></div>

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
