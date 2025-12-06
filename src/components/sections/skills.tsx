import Image from 'next/image';
import SectionHeader from '../ui/section-header';
import SkillCard from '../ui/skill-card';
import { skills } from '@/data/skills';

const SkillsSection = () => {
    const firstColumn = skills.slice(0, 1); // Top row only
    const secondColumn = skills.slice(1, 3); // Two rows
    const thirdColumn = skills.slice(3, 6); // Three rows (or however many are left)

    return (
        <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20">
            <SectionHeader title="skills" hero={true} />

            <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-40">
                {/* Left side with pattern image - Hidden on small/medium screens */}
                <div className="hidden lg:block lg:w-2/5 relative">
                    <div className="relative h-full min-h-[250px] lg:min-h-[300px]">
                        <Image
                            src="/skill-pattern.svg"
                            alt="skill pattern"
                            fill
                            className="object-fill object-center"
                        />
                    </div>
                </div>

                {/* Right side with cards - Full width on small/medium screens */}
                <div className="w-full lg:w-1/2">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="space-y-6">
                            {firstColumn.map((skill) => (
                                <SkillCard key={skill.id} skill={skill} />
                            ))}
                        </div>

                        <div className="space-y-6">
                            {secondColumn.map((skill) => (
                                <SkillCard key={skill.id} skill={skill} />
                            ))}
                        </div>

                        <div className="space-y-6">
                            {thirdColumn.map((skill) => (
                                <SkillCard key={skill.id} skill={skill} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;