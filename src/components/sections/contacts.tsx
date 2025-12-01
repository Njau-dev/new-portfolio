import SectionHeader from '../ui/section-header';
import Button from '../ui/button';

interface ContactInfo {
    discord: string;
    email: string;
    location?: string;
}

interface ContactSectionProps {
    contactInfo?: ContactInfo;
    showMessageOptions?: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({
    contactInfo = {
        discord: 'lElias#3519',
        email: 'elias@elias.me',
        location: 'Kyiv, Ukraine' // Optional, can be omitted if not needed
    },
    showMessageOptions = true
}) => {
    return (
        <section className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24">
            <SectionHeader title="#contacts" />

            <div className="flex flex-col lg:flex-row gap-12 md:gap-16 lg:gap-24 mt-8">
                {/* Left side - Contact description */}
                <div className="lg:w-1/2">
                    <div className="text-gray space-y-4">
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
                </div>

                {/* Right side - Contact information and message options */}
                <div className="lg:w-1/2">
                    {/* Contact info section */}
                    <div className="mb-8">
                        <h3 className="text-white font-medium mb-4">
                            Message me here
                        </h3>

                        <div className="space-y-3">
                            {/* Discord */}
                            <div className="flex items-center gap-3">
                                <span className="text-gray">📌</span>
                                <span className="text-white">{contactInfo.discord}</span>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-3">
                                <span className="text-gray">📍</span>
                                <a
                                    href={`mailto:${contactInfo.email}`}
                                    className="text-white hover:text-accent transition-colors"
                                >
                                    {contactInfo.email}
                                </a>
                            </div>

                            {/* Optional Location */}
                            {contactInfo.location && (
                                <div className="flex items-center gap-3">
                                    <span className="text-gray">📍</span>
                                    <span className="text-white">{contactInfo.location}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Message options - Conditionally rendered */}
                    {showMessageOptions && (
                        <div className="flex flex-wrap gap-4">
                            {/* Email Button */}
                            <a href={`mailto:${contactInfo.email}`}>
                                <Button variant="primary">
                                    Email
                                </Button>
                            </a>

                            {/* WhatsApp Button */}
                            <a
                                href="https://wa.me/1234567890" // Replace with actual WhatsApp number
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="primary">
                                    WhatsApp
                                </Button>
                            </a>

                            {/* LinkedIn Button */}
                            <a
                                href="https://linkedin.com/in/elias" // Replace with actual LinkedIn URL
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="primary">
                                    LinkedIn
                                </Button>
                            </a>

                            {/* Slack Button - Optional */}
                            <a
                                href="https://join.slack.com/elias" // Replace with actual Slack URL
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="secondary">
                                    Slack
                                </Button>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ContactSection;