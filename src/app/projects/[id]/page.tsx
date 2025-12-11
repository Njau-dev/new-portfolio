import { notFound } from 'next/navigation';
import { projects } from '@/data/project';
import { ProjectDetailPageProps } from '@/types';
import ProjectDetailClient from '@/components/projects/project-detail-client';

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return <ProjectDetailClient project={project} />;
};

export default ProjectDetailPage;