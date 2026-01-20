import Image from "next/image";
import SectionHeader from "../ui/section-header";
import AnimatedCounter from "../ui/animated-counter";

const Impact = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 md:py-20">
      <SectionHeader title="impact" hero={false} />

      <div className="border-gray/70 bg-background relative overflow-hidden border p-8 md:p-12">
        <div className="relative z-10">
          <h2 className="mb-8 text-center text-2xl font-bold text-white md:text-3xl">
            Impact By The Numbers
          </h2>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {/* Experience */}
            <div className="text-center">
              <AnimatedCounter
                target={23}
                monthsToYears={true}
                duration={1400}
                className="mb-2 text-4xl font-bold md:text-5xl"
              />
              <p className="text-gray text-sm">Years Experience</p>
            </div>

            {/* Projects */}
            <div className="text-center">
              <AnimatedCounter
                target={11}
                duration={1200}
                postfix="+"
                className="mb-2 text-4xl font-bold md:text-5xl"
              />
              <p className="text-gray text-sm">Projects Delivered</p>
            </div>

            {/* Client Satisfaction */}
            <div className="text-center">
              <AnimatedCounter
                target={100}
                duration={1200}
                postfix="%"
                className="mb-2 text-4xl font-bold md:text-5xl"
              />
              <p className="text-gray text-sm">Client Satisfaction</p>
            </div>

            {/* Happy Clients */}
            <div className="text-center">
              <AnimatedCounter
                target={7}
                duration={1200}
                postfix="+"
                className="mb-2 text-4xl font-bold md:text-5xl"
              />
              <p className="text-gray text-sm">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-3">
          <Image src="/logo-pattern.svg" alt="background pattern" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Impact;
