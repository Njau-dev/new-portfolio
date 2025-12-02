import { WorkCardProps } from '@/types';

const WorkCard = ({ work }: WorkCardProps) => {
    return (
        <div className="border border-gray/70 bg-background p-6 hover:border-accent transition-colors duration-300">
            {/* Header */}
            <div className="mb-4">
                <h3 className="text-white text-xl font-semibold mb-2">
                    {work.position}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-gray text-sm">
                    <span className="font-medium">{work.company}</span>
                    <span>{work.period}</span>
                </div>
                <span className="text-gray text-sm">{work.location}</span>
            </div>

            {/* Description */}
            <div className="mb-4">
                <ul className="space-y-2 text-gray text-sm">
                    {work.description.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                            <span className="text-accent mt-1">▹</span>
                            <span className="leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
                {work.technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="text-xs text-gray border border-primary/50 px-3 py-1"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default WorkCard;