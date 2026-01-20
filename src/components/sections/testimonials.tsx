import SectionHeader from "../ui/section-header";
import { clientProjects } from "@/data/work";

const Testimonials = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 md:py-20">
      <SectionHeader title="testimonials" />

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {clientProjects
          .filter((project) => project.testimonial)
          .map((project) => (
            <div key={project.id} className="border-gray/70 bg-background border p-6">
              <div className="mb-4">
                <span className="text-primary text-4xl">&quot;</span>
              </div>
              <p className="text-gray mb-6 leading-relaxed italic">{project.testimonial?.text}</p>
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 flex h-12 w-12 items-center justify-center rounded-full">
                  <span className="text-primary font-bold">
                    {project.testimonial?.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-white">{project.testimonial?.author}</p>
                  <p className="text-gray text-sm">{project.testimonial?.role}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Testimonials;
