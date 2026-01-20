"use client";
import { useState } from "react";
import PageHeader from "@/components/ui/page-header";
import ProjectCard from "@/components/ui/project-card";
import SectionHeader from "@/components/ui/section-header";
import { ProjectCategory } from "@/types/project";
import { categories, getProjectsByCategory } from "@/data/project";
import { getCategoryIcon } from "@/utils/project-icon";
import ProjectProcess from "@/components/sections/project-process";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("web");
  const filteredProjects = getProjectsByCategory(activeCategory);

  return (
    <div className="min-h-screen">
      <PageHeader
        title="projects"
        description="Explore my diverse portfolio of web apps, mobile applications, CLI tools, and no-code solutions"
      />

      {/* Category Tabs */}
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value as ProjectCategory)}
              className={`flex items-center gap-2 border px-6 py-3 transition-all duration-300 ${
                activeCategory === category.value
                  ? "border-primary bg-primary/10 text-white"
                  : "border-gray/70 text-gray hover:border-primary hover:text-primary"
              }`}
            >
              <span className="text-primary">{getCategoryIcon(category.value)}</span>{" "}
              {category.label} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="relative mx-auto w-full max-w-7xl px-6 py-4 md:py-10">
        <SectionHeader title={`${activeCategory}-projects`} />

        {filteredProjects.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-gray text-lg">No projects found in this category yet.</p>
          </div>
        )}
      </div>

      {/* Process Section */}
      <ProjectProcess />
    </div>
  );
};

export default Projects;
