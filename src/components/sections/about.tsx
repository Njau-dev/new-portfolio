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
                        Hello, i'm <span className="text-primary">Jeff Njau</span>!
                    </h1>

                    <div className="space-y-4 text-gray">
                        <p className="leading-relaxed">
                            I'm a self-taught front-end developer based in Kyiv, Ukraine.
                            I can develop responsive websites from scratch and raise them
                            into modern user-friendly web experiences.
                        </p>

                        <p className="leading-relaxed">
                            Transforming my creativity and knowledge into a websites has
                            been my passion for over a year. I have been helping various
                            clients to establish their presence online. I always strive
                            to learn about the newest technologies and frameworks.
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