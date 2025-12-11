import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '../ui/section-header';
import { Github, Twitter, Linkedin, Slack, Mail } from 'lucide-react';
import { BsWhatsapp } from 'react-icons/bs';

interface MediaItem {
    name: string;
    username: string;
    href: string;
    Icon: typeof Github | typeof Twitter | typeof Linkedin | typeof Slack | typeof BsWhatsapp;
}

const mediaItems: MediaItem[] = [
    {
        name: 'Whatsapp',
        username: 'Jeff Njau',
        href: 'https://wa.me/254705984048',
        Icon: BsWhatsapp
    },
    {
        name: 'Email',
        username: 'Jeff Njau',
        href: 'mailto:jeffnjau01@gmail.com',
        Icon: Mail
    },
    {
        name: 'Github',
        username: '@Njau-dev',
        href: 'https://github.com/Njau-dev',
        Icon: Github
    },
    {
        name: 'Twitter',
        username: '@your-username',
        href: 'https://twitter.com/your-username',
        Icon: Twitter
    },
    {
        name: 'Linkedin',
        username: '@Jeff-njau',
        href: 'https://linkedin.com/in/jeff-njau',
        Icon: Linkedin
    },
    {
        name: 'Slack',
        username: '@your-workspace',
        href: 'https://slack.com/',
        Icon: Slack
    },

];

const AllMediaSection = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20">
            <SectionHeader title="all-media" />

            <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-40 mt-8">
                {/* Left side - Media items */}
                <div className="w-full lg:w-3/5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {mediaItems.map((item) => (
                            <div
                                key={item.name}
                                className="border border-gray/70 bg-background p-4 hover:border-primary transition-colors duration-300"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <item.Icon size={24} className="text-gray" />
                                        <span className="text-gray">{item.username}</span>
                                    </div>
                                    <Link
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-gray hover:text-primary transition-colors text-sm"
                                    >
                                        connect
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right side - Pattern decorations - Hidden on small/medium screens */}
                <div className="hidden lg:block lg:w-2/5 relative">
                    <div className="space-y-8 sticky top-8">
                        {/* Top pattern - dots */}
                        <div className="relative h-[120px] w-full flex justify-end">
                            <div className="relative w-[140px] h-full">
                                <Image
                                    src="/dots.svg"
                                    alt="decorative dots"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Bottom pattern - logo pattern */}
                        <div className="relative h-[140px] w-full flex justify-center">
                            <div className="relative w-[150px] h-full opacity-30">
                                <Image
                                    src="/logo-pattern.svg"
                                    alt="decorative logo pattern"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllMediaSection;