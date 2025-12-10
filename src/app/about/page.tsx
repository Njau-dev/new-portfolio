import AboutSection from '@/components/sections/about';
import FunFactsSection from '@/components/sections/fun-facts';
import SkillsGridSection from '@/components/sections/skills-grid';
import PageHeader from '@/components/ui/page-header';

const AboutPage = () => {
    return (
        <main className="min-h-screen">
            <PageHeader title="about me" description='Who am I?' />

            <AboutSection header={false} />

            <SkillsGridSection />

            <FunFactsSection />
        </main>
    );
};

export default AboutPage;