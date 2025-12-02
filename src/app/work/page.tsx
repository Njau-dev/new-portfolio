import Image from 'next/image';
import SectionHeader from '@/components/ui/section-header';
import WorkCard from '@/components/ui/work-card';
import ClientProjectCard from '@/components/ui/client-project-card';
import { workExperiences, clientProjects } from '@/data/work';
import WorkSection from '@/components/sections/work';

const WorkPage = () => {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20">
                <div className="relative">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                        My <span className="text-accent">Work</span> Experience
                    </h1>
                    <p className="text-gray text-lg md:text-xl max-w-2xl leading-relaxed">
                        A comprehensive overview of my professional journey, client projects,
                        and the impact I've made in the web development space.
                    </p>

                    {/* Decorative pattern */}
                    <div className="hidden lg:block absolute -right-20 top-0 w-40 h-40 opacity-30">
                        <Image
                            src="/dots-rectangle.svg"
                            alt="decorative pattern"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* Professional Experience Section */}
            <section className="w-full max-w-7xl">
                <SectionHeader title="professional-experience" className="mx-auto px-6" />

                <WorkSection header={false} />
            </section>

            {/* Client Projects Section */}
            <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20">
                <SectionHeader title="#client-projects" />

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

            {/* Skills Highlight Section */}
            <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20">
                <SectionHeader title="#core-competencies" />

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Technical Excellence */}
                    <div className="border border-gray/70 bg-background p-6">
                        <div className="mb-4">
                            <div className="w-12 h-12 border border-accent flex items-center justify-center mb-4">
                                <span className="text-accent text-2xl">⚡</span>
                            </div>
                            <h3 className="text-white text-xl font-semibold mb-3">
                                Technical Excellence
                            </h3>
                        </div>
                        <p className="text-gray text-sm leading-relaxed">
                            Proficient in modern web technologies with a focus on performance,
                            scalability, and best practices. Continuously learning and adapting
                            to new tools and frameworks.
                        </p>
                    </div>

                    {/* Client Success */}
                    <div className="border border-gray/70 bg-background p-6">
                        <div className="mb-4">
                            <div className="w-12 h-12 border border-accent flex items-center justify-center mb-4">
                                <span className="text-accent text-2xl">🎯</span>
                            </div>
                            <h3 className="text-white text-xl font-semibold mb-3">
                                Client Success
                            </h3>
                        </div>
                        <p className="text-gray text-sm leading-relaxed">
                            Committed to understanding client needs and delivering solutions
                            that exceed expectations. Track record of 96% client satisfaction
                            and long-term partnerships.
                        </p>
                    </div>

                    {/* Problem Solving */}
                    <div className="border border-gray/70 bg-background p-6">
                        <div className="mb-4">
                            <div className="w-12 h-12 border border-accent flex items-center justify-center mb-4">
                                <span className="text-accent text-2xl">🔧</span>
                            </div>
                            <h3 className="text-white text-xl font-semibold mb-3">
                                Problem Solving
                            </h3>
                        </div>
                        <p className="text-gray text-sm leading-relaxed">
                            Analytical approach to challenges with creative solutions.
                            Experience in debugging complex issues and optimizing application
                            performance across various projects.
                        </p>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20">
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
                <SectionHeader title="#testimonials" />

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