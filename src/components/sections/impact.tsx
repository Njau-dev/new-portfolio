import Image from 'next/image'
import SectionHeader from '../ui/section-header'
import AnimatedCounter from '../ui/animated-counter'

const Impact = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-12 md:py-20">
            <SectionHeader title="impact" hero={false} />

            <div className="border border-gray/70 bg-background p-8 md:p-12 relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                        Impact By The Numbers
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {/* Experience */}
                        <div className="text-center">
                            <AnimatedCounter target={23} monthsToYears={true} duration={1400} className="text-4xl md:text-5xl font-bold mb-2" />
                            <p className="text-gray text-sm">Years Experience</p>
                        </div>

                        {/* Projects */}
                        <div className="text-center">
                            <AnimatedCounter target={11} duration={1200} postfix="+" className="text-4xl md:text-5xl font-bold mb-2" />
                            <p className="text-gray text-sm">Projects Delivered</p>
                        </div>

                        {/* Client Satisfaction */}
                        <div className="text-center">
                            <AnimatedCounter target={100} duration={1200} postfix="%" className="text-4xl md:text-5xl font-bold mb-2" />
                            <p className="text-gray text-sm">Client Satisfaction</p>
                        </div>

                        {/* Happy Clients */}
                        <div className="text-center">
                            <AnimatedCounter target={7} duration={1200} postfix="+" className="text-4xl md:text-5xl font-bold mb-2" />
                            <p className="text-gray text-sm">Happy Clients</p>
                        </div>
                    </div>
                </div>

                {/* Background pattern */}
                <div className="absolute inset-0 opacity-3">
                    <Image
                        src="/logo-pattern.svg"
                        alt="background pattern"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    )
}

export default Impact
