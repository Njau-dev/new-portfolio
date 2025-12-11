'use client';

import { useState } from 'react';
import Image from 'next/image';
import PageHeader from '@/components/ui/page-header';
import ProjectCard from '@/components/ui/project-card';
import SectionHeader from '@/components/ui/section-header';
import { ProjectCategory } from '@/types/project';
import { categories, getProjectsByCategory } from '@/data/project';
import { getCategoryIcon } from '@/utils/project-icon';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState<ProjectCategory>('web');

    const filteredProjects = getProjectsByCategory(activeCategory);

    return (
        <div className='min-h-screen'>
            <PageHeader
                title='projects'
                description='Explore my diverse portfolio of web apps, mobile applications, CLI tools, and no-code solutions'
            />

            {/* Category Tabs */}
            <div className="w-full max-w-7xl mx-auto px-6 py-8">
                <div className="flex flex-wrap gap-3">
                    {categories.map((category) => (
                        <button
                            key={category.value}
                            onClick={() => setActiveCategory(category.value as ProjectCategory)}
                            className={`flex gap-2 items-center px-6 py-3 border transition-all duration-300 ${activeCategory === category.value
                                ? 'border-primary text-white bg-primary/10'
                                : 'border-gray/70 text-gray hover:border-primary hover:text-primary'
                                }`}
                        >
                            <span className='text-primary'>{getCategoryIcon(category.value)}</span> {category.label} ({category.count})
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <div className="w-full max-w-7xl mx-auto px-6 py-4 md:py-10 relative">
                <SectionHeader title={`${activeCategory}-projects`} />

                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-gray text-lg">No projects found in this category yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;