import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ClientProjectCardProps } from '@/types';

const ClientProjectCard = ({ project }: ClientProjectCardProps) => {
    return (
        <Link href={`/work/${project.id}`}>
            <div className="border border-gray/70 bg-background p-6 hover:border-primary transition-all duration-300 group cursor-pointer h-full">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-primary text-xs border border-primary px-2 py-1">
                                {project.category}
                            </span>
                        </div>
                        <h3 className="text-white text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                            {project.projectName}
                        </h3>
                        <p className="text-gray text-sm">{project.clientName}</p>
                    </div>
                    <ArrowUpRight
                        size={20}
                        className="text-gray group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />
                </div>

                {/* Period */}
                <p className="text-gray text-sm mb-4">{project.period}</p>

                {/* Description */}
                <p className="text-gray text-sm leading-relaxed mb-4">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                        <span
                            key={index}
                            className="text-xs text-gray border border-gray/50 px-3 py-1"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 4 && (
                        <span className="text-xs text-gray">
                            +{project.technologies.length - 4} more
                        </span>
                    )}
                </div>

                {/* Metrics Preview */}
                {project.metrics && project.metrics.length > 0 && (
                    <div className="flex gap-4 pt-4 border-t border-gray/30">
                        {project.metrics.slice(0, 2).map((metric, index) => (
                            <div key={index}>
                                <p className="text-primary font-bold text-lg">{metric.value}</p>
                                <p className="text-gray text-xs">{metric.label}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Link>
    );
};

export default ClientProjectCard;