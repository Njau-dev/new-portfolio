import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Calendar, MapPin, Users } from "lucide-react";
import { clientProjects, workExperiences } from "@/data/work";
import type { WorkExperience, ClientProject, WorkDetailPageProps } from "@/types";
import AnimatedCounter from "@/components/ui/animated-counter";
import ImageGallery from "@/components/ui/image-gallery";

// Generate static params for all work experiences and client projects
export async function generateStaticParams() {
  const workIds = workExperiences.map((work) => ({ id: String(work.id) }));
  const projectIds = clientProjects.map((project) => ({ id: String(project.id) }));

  return [...workIds, ...projectIds];
}

const WorkDetailPage = async ({ params }: WorkDetailPageProps) => {
  const { id } = await params;
  const workExperience = workExperiences.find((work) => String(work.id) === String(id));
  const clientProject = clientProjects.find((project) => String(project.id) === String(id));
  const experience = workExperience || clientProject;
  if (!experience) {
    notFound();
  }

  const isClientProject = (exp: WorkExperience | ClientProject): exp is ClientProject => {
    return "clientName" in exp;
  };

  const isWorkExperience = (exp: WorkExperience | ClientProject): exp is WorkExperience => {
    return "company" in exp;
  };

  return (
    <main className="min-h-screen">
      {/* Back Button */}
      <div className="mx-auto w-full max-w-7xl px-6 pt-8">
        <Link href="/work">
          <button className="text-gray border-gray/50 hover:bg-primary/10 hover:border-primary flex cursor-pointer items-center gap-2 border px-4 py-2 transition-colors hover:text-white">
            <ArrowLeft size={20} className="text-primary" />
            <span>Back to Work</span>
          </button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16">
        <div className="relative">
          {isClientProject(experience) ? (
            <>
              <div className="mb-4 flex items-center gap-2">
                <span className="text-primary border-primary border px-2 py-1 text-xs">
                  {experience.category}
                </span>
              </div>
              <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                {experience.projectName}
              </h1>
              <p className="text-gray mb-6 text-xl">for {experience.clientName}</p>
            </>
          ) : (
            <>
              <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                {experience.position}
              </h1>
              <p className="text-gray mb-6 text-xl">at {experience.company}</p>
            </>
          )}

          {/* Meta Information */}
          <div className="text-gray mb-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{experience.period}</span>
            </div>
            {isWorkExperience(experience) && (
              <>
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>{experience.location}</span>
                </div>
                {experience.teamSize && (
                  <div className="flex items-center gap-2">
                    <Users size={18} />
                    <span>{experience.teamSize}</span>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Technologies */}
          <div className="mb-8 flex flex-wrap gap-2">
            {experience.technologies.map((tech, index) => (
              <span key={index} className="text-gray border-gray/50 border px-4 py-2 text-sm">
                {tech}
              </span>
            ))}
          </div>

          {/* External Links */}
          {isClientProject(experience) && experience.liveUrl && (
            <div className="flex gap-4">
              <a href={experience.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="primary">
                  <span className="flex items-center gap-2">
                    Visit Live Site <ExternalLink size={16} />
                  </span>
                </Button>
              </a>
            </div>
          )}
          {isWorkExperience(experience) && experience.website && (
            <div className="flex gap-4">
              <a href={experience.website} target="_blank" rel="noopener noreferrer">
                <Button variant="primary">
                  <span className="flex items-center gap-2">
                    Visit Company <ExternalLink size={16} />
                  </span>
                </Button>
              </a>
            </div>
          )}

          {/* Decorative pattern */}
          <div className="absolute top-0 -right-20 hidden h-40 w-40 opacity-20 lg:block">
            <Image src="/dots.svg" alt="decorative pattern" fill className="object-contain" />
          </div>
        </div>
      </section>

      {/* Images Gallery */}
      {experience.images && experience.images.length > 0 && (
        <ImageGallery
          images={experience.images}
          altPrefix={isClientProject(experience) ? experience.projectName : experience.position}
        />
      )}

      {/* Overview */}
      <section className="mx-auto w-full max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-40">
          <div className="lg:w-2/3">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-white">
              <span className="text-primary">#</span>
              Overview
            </h2>
            <p className="text-gray mb-8 text-lg leading-relaxed">{experience.overview}</p>

            {/* Client Project Specific Content */}
            {isClientProject(experience) && (
              <>
                <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-white">
                  <span className="text-primary">#</span>
                  The Challenge
                </h3>
                <p className="text-gray mb-8 leading-relaxed">{experience.challenge}</p>

                <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-white">
                  <span className="text-primary">#</span>
                  The Solution
                </h3>
                <p className="text-gray mb-8 leading-relaxed">{experience.solution}</p>

                <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-white">
                  <span className="text-primary">#</span>
                  Key Features
                </h3>
                <ul className="mb-8 space-y-3">
                  {experience.features.map((feature, index) => (
                    <li key={index} className="text-gray flex items-start gap-3">
                      <span className="text-primary mt-1">▹</span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {/* Work Experience Specific Content */}
            {isWorkExperience(experience) && (
              <>
                <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-white">
                  <span className="text-primary">#</span>
                  Key Responsibilities
                </h3>
                <ul className="mb-8 space-y-3">
                  {experience.responsibilities.map((responsibility, index) => (
                    <li key={index} className="text-gray flex items-start gap-3">
                      <span className="text-primary mt-1">▹</span>
                      <span className="leading-relaxed">{responsibility}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-white">
                  <span className="text-primary">#</span>
                  Key Achievements
                </h3>
                <ul className="mb-8 space-y-3">
                  {experience.achievements.map((achievement, index) => (
                    <li key={index} className="text-gray flex items-start gap-3">
                      <span className="text-primary mt-1">▹</span>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* Sidebar with Metrics */}
          <div className="lg:w-1/3">
            <div className="sticky top-16">
              {/* Metrics */}
              {experience.metrics && experience.metrics.length > 0 && (
                <div className="border-gray/70 bg-background mb-6 border p-6">
                  <h3 className="mb-6 text-xl font-semibold text-white">Impact Metrics</h3>
                  <div className="space-y-6">
                    {experience.metrics.map((metric, index) => (
                      <div key={index}>
                        <AnimatedCounter
                          target={parseInt(metric.value)}
                          duration={1200}
                          className="text-primary mb-1 text-3xl font-bold"
                        />
                        <p className="mb-1 font-medium text-white">{metric.label}</p>
                        <p className="text-gray text-sm">{metric.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Decorative pattern */}
              <div className="relative hidden h-[200px] w-full lg:block">
                <Image
                  src="/logo-pattern.svg"
                  alt="decorative pattern"
                  fill
                  className="object-contain opacity-70"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {isClientProject(experience) && experience.testimonial && (
        <section className="mx-auto w-full max-w-7xl px-6 py-12">
          <div className="border-primary/50 bg-background relative border p-8 md:p-12">
            <div className="mb-6">
              <span className="text-primary text-6xl">&quot;</span>
            </div>
            <p className="text-gray mb-8 max-w-4xl text-lg leading-relaxed italic md:text-xl">
              {experience.testimonial.text}
            </p>
            <div className="flex items-center gap-4">
              <div className="bg-primary/20 flex h-16 w-16 items-center justify-center rounded-full">
                <span className="text-primary text-xl font-bold">
                  {experience.testimonial.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-lg font-semibold text-white">{experience.testimonial.author}</p>
                <p className="text-gray">{experience.testimonial.role}</p>
              </div>
            </div>

            {/* Background pattern */}
            <div className="absolute right-0 bottom-0 h-40 w-40 opacity-10">
              <Image
                src="/dots-rectangle.svg"
                alt="decorative pattern"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="mx-auto w-full max-w-7xl px-6 py-12 md:py-20">
        <div className="border-gray/30 flex justify-center border-t pt-8">
          <Link href="/work">
            <Button variant="primary">View All Work</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default WorkDetailPage;
