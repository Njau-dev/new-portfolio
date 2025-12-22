"use client";

import { ProjectCardProps } from '@/types';
import Image from 'next/image';
import React from 'react';
import Button from './button';

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="flex flex-col border border-gray/50 bg-background h-full transition-all duration-300 group hover:-translate-y-1 hover:scale-[1.01] hover:shadow-primary/10 hover:shadow-lg">
            <div className="relative w-full h-48 overflow-hidden group">
                <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-103"
                />
            </div>

            <div className="flex flex-col grow">
                <p className="font-mono text-xs md:text-sm text-gray tracking-wide p-4">
                    {project.techStack.join(' . ')}
                </p>

                <div className="w-full h-px bg-gray/50" />

                <div className='p-4'>
                    <h2 className="font-mono text-lg md:text-xl text-white font-semibold mb-2">
                        {project.title}
                    </h2>
                    <p className="text-sm md:text-base text-gray mb-8 grow">
                        {project.description}
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                        <Button
                            variant="primary"
                            href={`/projects/${project.id}`}
                            className="flex-1"
                        >
                            View
                        </Button>
                        {project.links.cached && (
                            <Button
                                variant="secondary"
                                href={project.links.cached}
                                className="flex-1"
                            >
                                Live Demo
                            </Button>
                        )}
                        {/* GitHub Link (if no live demo) */}
                        {!project.links.cached && project.links.github && (
                            <Button
                                variant="secondary"
                                href={project.links.github}
                                className="flex-1"
                            >
                                GitHub
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;