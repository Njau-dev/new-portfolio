import Image from 'next/image';
import SectionHeader from '../ui/section-header';
import { funFacts } from '@/data/fun-facts';

const FunFactsSection = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20">
            <SectionHeader title="my-fun-facts" />

            <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-40 mt-8">
                {/* Left side - Fun facts grid */}
                <div className="w-full lg:w-3/5">
                    <div className="flex flex-wrap gap-4">
                        {funFacts.map((fact) => (
                            <div
                                key={fact.id}
                                className="border border-gray/70 bg-background px-2 py-3 text-gray text-sm hover:border-primary transition-colors duration-300 w-fit"
                            >
                                {fact.text}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right side - Pattern decorations - Hidden on small/medium screens */}
                <div className="hidden lg:block lg:w-2/5 relative">
                    <div className="space-y-8 sticky top-8 ">
                        {/* Top pattern */}
                        <div className="relative h-[100px] w-full flex justify-end">
                            <div className="relative w-[120px] h-full">
                                <Image
                                    src="/dots.svg"
                                    alt="decorative dots"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Middle pattern */}
                        <div className="relative h-[150px] w-full flex justify-center">
                            <div className="relative w-[130px] h-full">
                                <Image
                                    src="/pattern.svg"
                                    alt="decorative boxes"
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

export default FunFactsSection;