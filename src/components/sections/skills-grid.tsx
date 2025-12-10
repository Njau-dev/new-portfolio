import Image from 'next/image';
import SectionHeader from '../ui/section-header';
import SkillCard from '../ui/skill-card';
import { skills } from '@/data/skills';

const SkillsSectionAbout = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20">
            <SectionHeader title="skills" />

            <div className="relative mt-8">
                <div className="flex flex-col lg:flex-row gap-4">
                    {skills.map((skill) => (
                        <SkillCard key={skill.id} skill={skill} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSectionAbout;