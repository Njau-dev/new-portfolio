import SectionHeader from '../ui/section-header';
import ProjectCard from '../ui/project-card';
import { projects } from '@/data/project';
import { SectionProps } from '@/types';

const ProjectsSection = ({ header }: SectionProps) => {
    return (
        <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20">
            {header ? <SectionHeader title="projects" hero={true} /> : null}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;