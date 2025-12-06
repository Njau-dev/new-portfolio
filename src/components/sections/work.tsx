import Image from 'next/image';
import SectionHeader from '../ui/section-header';
import WorkCard from '../ui/work-card';
import { workExperiences } from '@/data/work';
import { SectionProps } from '@/types';

const WorkSection = ({ header }: SectionProps) => {
    return (
        <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20">
            {header ? <SectionHeader title="work" hero={true} /> : null}

            <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-40 mt-8">
                {/* Left side - Work cards */}
                <div className="w-full lg:w-3/5">
                    <div className="space-y-6">
                        {workExperiences.map((work) => (
                            <WorkCard key={work.id} work={work} showLink />
                        ))}
                    </div>
                </div>

                <div className="hidden lg:block lg:w-2/5 relative">
                    <div className="space-y-8 sticky top-8">
                        {/* Top pattern */}
                        <div className="relative h-[180px] w-full opacity-70">
                            <Image
                                src="/pattern.svg"
                                alt="decorative pattern"
                                fill
                                className="object-contain object-left"
                            />
                        </div>

                        <div className="relative h-[150px] w-full">
                            <Image
                                src="/dots.svg"
                                alt="decorative dots"
                                fill
                                className="object-contain object-right"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden lg:block relative mt-12">
                <div className="absolute -left-20 top-0 w-32 h-32 opacity-50">
                    <Image
                        src="/logo-pattern.svg"
                        alt="decorative logo pattern"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default WorkSection;