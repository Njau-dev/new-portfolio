import SectionHeader from '../ui/section-header';
import Button from '../ui/button';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { SectionProps } from '@/types';

const ContactSection = ({ header }: SectionProps) => {
    return (
        <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20">
            {header ? <SectionHeader title="contacts" /> : null}

            <div className="mt-8 w-full">
                <div className="flex flex-col lg:flex-row justify-between">
                    {/* Contact description */}
                    <div className="text-gray mb-12">
                        <p className="leading-relaxed">
                            I'm interested in freelance opportunities. However,
                        </p>
                        <p className="leading-relaxed">
                            if you have other request or question, don't
                        </p>
                        <p className="leading-relaxed">
                            hesitate to contact me
                        </p>
                    </div>
                    {/* Message me section */}
                    <div className="border border-gray/70 p-6 bg-background">
                        <h3 className="text-white text-lg font-medium mb-6">
                            Message me here
                        </h3>
                        <div className="space-y-4">
                            {/* Whatsapp */}
                            <div className="flex items-center gap-3 text-gray">
                                <FaWhatsapp size={24} />
                                <a href="https://wa.me/+254705984048" target="_blank" rel="noreferrer" className='hover:underline focus:underline'> Whatsapp </a>
                            </div>
                            {/* Email */}
                            <div className="flex items-center gap-3 text-gray">
                                <Mail size={24} />
                                <a href="mailto:jeffnjau01@gmail" target="_blank" rel="noreferrer" className='hover:underline focus:underline'> Email </a>
                            </div>
                            {/* linkedIn */}
                            <div className="flex items-center gap-3 text-gray">
                                <FaLinkedin size={24} />
                                <a href="https://www.linkedin.com/in/jeff-njau/" target="_blank" rel="noreferrer" className='hover:underline focus:underline'> LinkedIn </a>
                            </div>
                            {/* Github */}
                            <div className="flex items-center gap-3 text-gray">
                                <FaGithub size={24} />
                                <a href="https://github.com/Njau-dev" target="_blank" rel="noreferrer" className='hover:underline focus:underline'> Github </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;