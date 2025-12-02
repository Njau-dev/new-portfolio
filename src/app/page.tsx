import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contacts";
import Hero from "@/components/sections/hero";
import ProjectsSection from "@/components/sections/projects";
import SkillsSection from "@/components/sections/skills";
import WorkSection from "@/components/sections/work";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProjectsSection header />
      <SkillsSection />
      <AboutSection header />
      <WorkSection header />
      <ContactSection header />
    </div>
  );
}
