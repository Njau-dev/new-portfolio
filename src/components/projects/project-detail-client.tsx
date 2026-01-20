"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/button";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Terminal,
  Calendar,
  Briefcase,
  BookOpen
} from "lucide-react";
import CLIPlayground from "@/components/ui/cli-playground";
import ReadmeViewer from "@/components/ui/readme-viewer";
import type { Project } from "@/types/project";
import { getCategoryIcon, getCategoryLabel } from "@/utils/project-icon";
import ImageGallery from "../ui/image-gallery";

interface Props {
  project: Project;
}

const ProjectDetailClient = ({ project }: Props) => {
  const [showPlayground, setShowPlayground] = useState(false);
  const [showReadme, setShowReadme] = useState(false);

  // stop background scroll when modals are open
  useEffect(() => {
    if (showPlayground || showReadme) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showPlayground, showReadme]);

  return (
    <>
      <main className="min-h-screen">
        {/* Back Button */}
        <div className="mx-auto w-full max-w-7xl px-6 pt-8">
          <Link href="/projects">
            <button className="text-gray border-gray/50 hover:bg-primary/10 hover:border-primary flex cursor-pointer items-center gap-2 border px-4 py-2 transition-colors hover:text-white">
              <ArrowLeft size={20} className="text-primary" />
              <span>Back to Projects</span>
            </button>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16">
          <div className="relative">
            {/* Category Badge */}
            <div className="mb-4 flex items-center gap-2">
              <span className="text-primary border-primary flex items-center gap-2 border px-3 py-1 text-xs">
                {getCategoryIcon(project.category)}
                {getCategoryLabel(project.category)}
              </span>
              {project.platform && (
                <span className="text-gray border-gray/50 border px-3 py-1 text-xs">
                  {project.platform}
                </span>
              )}
              {project.noCodePlatform && (
                <span className="text-gray border-gray/50 border px-3 py-1 text-xs">
                  {project.noCodePlatform}
                </span>
              )}
            </div>

            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="text-gray mb-6 text-xl">{project.description}</p>

            {/* Meta Information */}
            <div className="text-gray mb-8 flex flex-wrap gap-4">
              {project.company && (
                <div className="flex items-center gap-2">
                  <Briefcase size={18} />
                  <span>{project.company}</span>
                </div>
              )}
              {project.duration && (
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{project.duration}</span>
                </div>
              )}
              {project.role && (
                <div className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  <span>{project.role}</span>
                </div>
              )}
            </div>

            {/* Technologies */}
            <div className="mb-8 flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span key={index} className="text-gray border-gray/50 border px-4 py-2 text-sm">
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary">
                    <span className="flex items-center gap-2">
                      <Github size={16} />
                      View Source
                    </span>
                  </Button>
                </a>
              )}
              {project.links.live && (
                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary">
                    <span className="flex items-center gap-2">
                      <ExternalLink size={16} />
                      Live Demo
                    </span>
                  </Button>
                </a>
              )}
              {project.category === "cli" && project.cliCommands && (
                <Button variant="primary" onClick={() => setShowPlayground(true)}>
                  <span className="flex items-center gap-2">
                    <Terminal size={16} />
                    Open Playground
                  </span>
                </Button>
              )}
              {project.links.appStore && (
                <a href={project.links.appStore} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary">App Store</Button>
                </a>
              )}
              {project.links.playStore && (
                <a href={project.links.playStore} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary">Play Store</Button>
                </a>
              )}
            </div>

            {/* Decorative pattern */}
            <div className="absolute top-0 -right-20 hidden h-40 w-40 opacity-20 lg:block">
              <Image src="/dots.svg" alt="decorative pattern" fill className="object-contain" />
            </div>
          </div>
        </section>

        {/* Screenshots Gallery */}
        {project.screenshots && project.screenshots.length > 0 && (
          <ImageGallery images={project.screenshots} altPrefix={`${project.title} screenshot`} />
        )}

        {/* Overview Section */}
        <section className="mx-auto w-full max-w-7xl px-6 py-12">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-40">
            <div className="lg:w-2/3">
              <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-white">
                <span className="text-primary">#</span>
                Overview
              </h2>
              <p className="text-gray mb-8 text-lg leading-relaxed">{project.overview}</p>

              {/* Features */}
              <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-white">
                <span className="text-primary">#</span>
                Key Features
              </h3>
              <ul className="mb-8 space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="text-gray flex items-end gap-3">
                    <span className="text-primary mt-1">▹</span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Challenges & Solutions */}
              {project.challenges && project.solutions && (
                <>
                  <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-white">
                    <span className="text-primary">#</span>
                    Challenges & Solutions
                  </h3>
                  <div className="mb-4">
                    <h4 className="mb-2 text-lg font-semibold text-white">Challenge</h4>
                    <p className="text-gray mb-4 leading-relaxed">{project.challenges}</p>
                  </div>
                  <div className="mb-8">
                    <h4 className="mb-2 text-lg font-semibold text-white">Solution</h4>
                    <p className="text-gray leading-relaxed">{project.solutions}</p>
                  </div>
                </>
              )}

              {/* CLI Commands */}
              {project.category === "cli" && project.cliCommands && (
                <>
                  <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-white">
                    <span className="text-primary">#</span>
                    Available Commands
                  </h3>
                  {project.installCommand && (
                    <div className="border-gray/70 mb-4 border bg-[#1e1e1e] p-4 font-mono text-sm">
                      <div className="text-gray mb-2">Installation:</div>
                      <div className="text-primary">{project.installCommand}</div>
                    </div>
                  )}
                  <div className="mb-8 space-y-4">
                    {project.cliCommands.map((cmd, index) => (
                      <div key={index} className="border-gray/70 border p-4">
                        <div className="text-primary mb-2 font-mono">{cmd.command}</div>
                        <p className="text-gray mb-2 text-sm">{cmd.description}</p>
                        <div className="text-gray bg-[#1e1e1e] p-2 font-mono text-xs">
                          $ {cmd.example}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Collaborators */}
              {project.collaborators && project.collaborators.length > 0 && (
                <>
                  <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-white">
                    <span className="text-primary">#</span>
                    Collaborators
                  </h3>
                  <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {project.collaborators.map((collaborator, index) => (
                      <div key={index} className="border-gray/70 border p-4">
                        <div className="mb-2 flex items-center gap-3">
                          <div className="bg-primary/20 flex h-10 w-10 items-center justify-center rounded-full">
                            <span className="text-primary font-bold">
                              {collaborator.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold text-white">{collaborator.name}</p>
                            <p className="text-gray text-sm">{collaborator.role}</p>
                          </div>
                        </div>
                        <div className="mt-3 flex gap-3">
                          {collaborator.github && (
                            <a
                              href={collaborator.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray hover:text-primary text-sm transition-colors"
                            >
                              GitHub
                            </a>
                          )}
                          {collaborator.linkedin && (
                            <a
                              href={collaborator.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray hover:text-primary text-sm transition-colors"
                            >
                              LinkedIn
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-16 space-y-6">
                {/* Project Info Card */}
                <div className="border-gray/70 bg-background border p-6">
                  <h3 className="mb-4 text-xl font-semibold text-white">Project Info</h3>
                  <div className="space-y-3 text-sm">
                    {project.company && (
                      <div>
                        <span className="text-gray">Company:</span>
                        <p className="mt-1 text-white">{project.company}</p>
                      </div>
                    )}
                    {project.role && (
                      <div>
                        <span className="text-gray">Role:</span>
                        <p className="mt-1 text-white">{project.role}</p>
                      </div>
                    )}
                    {project.duration && (
                      <div>
                        <span className="text-gray">Duration:</span>
                        <p className="mt-1 text-white">{project.duration}</p>
                      </div>
                    )}
                    <div>
                      <span className="text-gray">Category:</span>
                      <p className="mt-1 text-white">{getCategoryLabel(project.category)}</p>
                    </div>
                  </div>
                </div>

                {/* Decorative pattern */}
                <div className="relative hidden h-[200px] w-full lg:block">
                  <Image
                    src="/pattern.svg"
                    alt="decorative pattern"
                    fill
                    className="object-contain opacity-60"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Section */}
        {(project.links.github || project.readmeUrl) && (
          <section className="mx-auto w-full max-w-7xl px-6 py-12">
            <div className="border-primary/30 bg-primary/5 border p-8 text-center md:p-12">
              <BookOpen size={48} className="text-primary mx-auto mb-4" />
              <h3 className="mb-4 text-2xl font-bold text-white">Want to Learn More?</h3>
              <p className="text-gray mx-auto mb-6 max-w-2xl">
                Check out the complete documentation to understand the project architecture, setup
                instructions, and detailed API references.
              </p>
              <Button variant="primary" onClick={() => setShowReadme(true)}>
                <span className="flex items-center gap-2">
                  <BookOpen size={16} />
                  View Documentation
                </span>
              </Button>
            </div>
          </section>
        )}

        {/* Navigation */}
        <section className="mx-auto w-full max-w-7xl px-6 py-12 md:py-20">
          <div className="border-gray/30 flex justify-center border-t pt-8">
            <Link href="/projects">
              <Button variant="primary">View All Projects</Button>
            </Link>
          </div>
        </section>
      </main>

      {/* CLI Playground Modal */}
      {showPlayground && project.cliCommands && (
        <CLIPlayground
          commands={project.cliCommands}
          projectTitle={project.title}
          installCommand={project.installCommand}
          terminalUrl={project.terminalUrl || ""}
          githubUrl={project.links.github}
          onClose={() => setShowPlayground(false)}
          onOpenReadme={() => {
            setShowPlayground(false);
            setShowReadme(true);
          }}
        />
      )}

      {/* README Viewer Modal */}
      {showReadme && (
        <ReadmeViewer
          githubUrl={project.links.github}
          readmeContent={project.readmeContent}
          projectTitle={project.title}
          onClose={() => setShowReadme(false)}
        />
      )}
    </>
  );
};

export default ProjectDetailClient;
