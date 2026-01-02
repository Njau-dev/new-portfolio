import SectionHeader from '../ui/section-header'
import { clientProjects } from '@/data/work'

const Testimonials = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-12 md:py-20">
            <SectionHeader title="testimonials" />

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {clientProjects
                    .filter(project => project.testimonial)
                    .map((project) => (
                        <div
                            key={project.id}
                            className="border border-gray/70 bg-background p-6"
                        >
                            <div className="mb-4">
                                <span className="text-primary text-4xl">&quot;</span>
                            </div>
                            <p className="text-gray italic mb-6 leading-relaxed">
                                {project.testimonial?.text}
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                                    <span className="text-primary font-bold">
                                        {project.testimonial?.author.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-white font-semibold">
                                        {project.testimonial?.author}
                                    </p>
                                    <p className="text-gray text-sm">
                                        {project.testimonial?.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </section>)
}

export default Testimonials