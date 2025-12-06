import Image from 'next/image';
import SectionHeader from '@/components/ui/section-header';
import WorkCard from '@/components/ui/work-card';
import ClientProjectCard from '@/components/ui/client-project-card';
import { workExperiences, clientProjects } from '@/data/work';
import WorkSection from '@/components/sections/work';
import PageHeader from '@/components/ui/page-header';

const WorkPage = () => {
    return (
        <main className="min-h-screen">
            <PageHeader
                title="Work Experience"
                description="An overview of my professional journey, client projects, and the impact I've made in the web development space."
            />

            {/* Professional Experience Section */}
            <section className="w-full max-w-7xl mx-auto py-12 md:py-20">
                <SectionHeader title="professional-experience" className="mx-auto px-6" />

                <WorkSection header={false} />
            </section>

            {/* Client Projects Section */}
            <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20">
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

                        {/* Decorative pattern */}
                        <div className="hidden lg:block absolute -left-32 top-20 w-32 h-32 opacity-20">
                            <Image
                                src="/logo-pattern.svg"
                                alt="decorative logo pattern"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>


            {/* Statistics Section */}
            <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20">
                <SectionHeader title="impact" hero={false} />

                <div className="border border-gray/70 bg-background p-8 md:p-12 relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                            Impact By The Numbers
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <p className="text-accent text-4xl md:text-5xl font-bold mb-2">3+</p>
                                <p className="text-gray text-sm">Years Experience</p>
                            </div>
                            <div className="text-center">
                                <p className="text-accent text-4xl md:text-5xl font-bold mb-2">25+</p>
                                <p className="text-gray text-sm">Projects Completed</p>
                            </div>
                            <div className="text-center">
                                <p className="text-accent text-4xl md:text-5xl font-bold mb-2">96%</p>
                                <p className="text-gray text-sm">Client Satisfaction</p>
                            </div>
                            <div className="text-center">
                                <p className="text-accent text-4xl md:text-5xl font-bold mb-2">15+</p>
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
            <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20">
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
                                    <span className="text-accent text-4xl">"</span>
                                </div>
                                <p className="text-gray italic mb-6 leading-relaxed">
                                    {project.testimonial?.text}
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                                        <span className="text-accent font-bold">
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