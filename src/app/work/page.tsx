import SectionHeader from '@/components/ui/section-header';
import WorkSection from '@/components/sections/work';
import PageHeader from '@/components/ui/page-header';
import Testimonials from '@/components/sections/testimonials';
import Impact from '@/components/sections/impact';
import ClientProjects from '@/components/sections/client-projects';

const WorkPage = () => {
    return (
        <main className="min-h-screen">
            <PageHeader
                title="Work Experience"
                description="An overview of my professional journey, client projects, and the impact I've made in the web development space."
            />

            {/* Professional Experience Section */}
            <section className="w-full max-w-7xl mx-auto py-12 md:py-20">
                <SectionHeader title="professional-experience" className="mx-auto px-4" />

                <WorkSection header={false} />
            </section>

            {/* Client Projects Section */}
            <ClientProjects />

            {/* Impact Statistics Section */}
            <Impact />

            {/* Testimonials Section */}
            <Testimonials />
        </main>
    );
};

export default WorkPage;