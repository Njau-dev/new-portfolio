'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Github, Terminal, Calendar, Briefcase, BookOpen } from 'lucide-react';
import CLIPlayground from '@/components/ui/cli-playground';
import ReadmeViewer from '@/components/ui/readme-viewer';
import type { Project } from '@/types/project';
import { getCategoryIcon, getCategoryLabel } from '@/utils/project-icon';
import ImageGallery from '../ui/image-gallery';

interface Props {
    project: Project;
}

const ProjectDetailClient = ({ project }: Props) => {
    const [showPlayground, setShowPlayground] = useState(false);
    const [showReadme, setShowReadme] = useState(false);

    // stop background scroll when modals are open
    useEffect(() => {
        if (showPlayground || showReadme) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [showPlayground, showReadme]);

    return (
        <>
            <main className="min-h-screen">
                {/* Back Button */}
                <div className="w-full max-w-7xl mx-auto px-6 pt-8">
                    <Link href="/projects">
                        <button className="flex items-center gap-2 text-gray hover:text-white transition-colors border border-gray/50 px-4 py-2 hover:bg-primary/10 hover:border-primary cursor-pointer">
                            <ArrowLeft size={20} className='text-primary' />
                            <span>Back to Projects</span>
                        </button>
                    </Link>
                </div>

                {/* Hero Section */}
                <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-16">
                    <div className="relative">
                        {/* Category Badge */}
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-primary text-xs border border-primary px-3 py-1 flex items-center gap-2">
                                {getCategoryIcon(project.category)}
                                {getCategoryLabel(project.category)}
                            </span>
                            {project.platform && (
                                <span className="text-gray text-xs border border-gray/50 px-3 py-1">
                                    {project.platform}
                                </span>
                            )}
                            {project.noCodePlatform && (
                                <span className="text-gray text-xs border border-gray/50 px-3 py-1">
                                    {project.noCodePlatform}
                                </span>
                            )}
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                            {project.title}
                        </h1>
                        <p className="text-gray text-xl mb-6">
                            {project.description}
                        </p>

                        {/* Meta Information */}
                        <div className="flex flex-wrap gap-4 text-gray mb-8">
                            {project.company && (
                                <div className="flex items-center gap-2">
                                    <Briefcase size={18} />
                                    <span>{project.company}</span>
                                </div>
                            )}
                            {project.duration && (
                                <div className="flex items-center gap-2">
                                    <Calendar size={18} />
                                    <span>{project.duration}</span>
                                </div>
                            )}
                            {project.role && (
                                <div className="flex items-center gap-2">
                                    <span className="text-primary">•</span>
                                    <span>{project.role}</span>
                                </div>
                            )}
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.techStack.map((tech, index) => (
                                <span
                                    key={index}
                                    className="text-sm text-gray border border-gray/50 px-4 py-2"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4">
                            {project.links.github && (
                                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                    <Button variant="primary">
                                        <span className="flex items-center gap-2">
                                            <Github size={16} />
                                            View Source
                                        </span>
                                    </Button>
                                </a>
                            )}
                            {project.links.live && (
                                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                                    <Button variant="primary">
                                        <span className="flex items-center gap-2">
                                            <ExternalLink size={16} />
                                            Live Demo
                                        </span>
                                    </Button>
                                </a>
                            )}
                            {project.category === 'cli' && project.cliCommands && (
                                <Button variant="primary" onClick={() => setShowPlayground(true)}>
                                    <span className="flex items-center gap-2">
                                        <Terminal size={16} />
                                        Open Playground
                                    </span>
                                </Button>
                            )}
                            {project.links.appStore && (
                                <a href={project.links.appStore} target="_blank" rel="noopener noreferrer">
                                    <Button variant="primary">App Store</Button>
                                </a>
                            )}
                            {project.links.playStore && (
                                <a href={project.links.playStore} target="_blank" rel="noopener noreferrer">
                                    <Button variant="primary">Play Store</Button>
                                </a>
                            )}
                        </div>

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

                {/* Screenshots Gallery */}
                {project.screenshots && project.screenshots.length > 0 && (
                    <ImageGallery
                        images={project.screenshots}
                        altPrefix={`${project.title} screenshot`}
                    />
                )}

                {/* Overview Section */}
                <section className="w-full max-w-7xl mx-auto px-6 py-12">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-40">
                        <div className="lg:w-2/3">
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="text-primary">#</span>
                                Overview
                            </h2>
                            <p className="text-gray leading-relaxed text-lg mb-8">
                                {project.overview}
                            </p>

                            {/* Features */}
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-primary">#</span>
                                Key Features
                            </h3>
                            <ul className="space-y-3 mb-8">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="flex items-end gap-3 text-gray">
                                        <span className="text-primary mt-1">▹</span>
                                        <span className="leading-relaxed">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Challenges & Solutions */}
                            {project.challenges && project.solutions && (
                                <>
                                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                        <span className="text-primary">#</span>
                                        Challenges & Solutions
                                    </h3>
                                    <div className="mb-4">
                                        <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                                        <p className="text-gray leading-relaxed mb-4">{project.challenges}</p>
                                    </div>
                                    <div className="mb-8">
                                        <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                                        <p className="text-gray leading-relaxed">{project.solutions}</p>
                                    </div>
                                </>
                            )}

                            {/* CLI Commands */}
                            {project.category === 'cli' && project.cliCommands && (
                                <>
                                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                        <span className="text-primary">#</span>
                                        Available Commands
                                    </h3>
                                    {project.installCommand && (
                                        <div className="bg-[#1e1e1e] border border-gray/70 p-4 mb-4 font-mono text-sm">
                                            <div className="text-gray mb-2">Installation:</div>
                                            <div className="text-primary">{project.installCommand}</div>
                                        </div>
                                    )}
                                    <div className="space-y-4 mb-8">
                                        {project.cliCommands.map((cmd, index) => (
                                            <div key={index} className="border border-gray/70 p-4">
                                                <div className="font-mono text-primary mb-2">{cmd.command}</div>
                                                <p className="text-gray text-sm mb-2">{cmd.description}</p>
                                                <div className="bg-[#1e1e1e] p-2 font-mono text-xs text-gray">
                                                    $ {cmd.example}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}

                            {/* Collaborators */}
                            {project.collaborators && project.collaborators.length > 0 && (
                                <>
                                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                        <span className="text-primary">#</span>
                                        Collaborators
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                        {project.collaborators.map((collaborator, index) => (
                                            <div key={index} className="border border-gray/70 p-4">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                                                        <span className="text-primary font-bold">
                                                            {collaborator.name.charAt(0)}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="text-white font-semibold">{collaborator.name}</p>
                                                        <p className="text-gray text-sm">{collaborator.role}</p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 mt-3">
                                                    {collaborator.github && (
                                                        <a
                                                            href={collaborator.github}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-gray hover:text-primary transition-colors text-sm"
                                                        >
                                                            GitHub
                                                        </a>
                                                    )}
                                                    {collaborator.linkedin && (
                                                        <a
                                                            href={collaborator.linkedin}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-gray hover:text-primary transition-colors text-sm"
                                                        >
                                                            LinkedIn
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="lg:w-1/3">
                            <div className="sticky top-16 space-y-6">
                                {/* Project Info Card */}
                                <div className="border border-gray/70 bg-background p-6">
                                    <h3 className="text-white text-xl font-semibold mb-4">
                                        Project Info
                                    </h3>
                                    <div className="space-y-3 text-sm">
                                        {project.company && (
                                            <div>
                                                <span className="text-gray">Company:</span>
                                                <p className="text-white mt-1">{project.company}</p>
                                            </div>
                                        )}
                                        {project.role && (
                                            <div>
                                                <span className="text-gray">Role:</span>
                                                <p className="text-white mt-1">{project.role}</p>
                                            </div>
                                        )}
                                        {project.duration && (
                                            <div>
                                                <span className="text-gray">Duration:</span>
                                                <p className="text-white mt-1">{project.duration}</p>
                                            </div>
                                        )}
                                        <div>
                                            <span className="text-gray">Category:</span>
                                            <p className="text-white mt-1">{getCategoryLabel(project.category)}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative pattern */}
                                <div className="hidden lg:block relative h-[200px] w-full">
                                    <Image
                                        src="/pattern.svg"
                                        alt="decorative pattern"
                                        fill
                                        className="object-contain opacity-60"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Documentation Section */}
                {(project.links.github || project.readmeUrl) && (
                    <section className="w-full max-w-7xl mx-auto px-6 py-12">
                        <div className="border border-primary/30 bg-primary/5 p-8 md:p-12 text-center">
                            <BookOpen size={48} className="text-primary mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Want to Learn More?
                            </h3>
                            <p className="text-gray mb-6 max-w-2xl mx-auto">
                                Check out the complete documentation to understand the project architecture,
                                setup instructions, and detailed API references.
                            </p>
                            <Button variant="primary" onClick={() => setShowReadme(true)}>
                                <span className="flex items-center gap-2">
                                    <BookOpen size={16} />
                                    View Documentation
                                </span>
                            </Button>
                        </div>
                    </section>
                )}

                {/* Navigation */}
                <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20">
                    <div className="border-t border-gray/30 pt-8 flex justify-center">
                        <Link href="/projects">
                            <Button variant="primary">View All Projects</Button>
                        </Link>
                    </div>
                </section>
            </main>

            {/* CLI Playground Modal */}
            {showPlayground && project.cliCommands && (
                <CLIPlayground
                    commands={project.cliCommands}
                    projectTitle={project.title}
                    installCommand={project.installCommand}
                    terminalUrl={project.terminalUrl || ''}
                    githubUrl={project.links.github}
                    onClose={() => setShowPlayground(false)}
                    onOpenReadme={() => {
                        setShowPlayground(false);
                        setShowReadme(true);
                    }}
                />
            )}

            {/* README Viewer Modal */}
            {showReadme && (
                <ReadmeViewer
                    githubUrl={project.links.github}
                    readmeContent={project.readmeContent}
                    projectTitle={project.title}
                    onClose={() => setShowReadme(false)}
                />
            )}
        </>
    );
};

export default ProjectDetailClient;