import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { WorkCardProps } from "@/types";

const CardContent: React.FC<{ work: WorkCardProps["work"]; showLink?: boolean }> = ({
  work,
  showLink
}) => (
  <>
    {/* Header */}
    <div className="mb-4">
      <div className="flex items-start justify-between">
        <h3 className="group-hover:text-primary mb-2 text-xl font-semibold text-white transition-colors">
          {work.position}
        </h3>
        {showLink && (
          <ArrowUpRight
            size={20}
            className="text-gray group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        )}
      </div>
      <div className="text-gray flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
        <span className="font-medium">{work.company}</span>
        <span>{work.period}</span>
      </div>
      <span className="text-gray text-sm">{work.location}</span>
    </div>

    {/* Description */}
    <div className="mb-4">
      <ul className="text-gray space-y-2 text-sm">
        {work.description.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-primary mt-1">▹</span>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Technologies */}
    <div className="flex flex-wrap gap-2">
      {work.technologies.map((tech, index) => (
        <span key={index} className="text-gray border-gray/50 border px-3 py-1 text-xs">
          {tech}
        </span>
      ))}
    </div>
  </>
);

const WorkCard: React.FC<WorkCardProps> = ({ work, showLink }) => {
  if (showLink) {
    return (
      <Link href={`/work/${work.id}`}>
        <div className="border-gray/70 bg-background hover:border-primary group my-4 cursor-pointer border p-6 transition-all duration-300">
          <CardContent work={work} showLink={showLink} />
        </div>
      </Link>
    );
  }

  return (
    <div className="border-gray/70 bg-background hover:border-primary my-4 border p-6 transition-colors duration-300">
      <CardContent work={work} />
    </div>
  );
};

export default WorkCard;
