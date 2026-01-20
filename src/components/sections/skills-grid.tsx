import SectionHeader from "../ui/section-header";
import SkillCard from "../ui/skill-card";
import { skills } from "@/data/skills";

const SkillsSectionAbout = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-12 md:py-20">
      <SectionHeader title="skills" />

      <div className="relative mt-8">
        <div className="flex flex-col gap-4 lg:flex-row">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSectionAbout;
