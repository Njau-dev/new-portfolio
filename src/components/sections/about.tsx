import Image from 'next/image';
import SectionHeader from '../ui/section-header';
import Button from '../ui/button';
import { SectionProps } from '@/types';

const AboutSection = ({ header }: SectionProps) => {
    return (
        <section className="w-full max-w-7xl mx-auto px-6 py-12 md:pt-20">
            {header ? <SectionHeader title="about" hero={true} /> : null}

            <div className="lg:w-auto flex flex-col lg:flex-row items-start gap-8 md:gap-12 lg:gap-40 mt-8">
                {/* Left side - Content */}
                <div className="lg:w-1/2">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                        Hello, I&apos;m <span className="text-primary">Jeff Njau</span>!
                    </h1>

                    <div className="space-y-4 text-gray">
                        <p className="leading-relaxed">
                            I&apos;m a full-stack developer with a background in automotive engineering and sales, passionate about building technology solutions that solve real problems.
                        </p>

                        <p className="leading-relaxed">
                            I specialize in Laravel, React, Python, and PostgreSQL, and have experience designing secure APIs, architecting databases, and deploying scalable applications. I enjoy taking on multiple roles, learning continuously, and delivering impactful solutions for businesses and users.
                        </p>

                        <p className="leading-relaxed">
                            Over the years, I&apos;ve led projects from conception to production, mentoring teams, and collaborating with clients to turn ideas into working products. I&apos;m eager to continue growing while building innovative, high-quality software.
                        </p>
                    </div>

                    <div className="mt-8">
                        <Button variant="primary" href="/about">
                            Read more
                        </Button>
                    </div>
                </div>

                {/* Right side - Image */}
                <div className="w-full lg:w-1/2">
                    <div className="relative bg-background w-full h-[300px] md:h-[400px] lg:h-[600px] lg:transform lg:-translate-y-40">
                        <Image
                            src="/assets/about-image.png"
                            alt="Jeff Njau - Back-end Developer"
                            fill
                            className="object-contain object-center"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;