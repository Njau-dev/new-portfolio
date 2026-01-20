import SectionHeader from "../ui/section-header";
import ClientProjectCard from "../ui/client-project-card";
import { clientProjects } from "@/data/work";

const ClientProjects = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 md:py-20">
      <SectionHeader title="client-projects" />

      <div className="mt-8">
        <p className="text-gray mb-8 max-w-3xl leading-relaxed">
          I&apos;ve had the privilege of working with amazing clients to bring their visions to
          life. Here are some of the projects I&apos;m most proud of, showcasing diverse solutions
          across different industries.
        </p>

        <div className="relative">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {clientProjects.map((project) => (
              <ClientProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientProjects;
