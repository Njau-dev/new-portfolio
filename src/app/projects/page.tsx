import ProjectsSection from '@/components/sections/projects'
import PageHeader from '@/components/ui/page-header'
import ProjectCard from '@/components/ui/project-card'
import SectionHeader from '@/components/ui/section-header'
import { projects } from '@/data/project'
import React from 'react'

const Projects = () => {
    return (
        <div className='min-h-screen'>
            <PageHeader title='projects' description='List of my projects' />

            {/* map all projects */}
            <div className="w-full max-w-7xl mx-auto px-6 py-4 md:py-10">
                <SectionHeader title='complete-apps' />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects