import Image from 'next/image';
import SectionHeader from '@/components/ui/section-header';
import ClientProjectCard from '@/components/ui/client-project-card';
import { clientProjects } from '@/data/work';
import WorkSection from '@/components/sections/work';
import PageHeader from '@/components/ui/page-header';
import AnimatedCounter from '@/components/ui/animated-counter';

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
            <section className="w-full max-w-7xl mx-auto px-4 py-12 md:py-20">
                <SectionHeader title="client-projects" />

                <div className="mt-8">
                    <p className="text-gray mb-8 max-w-3xl leading-relaxed">
                        I've had the privilege of working with amazing clients to bring their
                        visions to life. Here are some of the projects I'm most proud of,
                        showcasing diverse solutions across different industries.
                    </p>

                    <div className="relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {clientProjects.map((project) => (
                                <ClientProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* Statistics Section */}
            <section className="w-full max-w-7xl mx-auto px-4 py-12 md:py-20">
                <SectionHeader title="impact" hero={false} />

                <div className="border border-gray/70 bg-background p-8 md:p-12 relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                            Impact By The Numbers
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                {/* assume total months of experience is stored or calculated; using 44 months (~3yr8mo) as example */}
                                <AnimatedCounter target={44} monthsToYears duration={1400} className="text-4xl md:text-5xl font-bold mb-2" />
                                <p className="text-gray text-sm">Years Experience</p>
                            </div>
                            <div className="text-center">
                                <AnimatedCounter target={25} duration={1200} postfix="+" className="text-4xl md:text-5xl font-bold mb-2" />
                                <p className="text-gray text-sm">Projects Completed</p>
                            </div>
                            <div className="text-center">
                                <AnimatedCounter target={96} duration={1200} postfix="%" className="text-4xl md:text-5xl font-bold mb-2" />
                                <p className="text-gray text-sm">Client Satisfaction</p>
                            </div>
                            <div className="text-center">
                                <AnimatedCounter target={15} duration={1200} postfix="+" className="text-4xl md:text-5xl font-bold mb-2" />
                                <p className="text-gray text-sm">Happy Clients</p>
                            </div>
                        </div>
                    </div>

                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <Image
                            src="/pattern.svg"
                            alt="background pattern"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="w-full max-w-7xl mx-auto px-4 py-12 md:py-20">
                <SectionHeader title="testimonials" />

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {clientProjects
                        .filter(project => project.testimonial)
                        .map((project) => (
                            <div
                                key={project.id}
                                className="border border-gray/70 bg-background p-6"
                            >
                                <div className="mb-4">
                                    <span className="text-primary text-4xl">"</span>
                                </div>
                                <p className="text-gray italic mb-6 leading-relaxed">
                                    {project.testimonial?.text}
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                                        <span className="text-primary font-bold">
                                            {project.testimonial?.author.charAt(0)}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold">
                                            {project.testimonial?.author}
                                        </p>
                                        <p className="text-gray text-sm">
                                            {project.testimonial?.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </section>
        </main>
    );
};

export default WorkPage;