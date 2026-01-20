import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ClientProjectCardProps } from "@/types";

const ClientProjectCard = ({ project }: ClientProjectCardProps) => {
  return (
    <Link href={`/work/${project.id}`}>
      <div className="border-gray/70 bg-background hover:border-primary group h-full cursor-pointer border p-6 transition-all duration-300">
        {/* Header */}
        <div className="mb-4 flex items-start justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="text-primary border-primary border px-2 py-1 text-xs">
                {project.category}
              </span>
            </div>
            <h3 className="group-hover:text-primary mb-1 text-xl font-semibold text-white transition-colors">
              {project.projectName}
            </h3>
            <p className="text-gray text-sm">{project.clientName}</p>
          </div>
          <ArrowUpRight
            size={20}
            className="text-gray group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>

        {/* Period */}
        <p className="text-gray mb-4 text-sm">{project.period}</p>

        {/* Description */}
        <p className="text-gray mb-4 text-sm leading-relaxed">{project.description}</p>

        {/* Technologies */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span key={index} className="text-gray border-gray/50 border px-3 py-1 text-xs">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-gray text-xs">+{project.technologies.length - 4} more</span>
          )}
        </div>

        {/* Metrics Preview */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="border-gray/30 flex gap-4 border-t pt-4">
            {project.metrics.slice(0, 2).map((metric, index) => (
              <div key={index}>
                <p className="text-primary text-lg font-bold">{metric.value}</p>
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
