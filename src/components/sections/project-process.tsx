import React from 'react'
import SectionHeader from '../ui/section-header'

const ProjectProcess = () => {

    const processSteps = [
        {
            number: '01',
            title: 'Discovery & Understanding',
            description: 'I begin by deeply understanding your business needs, objectives, and the challenges you\'re facing. This phase is about listening carefully to your vision and goals.'
        },
        {
            number: '02',
            title: 'Audience & Preferences',
            description: 'Together, we identify your target audience and explore your preferences for design, functionality, and user experience to ensure the solution resonates with your users.'
        },
        {
            number: '03',
            title: 'Planning & Strategy',
            description: 'I develop a comprehensive plan that outlines the project scope, timeline, and technical approach, ensuring we\'re aligned every step of the way.'
        },
        {
            number: '04',
            title: 'Development & Creation',
            description: 'With a clear roadmap, I bring your project to life using best practices and modern technologies, maintaining regular communication throughout the process.'
        },
        {
            number: '05',
            title: 'Review & Refinement',
            description: 'Before final delivery, I present the completed deliverables for your review. Your feedback is invaluable, and I make any modifications you request to ensure complete satisfaction.'
        },
        {
            number: '06',
            title: 'Delivery & Support',
            description: 'Once you\'re completely satisfied, I deliver the final product along with any documentation needed. Your success is my priority, and I remain available for ongoing support.'
        }
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24">
            <SectionHeader title='my-process' />

            <div className="mt-12">
                <div className="mb-12 text-center max-w-3xl mx-auto">
                    <p className="text-gray text-lg leading-relaxed">
                        Every project is a partnership. I believe in putting clients first, ensuring your voice is heard
                        and your vision is realized through a transparent, collaborative process.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {processSteps.map((step, index) => (
                        <div
                            key={index}
                            className="group relative border border-gray/30 p-6 hover:border-primary transition-all duration-300"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary/0 via-primary to-primary/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                            <div className="mb-4">
                                <span className="text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                                    {step.number}
                                </span>
                            </div>

                            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                                {step.title}
                            </h3>

                            <p className="text-gray leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-block border border-primary/30 bg-primary/5 px-8 py-6 max-w-2xl">
                        <p className="text-white font-medium text-lg mb-2">
                            Client-Centered Approach
                        </p>
                        <p className="text-gray">
                            Your satisfaction is paramount. I listen carefully, communicate transparently, and ensure you&apos;re
                            delighted with every deliverable before we call it complete.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectProcess