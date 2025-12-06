import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Button from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Calendar, MapPin, Users } from 'lucide-react';
import { clientProjects, workExperiences } from '@/data/work';
import type { WorkExperience, ClientProject, WorkDetailPageProps } from '@/types';

// Generate static params for all work experiences and client projects
export async function generateStaticParams() {
    const workIds = workExperiences.map((work) => ({ id: String(work.id) }));
    const projectIds = clientProjects.map((project) => ({ id: String(project.id) }));

    return [...workIds, ...projectIds];
}

const WorkDetailPage = async ({ params }: WorkDetailPageProps) => {
    const { id } = await params;
    const workExperience = workExperiences.find((work) => String(work.id) === String(id));
    const clientProject = clientProjects.find((project) => String(project.id) === String(id));
    const experience = workExperience || clientProject;
    if (!experience) {
        notFound();
    }

    const isClientProject = (exp: WorkExperience | ClientProject): exp is ClientProject => {
        return 'clientName' in exp;
    };

    const isWorkExperience = (exp: WorkExperience | ClientProject): exp is WorkExperience => {
        return 'company' in exp;
    };

    return (
        <main className="min-h-screen">
            {/* Back Button */}
            <div className="w-full max-w-7xl mx-auto px-6 pt-8">
                <Link href="/work">
                    <button className="flex items-center gap-2 text-gray hover:text-accent transition-colors">
                        <ArrowLeft size={20} />
                        <span>Back to Work</span>
                    </button>
                </Link>
            </div>

            {/* Hero Section */}
            <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-16">
                <div className="relative">
                    {isClientProject(experience) ? (
                        <>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-accent text-xs border border-accent px-2 py-1">
                                    {experience.category}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                                {experience.projectName}
                            </h1>
                            <p className="text-gray text-xl mb-6">
                                for {experience.clientName}
                            </p>
                        </>
                    ) : (
                        <>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                                {experience.position}
                            </h1>
                            <p className="text-gray text-xl mb-6">
                                at {experience.company}
                            </p>
                        </>
                    )}

                    {/* Meta Information */}
                    <div className="flex flex-wrap gap-4 text-gray mb-8">
                        <div className="flex items-center gap-2">
                            <Calendar size={18} />
                            <span>{experience.period}</span>
                        </div>
                        {isWorkExperience(experience) && (
                            <>
                                <div className="flex items-center gap-2">
                                    <MapPin size={18} />
                                    <span>{experience.location}</span>
                                </div>
                                {experience.teamSize && (
                                    <div className="flex items-center gap-2">
                                        <Users size={18} />
                                        <span>{experience.teamSize}</span>
                                    </div>
                                )}
                            </>
                        )}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {experience.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="text-sm text-gray border border-gray/50 px-4 py-2"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* External Links */}
                    {isClientProject(experience) && experience.liveUrl && (
                        <div className="flex gap-4">
                            <a
                                href={experience.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="primary">
                                    <span className="flex items-center gap-2">
                                        Visit Live Site <ExternalLink size={16} />
                                    </span>
                                </Button>
                            </a>
                        </div>
                    )}
                    {isWorkExperience(experience) && experience.website && (
                        <div className="flex gap-4">
                            <a
                                href={experience.website}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="primary">
                                    <span className="flex items-center gap-2">
                                        Visit Company <ExternalLink size={16} />
                                    </span>
                                </Button>
                            </a>
                        </div>
                    )}

                    {/* Decorative pattern */}
                    <div className="hidden lg:block absolute -right-20 top-0 w-40 h-40 opacity-20">
                        <Image
                            src="/dots.svg"
                            alt="decorative pattern"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* Images Gallery */}
            {experience.images && experience.images.length > 0 && (
                <section className="w-full max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {experience.images.map((image, index) => (
                            <div key={index} className="relative h-[300px] md:h-[400px] border border-gray/70 overflow-hidden">
                                <Image
                                    src={image}
                                    alt={`Project screenshot ${index + 1}`}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Overview */}
            <section className="w-full max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-40">
                    <div className="lg:w-2/3">
                        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-accent">#</span>
                            Overview
                        </h2>
                        <p className="text-gray leading-relaxed text-lg mb-8">
                            {experience.overview}
                        </p>

                        {/* Client Project Specific Content */}
                        {isClientProject(experience) && (
                            <>
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="text-accent">#</span>
                                    The Challenge
                                </h3>
                                <p className="text-gray leading-relaxed mb-8">
                                    {experience.challenge}
                                </p>

                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="text-accent">#</span>
                                    The Solution
                                </h3>
                                <p className="text-gray leading-relaxed mb-8">
                                    {experience.solution}
                                </p>

                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="text-accent">#</span>
                                    Key Features
                                </h3>
                                <ul className="space-y-3 mb-8">
                                    {experience.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3 text-gray">
                                            <span className="text-accent mt-1">▹</span>
                                            <span className="leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}

                        {/* Work Experience Specific Content */}
                        {isWorkExperience(experience) && (
                            <>
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="text-accent">#</span>
                                    Key Responsibilities
                                </h3>
                                <ul className="space-y-3 mb-8">
                                    {experience.responsibilities.map((responsibility, index) => (
                                        <li key={index} className="flex items-start gap-3 text-gray">
                                            <span className="text-accent mt-1">▹</span>
                                            <span className="leading-relaxed">{responsibility}</span>
                                        </li>
                                    ))}
                                </ul>

                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="text-accent">#</span>
                                    Key Achievements
                                </h3>
                                <ul className="space-y-3 mb-8">
                                    {experience.achievements.map((achievement, index) => (
                                        <li key={index} className="flex items-start gap-3 text-gray">
                                            <span className="text-accent mt-1">▹</span>
                                            <span className="leading-relaxed">{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>

                    {/* Sidebar with Metrics */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-8">
                            {/* Metrics */}
                            {experience.metrics && experience.metrics.length > 0 && (
                                <div className="border border-gray/70 bg-background p-6 mb-6">
                                    <h3 className="text-white text-xl font-semibold mb-6">
                                        Impact Metrics
                                    </h3>
                                    <div className="space-y-6">
                                        {experience.metrics.map((metric, index) => (
                                            <div key={index}>
                                                <p className="text-accent text-3xl font-bold mb-1">
                                                    {metric.value}
                                                </p>
                                                <p className="text-white font-medium mb-1">
                                                    {metric.label}
                                                </p>
                                                <p className="text-gray text-sm">
                                                    {metric.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Decorative pattern */}
                            <div className="hidden lg:block relative h-[200px] w-full">
                                <Image
                                    src="/logo-pattern.svg"
                                    alt="decorative pattern"
                                    fill
                                    className="object-contain opacity-70"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            {isClientProject(experience) && experience.testimonial && (
                <section className="w-full max-w-7xl mx-auto px-6 py-12">
                    <div className="border border-accent/50 bg-background p-8 md:p-12 relative">
                        <div className="mb-6">
                            <span className="text-accent text-6xl">"</span>
                        </div>
                        <p className="text-gray text-lg md:text-xl italic mb-8 leading-relaxed max-w-4xl">
                            {experience.testimonial.text}
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                                <span className="text-accent font-bold text-xl">
                                    {experience.testimonial.author.charAt(0)}
                                </span>
                            </div>
                            <div>
                                <p className="text-white font-semibold text-lg">
                                    {experience.testimonial.author}
                                </p>
                                <p className="text-gray">
                                    {experience.testimonial.role}
                                </p>
                            </div>
                        </div>

                        {/* Background pattern */}
                        <div className="absolute bottom-0 right-0 w-40 h-40 opacity-10">
                            <Image
                                src="/dots-rectangle.svg"
                                alt="decorative pattern"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </section>
            )}

            {/* Navigation */}
            <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20">
                <div className="border-t border-gray/30 pt-8 flex justify-center">
                    <Link href="/work">
                        <Button variant="primary">
                            View All Work
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default WorkDetailPage;