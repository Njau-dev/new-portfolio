import Image from "next/image";
import SectionHeader from "../ui/section-header";
import WorkCard from "../ui/work-card";
import { workExperiences } from "@/data/work";
import { SectionProps } from "@/types";

const WorkSection = ({ header }: SectionProps) => {
  return (
    <section
      className={`mx-auto w-full max-w-7xl px-4 ${header ? "py-12 md:py-20" : "py-0 md:py-0"} `}
    >
      {header ? <SectionHeader title="work" hero={true} /> : null}

      <div className="relative mt-8 flex flex-col gap-8 lg:flex-row lg:gap-40">
        {/* Left side - Work cards */}
        <div className="w-full lg:w-3/5">
          <div className="space-y-6">
            {workExperiences.map((work) => (
              <WorkCard key={work.id} work={work} showLink />
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block lg:w-2/5">
          <div className="sticky top-16 space-y-8">
            {/* Top pattern */}
            <div className="relative h-[180px] w-full opacity-70">
              <Image
                src="/pattern.svg"
                alt="decorative pattern"
                fill
                className="object-contain object-left"
              />
            </div>

            <div className="relative h-[150px] w-full">
              <Image
                src="/dots.svg"
                alt="decorative dots"
                fill
                className="object-contain object-right"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-12 hidden lg:block">
        <div className="absolute top-0 left-0 h-32 w-32 opacity-50">
          <Image
            src="/logo-pattern.svg"
            alt="decorative logo pattern"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
