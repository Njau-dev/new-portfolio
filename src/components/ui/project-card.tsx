"use client";

import { ProjectCardProps } from "@/types";
import Image from "next/image";
import React from "react";
import Button from "./button";

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="border-gray/50 bg-background group hover:shadow-primary/10 flex h-full flex-col border transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg">
      <div className="group relative h-48 w-full overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-103"
        />
      </div>

      <div className="flex grow flex-col">
        <p className="text-gray p-4 font-mono text-xs tracking-wide md:text-sm">
          {project.techStack.join(" . ")}
        </p>

        <div className="bg-gray/50 h-px w-full" />

        <div className="p-4">
          <h2 className="mb-2 font-mono text-lg font-semibold text-white md:text-xl">
            {project.title}
          </h2>
          <p className="text-gray mb-8 grow text-sm md:text-base">{project.description}</p>
          <div className="mt-auto flex items-center gap-4">
            <Button variant="primary" href={`/projects/${project.id}`} className="flex-1">
              View
            </Button>
            {project.links.cached && (
              <Button variant="secondary" href={project.links.cached} className="flex-1">
                Live Demo
              </Button>
            )}
            {/* GitHub Link (if no live demo) */}
            {!project.links.cached && project.links.github && (
              <Button variant="secondary" href={project.links.github} className="flex-1">
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
